ALTER TABLE buyer_submissions ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'Pending';
ALTER TABLE farmer_submissions ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'Pending';
