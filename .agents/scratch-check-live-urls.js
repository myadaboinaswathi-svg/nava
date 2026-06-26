const https = require('https');

function checkUrl(urlPath) {
  https.get('https://name-8a397.web.app' + urlPath, (res) => {
    console.log(`=== ${urlPath} ===`);
    console.log("HTTP Status:", res.statusCode);
    console.log("Cache-Control:", res.headers['cache-control']);
  }).on('error', (err) => {
    console.error("Error for " + urlPath + ":", err);
  });
}

checkUrl('/navayuga_traders___admin');
checkUrl('/navayuga_traders___for_buyers.html');
