const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres:Nava@11__55@db.fzmffzyniungeuteuvfr.supabase.co:5432/postgres',
});

async function setup() {
  try {
    await client.connect();
    console.log('Connected to database');

    await client.query(`
      CREATE TABLE IF NOT EXISTS buyer_submissions (
        id SERIAL PRIMARY KEY,
        company TEXT,
        name TEXT,
        phone TEXT,
        email TEXT,
        product TEXT,
        quantity TEXT,
        location TEXT,
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Created buyer_submissions table');

    await client.query(`
      CREATE TABLE IF NOT EXISTS farmer_submissions (
        id SERIAL PRIMARY KEY,
        name TEXT,
        phone TEXT,
        village TEXT,
        district TEXT,
        state TEXT,
        crop TEXT,
        quantity TEXT,
        price TEXT,
        notes TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Created farmer_submissions table');

    await client.query(`
      CREATE TABLE IF NOT EXISTS nt_products (
        id SERIAL PRIMARY KEY,
        title TEXT,
        category TEXT,
        img TEXT,
        tag TEXT,
        desc_text TEXT,
        is_mock BOOLEAN,
        loaded BOOLEAN
      );
    `);
    console.log('Created nt_products table');

    await client.query(`
      CREATE TABLE IF NOT EXISTS nt_crop_prices (
        crop_id TEXT PRIMARY KEY,
        price TEXT,
        trend TEXT
      );
    `);
    console.log('Created nt_crop_prices table');

    console.log('Done creating tables!');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.end();
  }
}

setup();
