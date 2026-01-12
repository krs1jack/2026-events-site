# 2026 Culture, Travel & Fun - Events Site

A collaborative event planning and RSVP application for a group of friends to coordinate 2026 activities, trips, concerts, sports events, and more.

![Events Site Screenshot](https://github.com/user-attachments/assets/276f74bb-f413-45c5-877a-613e9500c18d)

## Features

### 🎉 Event Management
- View all group events organized by category (Music, Sports, Family, Festivals, Travel, Wellness, Church)
- Filter events by category
- Switch between list and calendar view
- Add custom events for the group
- Edit and delete events

### 👥 Collaborative RSVPs
- **Real-time synchronization** - See everyone's RSVPs instantly
- RSVP as "Going", "Maybe", or "Not Going"
- View all group members' responses at a glance
- Track attendee counts for each event

### 📝 Event Details
- Add notes to events that everyone can see
- Include travel details (hotel, flight, transportation)
- View event links and information
- See who created custom events

### ⛪ Church Services
- Add specific church services for Sundays
- Select from group members' churches
- Choose any Sunday in 2026

### ☁️ Cloud Backup & Sync
- **All data is backed up in the cloud** using Firebase Firestore
- **Real-time updates** - Changes sync instantly across all users
- **Offline support** - Works offline with cached data
- **Never lose your data** - Protected from browser crashes and data loss

### 🔐 Secure Sign-In
- Google authentication required
- Each user selects their identity from the group
- All data is private to authenticated group members

## Technology Stack

- **Frontend**: HTML, CSS (Custom styling), JavaScript (Vanilla)
- **Backend**: Firebase Authentication & Firestore
- **Hosting**: Vercel (or any static hosting)

## Getting Started

### For Users

1. Visit the application URL
2. Click "Sign in with Google"
3. Select your name from the group members
4. Start RSVPing to events!

### For Developers

1. Clone the repository
2. Open `index.html` in a browser or serve with a local server
3. The Firebase configuration is already included

For deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

## How It Works

### Data Storage

All data is stored in Firebase Firestore with the following structure:

- **events/** - RSVP responses, notes, and travel details for each event
- **customEvents/** - Custom events created by group members
- **churchEvents/** - Church services added to specific Sundays

Data is also cached in localStorage for offline access and performance.

### Real-Time Synchronization

When any user makes a change (RSVP, adds notes, creates an event), the change is:
1. Saved to Firestore
2. Automatically synced to all connected users
3. Cached locally for offline access

See [CLOUD_SYNC.md](CLOUD_SYNC.md) for technical details.

## Group Members

- Sam
- Charisse
- Dee
- Kim
- Jenn
- Arline
- Treva
- Kesha
- Dana

## Event Categories

- 🎵 **Music** - Concerts and shows
- 🏀 **Sports** - Basketball games, track meets, tournaments
- 👨‍👩‍👧‍👦 **Family** - Graduations, birthdays, celebrations
- 🎭 **Festivals & Culture** - Cultural events and festivals
- ✈️ **Travel** - Conferences, trips, major experiences
- 🌿 **Wellness & Nature** - Hikes, outdoor activities
- ⛪ **Church & Sunday** - Church services

## Key Features for Coordination

### Visibility
- Everyone can see everyone's RSVPs
- No more group chats asking "who's going?"
- Clear view of who's interested in what

### Backup & Safety
- All input is automatically backed up to the cloud
- Safe from browser crashes or cleared data
- Can access from any device

### Real-Time Updates
- See changes as they happen
- Know immediately when someone RSVPs
- No refresh needed

## Contributing

This is a private group project. If you're a group member and want to suggest changes:

1. Contact the repository owner
2. Suggest features or improvements
3. Report any bugs you encounter

## Support

For issues or questions:
- Check the console for errors
- Review [DEPLOYMENT.md](DEPLOYMENT.md) for setup help
- Contact the repository administrator

## License

Private project for group use only.

---

**Making 2026 unforgettable, together! 🎉**
