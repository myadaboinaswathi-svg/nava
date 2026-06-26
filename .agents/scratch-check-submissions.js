const https = require('https');

const options = {
  hostname: 'fzmffzyniungeuteuvfr.supabase.co',
  path: '/rest/v1/buyer_submissions?select=*&order=id.desc&limit=5',
  method: 'GET',
  headers: {
    'apikey': 'sb_publishable_odeDLjODnToRRo6pAw63zA_AzA22WT3',
    'Authorization': 'Bearer sb_publishable_odeDLjODnToRRo6pAw63zA_AzA22WT3'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log("Status Code:", res.statusCode);
    try {
      const rows = JSON.parse(data);
      console.log("Latest Buyer Submissions:");
      console.log(JSON.stringify(rows, null, 2));
    } catch (e) {
      console.log("Raw response:", data);
    }
  });
});
req.on('error', (e) => { console.error(e); });
req.end();
