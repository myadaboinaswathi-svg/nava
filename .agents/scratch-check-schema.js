const https = require('https');

function testInsert(payload) {
  const options = {
    hostname: 'fzmffzyniungeuteuvfr.supabase.co',
    path: '/rest/v1/buyer_submissions',
    method: 'POST',
    headers: {
      'apikey': 'sb_publishable_odeDLjODnToRRo6pAw63zA_AzA22WT3',
      'Authorization': 'Bearer sb_publishable_odeDLjODnToRRo6pAw63zA_AzA22WT3',
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    }
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log("Status Code:", res.statusCode);
      try {
        console.log("Response:", JSON.parse(data));
      } catch (e) {
        console.log("Raw Response:", data);
      }
    });
  });
  req.write(JSON.stringify(payload));
  req.end();
}

console.log("Testing insert with 'email' column...");
testInsert({
  company: 'Test Company',
  name: 'Test Name',
  phone: '1234567890',
  email: 'test@example.com',
  product: 'test',
  quantity: '10',
  location: 'test'
});
