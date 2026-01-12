# 2026 Culture, Travel & Fun - Event Sign-Up

A collaborative event planning website for friends and family to organize and RSVP to various events throughout 2026.

## Features

- **Google Sign-In Authentication**: Secure login with your Google account via Firebase Authentication
- **Event Management**: Browse concerts, sports events, family gatherings, festivals, and more
- **RSVP System**: Mark yourself as "Going", "Maybe", or "Not Going" for any event
- **Calendar View**: See all events in a monthly calendar format
- **Custom Events**: Add your own events to share with the group
- **Export to Google Calendar**: Export your RSVPs as .ics files
- **Profile Management**: Display your Google profile photo and name

## Getting Started

### Prerequisites

- A Google account for authentication
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Firebase Configuration

This application uses Firebase for authentication. The Firebase project is already configured with:

- **Project ID**: eventssite-104e7
- **Auth Domain**: eventssite-104e7.firebaseapp.com
- **Google Sign-In Provider**: Enabled

#### Important: Firebase Console Setup

To ensure Google sign-in works properly, verify the following in your Firebase Console:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select the project "eventssite-104e7"
3. Navigate to **Authentication** > **Sign-in method**
4. Ensure **Google** is enabled
5. Add authorized domains:
   - `localhost` (for local development)
   - Your production domain (e.g., `your-site.vercel.app`)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/krs1jack/2026-events-site.git
   cd 2026-events-site
   ```

2. Start a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Or using Node.js
   npx http-server -p 8000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

4. Click "Sign in with Google" to authenticate

### Deployment

This site can be deployed to any static hosting service:

- **Vercel**: Already configured (see `.vercel` folder)
- **GitHub Pages**
- **Netlify**
- **Firebase Hosting**

## Usage

### Signing In

1. When you first visit the site, you'll see a sign-in screen
2. Click the "Sign in with Google" button
3. Select your Google account or sign in if needed
4. Grant permission to access your basic profile information
5. You'll be redirected to the main events page

### Managing Events

- **Browse Events**: Use the category filters at the top to view specific types of events
- **RSVP**: Click the "RSVP" button on any event card
- **Update Status**: Select your attendance status and add notes
- **View Attendees**: See who else is going to each event

### Calendar View

- Click "Calendar View" to see events in a monthly calendar
- Navigate between months using the arrows
- Click on any event in the calendar to open the RSVP modal

### Adding Custom Events

1. Click the "+ Add Event" button
2. Fill in the event details (title, date, time, location, category)
3. Click "Add Event" to save
4. Your custom event will appear in the appropriate category

## Architecture

### Technology Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Authentication**: Firebase Authentication
- **Storage**: Browser localStorage for RSVP data
- **Styling**: Custom CSS with responsive design

### File Structure

```
.
├── index.html          # Main HTML file with event cards
├── script.js           # JavaScript logic and Firebase integration
├── styles.css          # All styling and responsive design
├── .gitignore          # Git ignore configuration
└── README.md           # This file
```

### Data Storage

- **User Authentication**: Managed by Firebase
- **RSVP Data**: Stored locally in browser localStorage
- **Custom Events**: Stored locally in browser localStorage

## Security

- Firebase Authentication handles all security for user sign-in
- No passwords are stored in the application
- User data is protected by Google's OAuth 2.0 authentication
- RSVP data is stored locally on each user's device

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome on Android)

## Contributing

This is a private project for a specific friend group. If you have suggestions or find bugs, please contact the repository owner.

## License

Private project - All rights reserved

## Support

For issues or questions, please contact the repository maintainer or create an issue on GitHub.

## Troubleshooting

### "Sign-in failed" error

1. Check that the Firebase project is properly configured
2. Verify Google sign-in is enabled in Firebase Console
3. Ensure your domain is added to authorized domains
4. Clear browser cache and cookies
5. Try signing in with a different browser

### Events not saving

- RSVP data is stored in browser localStorage
- Check that localStorage is enabled in your browser
- Clear browser cache if data seems corrupted

### Profile photo not displaying

- Some Google accounts may have restricted profile photo access
- A fallback avatar with your initial will be shown instead
