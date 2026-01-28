-- Supabase Schema for 2026 Events Site
-- Run this SQL in your Supabase SQL Editor to create the necessary tables

-- Table for user RSVPs
CREATE TABLE IF NOT EXISTS user_rsvps (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    event_id TEXT NOT NULL,
    rsvp_data JSONB NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, event_id)
);

-- Table for user notes
CREATE TABLE IF NOT EXISTS user_notes (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    event_id TEXT NOT NULL,
    note_text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, event_id)
);

-- Table for user travel data
CREATE TABLE IF NOT EXISTS user_travel (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    event_id TEXT NOT NULL,
    travel_data JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, event_id)
);

-- Table for user custom events
CREATE TABLE IF NOT EXISTS user_custom_events (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    event_id TEXT NOT NULL,
    event_data JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, event_id)
);

-- Table for user church events
CREATE TABLE IF NOT EXISTS user_church_events (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    event_id TEXT NOT NULL,
    event_data JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, event_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_rsvps_user_id ON user_rsvps(user_id);
CREATE INDEX IF NOT EXISTS idx_user_notes_user_id ON user_notes(user_id);
CREATE INDEX IF NOT EXISTS idx_user_travel_user_id ON user_travel(user_id);
CREATE INDEX IF NOT EXISTS idx_user_custom_events_user_id ON user_custom_events(user_id);
CREATE INDEX IF NOT EXISTS idx_user_church_events_user_id ON user_church_events(user_id);

-- Enable Row Level Security (RLS)
-- ⚠️ IMPORTANT: These RLS policies use auth.uid() which requires Supabase Auth.
-- Since this app uses Firebase Authentication, you have two options:
--   1. DISABLE RLS (simpler): Run the following after this script:
--      ALTER TABLE user_rsvps DISABLE ROW LEVEL SECURITY;
--      ALTER TABLE user_notes DISABLE ROW LEVEL SECURITY;
--      ALTER TABLE user_travel DISABLE ROW LEVEL SECURITY;
--      ALTER TABLE user_custom_events DISABLE ROW LEVEL SECURITY;
--      ALTER TABLE user_church_events DISABLE ROW LEVEL SECURITY;
--   2. Set up custom JWT auth to integrate Firebase with Supabase (more complex)
-- For most family sites, Option 1 (disabling RLS) is recommended.
ALTER TABLE user_rsvps ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_travel ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_custom_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_church_events ENABLE ROW LEVEL SECURITY;

-- Create policies to allow users to access only their own data
-- RSVPs policies
CREATE POLICY "Users can view their own RSVPs" ON user_rsvps
    FOR SELECT USING (user_id = auth.uid()::text);

CREATE POLICY "Users can insert their own RSVPs" ON user_rsvps
    FOR INSERT WITH CHECK (user_id = auth.uid()::text);

CREATE POLICY "Users can update their own RSVPs" ON user_rsvps
    FOR UPDATE USING (user_id = auth.uid()::text);

CREATE POLICY "Users can delete their own RSVPs" ON user_rsvps
    FOR DELETE USING (user_id = auth.uid()::text);

-- Notes policies
CREATE POLICY "Users can view their own notes" ON user_notes
    FOR SELECT USING (user_id = auth.uid()::text);

CREATE POLICY "Users can insert their own notes" ON user_notes
    FOR INSERT WITH CHECK (user_id = auth.uid()::text);

CREATE POLICY "Users can update their own notes" ON user_notes
    FOR UPDATE USING (user_id = auth.uid()::text);

CREATE POLICY "Users can delete their own notes" ON user_notes
    FOR DELETE USING (user_id = auth.uid()::text);

-- Travel policies
CREATE POLICY "Users can view their own travel data" ON user_travel
    FOR SELECT USING (user_id = auth.uid()::text);

CREATE POLICY "Users can insert their own travel data" ON user_travel
    FOR INSERT WITH CHECK (user_id = auth.uid()::text);

CREATE POLICY "Users can update their own travel data" ON user_travel
    FOR UPDATE USING (user_id = auth.uid()::text);

CREATE POLICY "Users can delete their own travel data" ON user_travel
    FOR DELETE USING (user_id = auth.uid()::text);

-- Custom events policies
CREATE POLICY "Users can view their own custom events" ON user_custom_events
    FOR SELECT USING (user_id = auth.uid()::text);

CREATE POLICY "Users can insert their own custom events" ON user_custom_events
    FOR INSERT WITH CHECK (user_id = auth.uid()::text);

CREATE POLICY "Users can update their own custom events" ON user_custom_events
    FOR UPDATE USING (user_id = auth.uid()::text);

CREATE POLICY "Users can delete their own custom events" ON user_custom_events
    FOR DELETE USING (user_id = auth.uid()::text);

-- Church events policies
CREATE POLICY "Users can view their own church events" ON user_church_events
    FOR SELECT USING (user_id = auth.uid()::text);

CREATE POLICY "Users can insert their own church events" ON user_church_events
    FOR INSERT WITH CHECK (user_id = auth.uid()::text);

CREATE POLICY "Users can update their own church events" ON user_church_events
    FOR UPDATE USING (user_id = auth.uid()::text);

CREATE POLICY "Users can delete their own church events" ON user_church_events
    FOR DELETE USING (user_id = auth.uid()::text);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers to update updated_at on row updates
CREATE TRIGGER update_user_rsvps_updated_at BEFORE UPDATE ON user_rsvps
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_notes_updated_at BEFORE UPDATE ON user_notes
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_travel_updated_at BEFORE UPDATE ON user_travel
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_custom_events_updated_at BEFORE UPDATE ON user_custom_events
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_church_events_updated_at BEFORE UPDATE ON user_church_events
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
