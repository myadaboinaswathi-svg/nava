const fs = require('fs');
const path = require('path');
const vm = require('vm');

const htmlPath = path.join(__dirname, '..', 'dist', 'navayuga_traders___admin.html');
console.log("Reading HTML file from:", htmlPath);

if (!fs.existsSync(htmlPath)) {
  console.error("HTML file does not exist!");
  process.exit(1);
}

let html = fs.readFileSync(htmlPath, 'utf8');

const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
let match;
const scripts = [];

while ((match = regex.exec(html)) !== null) {
  let content = match[1].trim();
  if (content && !content.includes('tailwind.config') && !match[0].includes('cdn.tailwindcss.com')) {
    if (content.includes('const supabase = window.supabaseClient;')) {
      content = content.replace('const supabase = window.supabaseClient;', 'const db = window.supabaseClient;');
      content = content.replace(/\bsupabase\b/g, 'db');
    }
    scripts.push(content);
  }
}

console.log("Found", scripts.length, "script blocks to run.");

const sandbox = {
  window: {
    location: { protocol: 'http:' }
  },
  document: {
    getElementById: (id) => {
      console.log(`[DOM] getElementById: ${id}`);
      return {
        value: '',
        innerText: '',
        innerHTML: '',
        addEventListener: (event, cb) => {
          console.log(`[DOM] addEventListener for ${id} on event ${event}`);
        },
        classList: {
          add: (c) => console.log(`[DOM] classList.add for ${id}: ${c}`),
          remove: (c) => console.log(`[DOM] classList.remove for ${id}: ${c}`),
          contains: (c) => false
        }
      };
    },
    querySelectorAll: (selector) => {
      console.log(`[DOM] querySelectorAll: ${selector}`);
      return [];
    },
    location: {
      protocol: 'http:'
    }
  },
  sessionStorage: {
    getItem: (key) => 'true',
    setItem: (key, val) => console.log(`[sessionStorage] setItem: ${key} = ${val}`),
    removeItem: (key) => console.log(`[sessionStorage] removeItem: ${key}`)
  },
  console: console,
  exports: undefined,
  module: undefined,
  define: undefined,
  URL: global.URL,
  fetch: global.fetch,
  Headers: global.Headers,
  Request: global.Request,
  Response: global.Response,
  WebSocket: global.WebSocket,
  setTimeout: global.setTimeout,
  clearTimeout: global.clearTimeout,
  setInterval: global.setInterval,
  clearInterval: global.clearInterval
};

sandbox.window.self = sandbox.window;
sandbox.window.window = sandbox.window;
sandbox.window.URL = global.URL;
sandbox.window.fetch = global.fetch;
sandbox.window.Headers = global.Headers;
sandbox.window.Request = global.Request;
sandbox.window.Response = global.Response;
sandbox.window.WebSocket = global.WebSocket;
sandbox.window.setTimeout = global.setTimeout;
sandbox.window.clearTimeout = global.clearTimeout;
sandbox.window.setInterval = global.setInterval;
sandbox.window.clearInterval = global.clearInterval;

vm.createContext(sandbox);

const https = require('https');
https.get('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2', (res) => {
  let cdnData = '';
  res.on('data', (chunk) => { cdnData += chunk; });
  res.on('end', () => {
    try {
      vm.runInContext(cdnData, sandbox);
      console.log("Supabase CDN script loaded in sandbox.");
      
      const supabaseModule = sandbox.window.supabase || sandbox.supabase;
      
      // Inject window.supabaseClient before running scripts
      sandbox.window.supabaseClient = supabaseModule.createClient(
        "https://fzmffzyniungeuteuvfr.supabase.co",
        "sb_publishable_odeDLjODnToRRo6pAw63zA_AzA22WT3"
      );
      console.log("Initialized window.supabaseClient in sandbox.");
      
      scripts.forEach((code, index) => {
        console.log(`\n--- Running Script Block ${index + 1} ---`);
        vm.runInContext(code, sandbox);
      });
      
      console.log("\n🎉 SUCCESS: All script blocks ran successfully after renaming to 'db'!");
    } catch (e) {
      console.error("\n❌ Execution failed inside sandbox:", e);
    }
  });
});
