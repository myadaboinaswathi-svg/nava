const https = require('https');

https.get('https://name-8a397.web.app/navayuga_traders___for_buyers.html', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // find script tags
    const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    let match;
    console.log("=== HTTP STATUS ===", res.statusCode);
    console.log("=== HEADERS ===", res.headers);
    console.log("=== SCRIPT TAGS ===");
    while ((match = regex.exec(data)) !== null) {
      const content = match[1].trim();
      if (content.includes('supabase')) {
        console.log("------------------------");
        console.log(content);
      }
    }
  });
}).on('error', (err) => {
  console.error("Error fetching page:", err);
});
