# 2026 Culture, Travel & Fun - Event Sign-Up

A web application for managing and signing up for family events in 2026. Features Google authentication, event management, and travel planning.

## Features

- 🔐 Google Sign-In authentication via Firebase
- 📅 Event calendar with birthdays, holidays, and custom events
- ✈️ Travel planning with flight and hotel information
- 👥 Member-based RSVP system
- 🖨️ Print calendar functionality
- 🔗 Share calendar links
- 👨‍💼 Admin controls for event management

## Security

This application uses Firebase for authentication and is designed to be secure. The Firebase API key visible in the code is **intentionally public** and safe when proper Firebase Security Rules are configured.

**📖 Please read [SECURITY.md](SECURITY.md) for complete security information and best practices.**

### Quick Security Checklist

Before deploying to production:
- [ ] Verify Firebase Security Rules are configured (not public read/write)
- [ ] Add API key restrictions in Google Cloud Console
- [ ] Enable Firebase App Check (recommended)
- [ ] Set up billing alerts and monitoring

## Setup

### Prerequisites

- A Firebase project with Authentication enabled
- Google Sign-In provider configured in Firebase

### Configuration

1. Clone this repository
2. Update the Firebase configuration in `script.js` with your project details:
   ```javascript
   const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-project.firebaseapp.com",
       projectId: "your-project-id",
       storageBucket: "your-project.firebasestorage.app",
       messagingSenderId: "your-sender-id",
       appId: "your-app-id"
   };
   ```
3. Update admin emails in `script.js` if needed:
   ```javascript
   const adminEmails = [
       'your-admin-email@gmail.com'
   ];
   ```

### Local Development

Simply open `index.html` in a web browser. For best results, use a local web server:

```bash
# Python 3
python -m http.server 8000

# Node.js (using npx)
npx http-server

# PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## Usage

1. **Sign In**: Click "Sign in with Google" to authenticate
2. **View Events**: Browse the calendar of events, birthdays, and holidays
3. **RSVP**: Select your name and RSVP to events you plan to attend
4. **Add Travel Details**: For events you're attending, add flight and hotel information
5. **Print/Share**: Use the print or share buttons to save or share your calendar

### Admin Features

Admin users (configured in `adminEmails`) can:
- Delete events using the delete button on event cards
- Manage event listings

## Project Structure

```
├── index.html          # Main HTML file
├── script.js           # JavaScript application logic and Firebase config
├── styles.css          # CSS styles
├── SECURITY.md         # Security documentation and best practices
├── .env.example        # Example environment configuration
└── README.md           # This file
```

## Technologies Used

- **Firebase Authentication**: For Google Sign-In
- **Firebase SDK**: v10.7.1
- **Vanilla JavaScript**: No frameworks required
- **CSS3**: Modern styling with gradients and animations
- **Google Fonts**: Poppins font family

## Events Included

- **Birthdays**: Family member birthdays
- **Holidays**: New Year's Day, MLK Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, Christmas
- **Church Events**: Easter and other church gatherings
- **Travel**: Cruise, Jamaica trip, Galveston beach trip
- **Sports**: NBA All-Star Game
- **Special Events**: Mother's Day, Father's Day

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

Requires JavaScript enabled and modern browser features.

## Contributing

This is a private family application. If you have suggestions or find issues, please contact the repository owner.

## Security Issues

If you discover a security vulnerability, please review [SECURITY.md](SECURITY.md) first to understand expected behavior. For genuine security concerns, please contact the repository owner directly.

## License

Private family project - not licensed for public use.

## Support

For questions or issues, contact the repository owner.

---

Made with ❤️ for family and friends
