# My Events Planner - Travel & Social Plans Template

A modern, sophisticated web application for organizing travel and social plans throughout the year. This is a blank template that you can customize with your own events, members, and branding.

![My Events Planner](https://github.com/user-attachments/assets/ff26d9ee-fcbb-460a-bed8-b531d9818e75)

## ✨ Features

- **Modern UI Design**: Clean, sophisticated interface with a contemporary color scheme (Navy, Emerald, Warm Neutrals, Coral)
- **Dynamic Member Management**: Add and remove group members who can RSVP to events
- **Event Categories**: Organize events by type (Entertainment, Sports, Personal, Festivals, Travel, Wellness, Spiritual)
- **RSVP System**: Track who's going, maybe, or not attending each event
- **Calendar View**: Visualize all events in an interactive monthly calendar
- **Travel Planning**: Add hotel, flight, and transportation details for travel events
- **Notes & Details**: Add custom notes and links to events
- **Google Sign-In**: Secure authentication with Google accounts
- **Data Persistence**: All data stored locally in the browser
- **Export**: Export your events to Google Calendar
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A Firebase account (for authentication)
- A web server or hosting platform

### Setup Instructions

#### 1. Clone or Download This Repository

```bash
git clone https://github.com/krs1jack/2026-events-site.git
cd 2026-events-site
```

#### 2. Set Up Firebase Authentication

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use an existing one)
3. Enable **Google Authentication**:
   - Click "Authentication" in the left sidebar
   - Go to the "Sign-in method" tab
   - Enable "Google" as a sign-in provider
4. Get your Firebase configuration:
   - Click the gear icon ⚙️ next to "Project Overview"
   - Select "Project settings"
   - Scroll down to "Your apps" and click the web icon `</>`
   - Copy your Firebase configuration object

#### 3. Update Firebase Configuration

Open `script.js` and replace the placeholder Firebase config (lines 2-9) with your actual config:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

#### 4. Deploy Your Application

You can deploy this application using any static hosting service:

**Option A: GitHub Pages**
```bash
# Push to GitHub and enable GitHub Pages in repository settings
```

**Option B: Vercel**
```bash
npm install -g vercel
vercel
```

**Option C: Netlify**
```bash
# Drag and drop your folder to netlify.com
```

**Option D: Local Development**
```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx http-server -p 8080
```

Then open `http://localhost:8080` in your browser.

## 📖 User Guide

### First-Time Setup

1. **Sign In**: Click "Sign in with Google" to authenticate
2. **Add Members**: Click "Add/Remove Members" to add people to your group
3. **Add Your First Event**: Click the "+ Add Event" button to create an event

### Managing Members

- **Add Member**: In the participant modal, click "Add/Remove Members", enter a name, and click "Add Member"
- **Remove Member**: In the manage members modal, click "Remove" next to any member
- **Member Colors**: Each member is automatically assigned a unique color for easy identification

### Creating Events

1. Click the "+ Add Event" button
2. Fill in the event details:
   - **Title**: Name of the event
   - **Date**: Select a date (optional for flexible events)
   - **Time**: Event time
   - **Location**: Where the event takes place
   - **Category**: Choose from 7 categories
3. Click "Add Event"

### RSVP to Events

1. Click "RSVP" on any event card
2. Select attendance status for each member:
   - **Going**: Confirmed attendance
   - **Maybe**: Tentative
   - **Not This One**: Not attending
3. Add notes, travel details (hotel, flight, transportation)
4. Click "Save RSVP"

### Using the Calendar

- Click "Calendar View" to see all events in a monthly calendar
- Navigate between months using the arrow buttons
- Click any event in the calendar to open its RSVP details

### Exporting Events

- Click "Export to Google Calendar" to download an .ics file
- Import the file into Google Calendar to sync your events

## 🎨 Customization

### Changing Colors

Edit the CSS custom properties in `styles-modern.css` (lines 8-40):

```css
:root {
    --primary-navy: #0F172A;
    --emerald-primary: #059669;
    --coral-primary: #F97316;
    /* ... customize other colors ... */
}
```

### Changing Branding

Update the following files:

- **Title**: Edit `index.html` line 6 and lines throughout
- **Hero Text**: Edit `index.html` lines 46-48
- **Footer**: Edit `index.html` line 229

### Adding Categories

To add new event categories:

1. Add the category to the filter buttons in `index.html`
2. Add corresponding color variables in `styles-modern.css`
3. Update the `ensureCategorySection` function in `script.js`

## 🏗️ Project Structure

```
2026-events-site/
├── index.html              # Main HTML file
├── script.js               # JavaScript logic
├── styles-modern.css       # Modern CSS styles
├── README.md              # This file
└── .gitignore             # Git ignore rules
```

## 💾 Data Storage

All data is stored in the browser's localStorage:

- **Members**: `2026EventsMembers`
- **Events**: `2026CustomEvents`
- **RSVPs**: `2026EventsRSVP`
- **Notes**: `2026EventsNotes`
- **Travel Details**: `2026EventsTravel`

To export or backup your data, use browser developer tools to access localStorage.

## 🔒 Privacy & Security

- All event data is stored locally in your browser
- Google Sign-In is used only for authentication
- No data is sent to external servers (except Firebase for authentication)
- Each user's RSVP data is tied to their Google account

## 🐛 Troubleshooting

### Firebase Authentication Issues

**Problem**: "Sign in with Google" doesn't work

**Solutions**:
1. Verify your Firebase configuration is correct
2. Check that Google Sign-In is enabled in Firebase Console
3. Ensure your domain is authorized in Firebase settings
4. Check browser console for specific error messages

### Data Not Persisting

**Problem**: Events or members disappear after refresh

**Solutions**:
1. Check that localStorage is enabled in your browser
2. Ensure you're not in incognito/private browsing mode
3. Check browser console for localStorage errors
4. Try a different browser

### Events Not Showing

**Problem**: Added events don't appear

**Solutions**:
1. Check the category filter - ensure "All Events" is selected
2. Verify the event was saved (check browser console)
3. Refresh the page
4. Check localStorage in developer tools

## 🤝 Contributing

This is a template project meant to be customized. Feel free to:

- Fork the repository
- Add new features
- Improve the design
- Fix bugs
- Share your customizations

## 📄 License

This project is open source and available for anyone to use and customize.

## 🆘 Support

For questions or issues:

1. Check the troubleshooting section above
2. Review the browser console for error messages
3. Verify your Firebase configuration
4. Open an issue on GitHub

## 🎯 Roadmap

Potential future enhancements:

- [ ] Backend database integration
- [ ] Email notifications for events
- [ ] Recurring events support
- [ ] File attachments for events
- [ ] Group chat/comments per event
- [ ] Advanced filtering and search
- [ ] Multi-year support
- [ ] Custom themes
- [ ] Mobile app version

## 🙏 Acknowledgments

Built with:
- Firebase Authentication
- Vanilla JavaScript
- Modern CSS
- Google Fonts (Inter & Poppins)

---

**Made with ❤️ for organizing amazing experiences with the people you care about.**
