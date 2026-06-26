const https = require('https');

https.get('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2', (res) => {
  console.log("Status:", res.statusCode);
  console.log("Headers:", res.headers);
  
  if (res.headers.location) {
    console.log("Redirects to:", res.headers.location);
    
    // Follow redirect
    https.get('https://cdn.jsdelivr.net/npm' + res.headers.location, (res2) => {
      console.log("Redirect Status:", res2.statusCode);
      console.log("Redirect Headers:", res2.headers);
    });
  }
});
