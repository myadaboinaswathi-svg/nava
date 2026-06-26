const https = require('https');
const vm = require('vm');

console.log("Fetching Supabase CDN script...");
https.get('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log("CDN Script fetched. Size:", data.length, "bytes.");
    
    // Create a mock window context
    const sandbox = {
      window: {},
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
    
    // Run the CDN script in the sandbox
    try {
      vm.runInContext(data, sandbox);
      
      const supabaseModule = sandbox.window.supabase || sandbox.supabase;
      if (!supabaseModule) {
        console.error("❌ window.supabase is not defined!");
        return;
      }
      
      console.log("✅ window.supabase exists!");
      
      // Initialize the client
      const url = "https://fzmffzyniungeuteuvfr.supabase.co";
      const key = "sb_publishable_odeDLjODnToRRo6pAw63zA_AzA22WT3";
      
      console.log("Creating client instance...");
      const client = supabaseModule.createClient(url, key);
      
      if (!client) {
        console.error("❌ Client creation failed!");
        return;
      }
      
      console.log("✅ Client created! Available functions/properties on the client:");
      
      // Get all property names including inherited ones
      let obj = client;
      const props = new Set();
      while (obj) {
        Object.getOwnPropertyNames(obj).forEach(p => props.add(p));
        obj = Object.getPrototypeOf(obj);
      }
      
      console.log(Array.from(props).sort().filter(p => !p.startsWith('_')).slice(0, 30));
      
      if (typeof client.from === 'function') {
        console.log("🎉 SUCCESS: client.from is a function!");
      } else {
        console.error("❌ ERROR: client.from is not a function!");
      }
      
    } catch (e) {
      console.error("❌ Script execution failed:", e);
    }
  });
}).on('error', (err) => {
  console.error("Failed to fetch CDN:", err);
});
