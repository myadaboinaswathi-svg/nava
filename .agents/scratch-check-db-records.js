const https = require('https');

function checkTable(tableName) {
  const options = {
    hostname: 'fzmffzyniungeuteuvfr.supabase.co',
    path: `/rest/v1/${tableName}?select=*`,
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
      console.log(`=== ${tableName} ===`);
      console.log("Status:", res.statusCode);
      try {
        const rows = JSON.parse(data);
        console.log("Count:", Array.isArray(rows) ? rows.length : 'N/A');
        if (Array.isArray(rows) && rows.length > 0) {
          console.log("First Row:", rows[0]);
        } else {
          console.log("Response:", rows);
        }
      } catch (e) {
        console.log("Raw response:", data);
      }
    });
  });
  req.on('error', (e) => { console.error(e); });
  req.end();
}

checkTable('nt_products');
checkTable('nt_crop_prices');
checkTable('buyer_submissions');
checkTable('farmer_submissions');
