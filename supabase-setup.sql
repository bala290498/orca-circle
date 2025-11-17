-- Create community_signups table in Supabase
-- Run this in your Supabase SQL Editor or use Supabase MCP

CREATE TABLE IF NOT EXISTS community_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_community_signups_email ON community_signups(email);

-- Enable Row Level Security (RLS)
ALTER TABLE community_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (anonymous users can insert)
CREATE POLICY "Allow anonymous inserts" ON community_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow service role to read all (for admin access)
CREATE POLICY "Allow service role read" ON community_signups
  FOR SELECT
  TO service_role
  USING (true);

-- Optional: Create a function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_community_signups_updated_at 
  BEFORE UPDATE ON community_signups
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

