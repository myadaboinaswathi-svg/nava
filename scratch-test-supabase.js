const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log(`Connecting to: ${supabaseUrl}`);
  
  // Test reading from nt_products
  const { data, error: readError } = await supabase
    .from('nt_products')
    .select('*')
    .limit(1);
    
  if (readError) {
    console.error("❌ Read Error:", readError);
  } else {
    console.log("✅ Read successful! Product count:", data.length);
  }

  // Test inserting to buyer_submissions
  const { data: insertData, error: insertError } = await supabase
    .from('buyer_submissions')
    .insert([{
      company: 'Test Company',
      name: 'Test Name',
      phone: '1234567890',
      email: 'test@example.com',
      product: 'Grains',
      quantity: '10 MT',
      location: 'Test Location',
      message: 'Test Message'
    }])
    .select();

  if (insertError) {
    console.error("❌ Insert Error:", insertError);
  } else {
    console.log("✅ Insert successful! Created ID:", insertData[0].id);
    
    // Clean up
    const { error: deleteError } = await supabase
      .from('buyer_submissions')
      .delete()
      .eq('id', insertData[0].id);
    if (deleteError) {
      console.error("❌ Cleanup Delete Error:", deleteError);
    } else {
      console.log("✅ Cleanup successful.");
    }
  }
}

testConnection();
