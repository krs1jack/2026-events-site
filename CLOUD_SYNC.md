# Cloud Data Storage & Synchronization

## Overview

This application now uses Firebase Firestore to store and synchronize all event data across all group members in real-time. This ensures that everyone's input is visible to all members, and all data is backed up in the cloud.

## What Gets Synced

The following data is automatically synchronized across all users:

1. **RSVP Responses** - All member responses (Going, Maybe, Not Going) for each event
2. **Event Notes** - Notes added to events by any member
3. **Travel Details** - Hotel, flight, and transportation information for events
4. **Custom Events** - Events added by any group member
5. **Church Events** - Church services added to specific Sundays

## How It Works

### Data Storage Structure

Data is organized in Firestore as follows:

```
events/
  {eventId}/
    rsvp: { Sam: "going", Charisse: "maybe", ... }
    notes: "Bring snacks!"
    travel: { hotel: "...", flight: "...", transport: "..." }
    lastUpdated: timestamp

customEvents/
  {eventId}/
    title: "Custom Event"
    date: "2026-05-15"
    time: "7:00 PM"
    location: "Charlotte, NC"
    category: "festivals"
    createdBy: "Sam"
    lastUpdated: timestamp

churchEvents/
  {eventId}/
    title: "Jenn's Church - May 4"
    date: "2026-05-04"
    time: "Sunday Morning"
    location: "Winston-Salem, NC"
    category: "church"
    lastUpdated: timestamp
```

### Real-Time Updates

The application uses Firestore's real-time listeners to automatically update the UI when any member makes changes:

- When someone RSVPs to an event, all other users see the updated attendee count immediately
- When someone adds notes or travel details, they appear for everyone instantly
- When someone adds a custom event, it shows up for all members in real-time

### Offline Support

Data is cached in localStorage as a backup:
- If the cloud is temporarily unavailable, the app uses cached data
- When the connection is restored, data syncs automatically
- This ensures the app works even with poor internet connectivity

## User Actions That Trigger Cloud Sync

1. **Saving an RSVP** - Updates the `events/{eventId}` document with RSVP data
2. **Adding Notes** - Updates the `events/{eventId}` document with notes
3. **Adding Travel Details** - Updates the `events/{eventId}` document with travel info
4. **Creating a Custom Event** - Creates a new document in `customEvents/`
5. **Adding a Church Service** - Creates a new document in `churchEvents/`
6. **Editing a Custom Event** - Updates the document in `customEvents/`
7. **Deleting an Event** - Removes the document from Firestore

## Security & Privacy

- Users must sign in with Google to access the app
- Each user selects their identity from the group member list
- All data is stored in a shared Firestore database accessible to authenticated users
- Firestore security rules should be configured to allow read/write access only to authenticated users

## Benefits

1. **Visibility** - Everyone can see what everyone else is planning to attend
2. **Coordination** - Easy to see who's going to which events
3. **Backup** - All data is safely stored in the cloud, protected from browser crashes or data loss
4. **Real-time** - Changes appear instantly for all users
5. **Reliability** - Works offline with cached data and syncs when connection is restored

## Technical Implementation

### Key Functions

- `saveRSVPToCloud()` - Saves RSVP data to Firestore
- `saveNotesToCloud()` - Saves event notes to Firestore
- `saveTravelToCloud()` - Saves travel details to Firestore
- `saveCustomEventToCloud()` - Saves custom events to Firestore
- `saveChurchEventToCloud()` - Saves church events to Firestore
- `loadDataFromCloud()` - Loads all data from Firestore on app start
- `setupRealtimeListeners()` - Sets up listeners for real-time updates

### Error Handling

- If cloud save fails, data is still saved to localStorage
- User receives a warning toast notification
- App continues to function with local data
- Retry logic will attempt to sync when connection is restored
