# Deployment Guide

## Prerequisites

1. Firebase project (already configured in the code)
2. Firebase CLI installed: `npm install -g firebase-tools`

## Steps to Deploy

### 1. Enable Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `eventssite-104e7`
3. Navigate to **Build** > **Firestore Database**
4. Click **Create database**
5. Choose **Production mode** (we'll add security rules)
6. Select your preferred location (e.g., us-east1)

### 2. Configure Firestore Security Rules

1. In the Firebase Console, go to **Firestore Database** > **Rules**
2. Replace the default rules with the content from `firestore.rules`:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /events/{eventId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    match /customEvents/{eventId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    match /churchEvents/{eventId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click **Publish**

### 3. Enable Authentication (if not already enabled)

1. In Firebase Console, go to **Build** > **Authentication**
2. Click **Get started**
3. Go to **Sign-in method** tab
4. Enable **Google** as a sign-in provider
5. Add authorized domain if needed

### 4. Deploy to Hosting (Optional)

If you want to deploy to Firebase Hosting:

```bash
# Login to Firebase
firebase login

# Initialize Firebase in your project directory
firebase init

# Select:
# - Firestore (configure rules)
# - Hosting (for web deployment)

# Deploy
firebase deploy
```

### 5. Test the Application

1. Open the deployed application URL (or run locally)
2. Sign in with Google
3. Select your identity from the group members
4. Try adding an RSVP - it should save to Firestore
5. Open the app in another browser/incognito window
6. Sign in as a different member
7. You should see the RSVP from the first user

## Verifying Data in Firestore

1. Go to Firebase Console > Firestore Database
2. You should see three collections:
   - `events` - Contains RSVP, notes, and travel data for each event
   - `customEvents` - Contains custom events added by users
   - `churchEvents` - Contains church services added by users
3. Click on any document to view its contents

## Troubleshooting

### "Permission denied" errors

- Check that Firestore security rules are properly configured
- Ensure user is signed in (check authentication state)
- Verify the Firebase project ID matches in the config

### Data not syncing

- Check browser console for errors
- Verify Firestore is enabled in Firebase Console
- Check network connectivity
- Ensure Firebase SDK scripts are loading correctly

### Real-time updates not working

- Verify real-time listeners are set up after sign-in
- Check console for listener errors
- Ensure multiple users are accessing the same Firebase project

## Important Notes

- All group members should use the same Firebase project
- The Firebase API key in the code is safe to expose (it's protected by security rules)
- Users must sign in to read/write data
- Data is cached in localStorage for offline support
- Changes sync automatically across all connected users
