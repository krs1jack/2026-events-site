# Supabase Setup Instructions

This document explains how to set up Supabase for the 2026 Events Site to enable permanent, user-specific data storage.

## Overview

The site uses:
- **Firebase** for authentication (Google Sign-In)
- **Supabase** for permanent data storage

Each user's data is stored separately in Supabase, ensuring privacy and data persistence across devices.

## Setup Steps

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/sign in
2. Click "New Project"
3. Enter project details:
   - Project name: `2026-events-site` (or your preferred name)
   - Database password: (generate a strong password)
   - Region: Choose closest to your users
4. Wait for the project to be created (takes 1-2 minutes)

### 2. Get Your Supabase Credentials

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy the following:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

### 3. Update the Code with Your Credentials

⚠️ **IMPORTANT**: The credentials in the code are examples only. You MUST replace them with your own Supabase credentials.

In `script.js`, find this section around line 16:

```javascript
// === Supabase Configuration ===
const SUPABASE_URL = 'YOUR_PROJECT_URL_HERE';  // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY_HERE';  // Replace with your anon public key
```

Replace with your own credentials from step 2:
- Replace `SUPABASE_URL` with your Project URL from Supabase dashboard
- Replace `SUPABASE_ANON_KEY` with your anon public key from Supabase dashboard

### 4. Set Up the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Open the file `supabase-schema.sql` from this repository
4. Copy the entire contents of that file
5. Paste into the SQL Editor
6. Click "Run" to execute the SQL

This will create:
- 5 tables for storing user data (RSVPs, notes, travel, custom events, church events)
- Indexes for performance
- Row Level Security (RLS) policies
- Triggers for automatic timestamp updates

**⚠️ IMPORTANT NOTE ABOUT RLS POLICIES:**

The SQL schema includes Row Level Security (RLS) policies that use `auth.uid()`. However, this application uses **Firebase for authentication**, not Supabase Auth. This means the RLS policies as written **will not work** because `auth.uid()` will return NULL.

**You have two options:**

**Option 1: Disable RLS (Simpler, but less secure)**

After running the schema, disable RLS on all tables:

```sql
ALTER TABLE user_rsvps DISABLE ROW LEVEL SECURITY;
ALTER TABLE user_notes DISABLE ROW LEVEL SECURITY;
ALTER TABLE user_travel DISABLE ROW LEVEL SECURITY;
ALTER TABLE user_custom_events DISABLE ROW LEVEL SECURITY;
ALTER TABLE user_church_events DISABLE ROW LEVEL SECURITY;
```

**Note**: This means anyone with your anon key can access all data in these tables. Security is handled by the application code checking `currentUserId`.

**Option 2: Use Supabase Auth with Firebase (More Complex, more secure)**

Set up custom JWT authentication to integrate Firebase auth with Supabase. This is more complex but provides database-level security. See [Supabase Custom Claims documentation](https://supabase.com/docs/guides/auth/custom-claims-and-role-based-access-control-rbac) for details.

For most use cases, **Option 1 (disabling RLS) is recommended** since this is a family events site with trusted users.

### 5. Configure Authentication (Optional but Recommended)

To enable better integration with Firebase authentication:

1. In Supabase dashboard, go to **Authentication** → **Providers**
2. Disable email/password if not needed
3. The site uses Firebase for authentication, so Supabase will store data keyed by Firebase user IDs

## What Gets Stored in Supabase

The following user data is stored in Supabase:

1. **RSVPs** - Event attendance responses for each family member
2. **Notes** - Personal notes added to events
3. **Travel Details** - Hotel, flight, and transportation information
4. **Custom Events** - User-created events
5. **Church Events** - Selected church service dates

## Data Privacy

- Each user's data is isolated by their Firebase user ID
- Row Level Security (RLS) ensures users can only access their own data
- The `anon public` key is safe to use in client-side code
- All data operations are scoped to the authenticated user

## Testing

After setup:

1. Sign in to the site with Google
2. Make an RSVP to an event
3. Add a note to an event
4. Check your Supabase dashboard → **Table Editor** → `user_rsvps`
5. You should see your data stored there

## Troubleshooting

### Data not saving?
- Check browser console for errors
- Verify your Supabase credentials are correct
- Ensure the SQL schema was run successfully
- Check that RLS policies are enabled

### Can't see data in Supabase?
- Make sure you're signed in to the site
- Check that `currentUserId` is being set (visible in browser console logs)
- Verify the Firebase user ID matches the `user_id` in Supabase tables

### Authentication issues?
- Firebase handles authentication separately
- Supabase only stores data, not authentication
- Make sure Firebase configuration is correct in `script.js`

## Support

For issues or questions, please create an issue in the GitHub repository.
