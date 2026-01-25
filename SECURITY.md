# Security Guidelines

## Firebase API Key Exposure

### Current Status
This application uses Firebase for authentication and data storage. The Firebase API key and configuration are visible in the client-side JavaScript code (`script.js`).

### Is This Safe?
**Yes, this is expected and safe** when proper security measures are in place. Here's why:

1. **Firebase API keys are not traditional secrets**: Unlike many API keys, Firebase API keys only identify your app to Google's servers. They do NOT grant access to data.

2. **Security comes from Firebase Security Rules**: Access to your Firebase data is controlled by Firebase Security Rules (for Firestore/Realtime Database) and Storage Rules, not by hiding the API key.

3. **Official Firebase documentation** explicitly states that these keys are meant to be included in client-side code.

### Required Security Measures

To ensure your Firebase application is secure, you **MUST** implement these measures:

#### 1. ✅ Strict Firebase Security Rules (CRITICAL)
- **Never use public read/write rules** in production (e.g., `allow read, write: if true`)
- Restrict data access to authenticated users only
- Implement proper authorization logic for different user roles

Example Firestore Rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read/write
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

#### 2. ✅ API Key Restrictions (HIGHLY RECOMMENDED)
Restrict your Firebase API key in Google Cloud Console:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Navigate to "APIs & Services" > "Credentials"
4. Click on your API key
5. Under "Application restrictions":
   - Select "HTTP referrers (web sites)"
   - Add your domains (e.g., `*.yourdomain.com/*`, `localhost/*` for development)
6. Under "API restrictions":
   - Select "Restrict key"
   - Only enable the Firebase APIs you're using

#### 3. ✅ Enable Firebase App Check (RECOMMENDED)
[Firebase App Check](https://firebase.google.com/docs/app-check) adds an additional layer of protection:
- Protects your Firebase resources from abuse
- Verifies requests are coming from your legitimate app
- Works with reCAPTCHA for web apps

#### 4. ✅ Monitor Usage
- Set up billing alerts in Google Cloud Console
- Monitor Firebase usage in the Firebase Console
- Set up alerts for unusual activity

#### 5. ✅ Authentication Best Practices
- This app uses Google Sign-In (OAuth)
- Never store passwords or sensitive user data in client-side code
- Use Firebase Authentication's built-in security features

### What NOT to Expose

While Firebase API keys are safe to expose, **NEVER** include these in your code:
- ❌ Private keys
- ❌ Service account credentials
- ❌ Database admin credentials
- ❌ OAuth client secrets
- ❌ Third-party API keys that grant billing access

### Admin Email Configuration

The app uses hardcoded admin emails in `script.js`:
```javascript
const adminEmails = [
    'krs1jack@gmail.com'
];
```

This is acceptable for a small private application, but for larger applications, consider:
- Moving admin configuration to Firebase Firestore
- Using Firebase Custom Claims for role-based access control
- Implementing a proper admin panel

### Incident Response

If you suspect your Firebase project has been compromised:
1. Immediately review your Firebase Security Rules
2. Check Firebase Console for unusual activity
3. Review authentication logs
4. If necessary, rotate your Firebase API key in the Firebase Console
5. Update API key restrictions

### Additional Resources

- [Firebase Security Checklist](https://firebase.google.com/support/guides/security-checklist)
- [Firebase Security Rules Documentation](https://firebase.google.com/docs/rules)
- [Is it safe to expose Firebase apiKey?](https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public)
- [Firebase App Check](https://firebase.google.com/docs/app-check)

### Current Security Assessment

**Status**: ✅ Safe (with caveats)

**What's Working**:
- Using Firebase Authentication (Google Sign-In)
- API key is properly used for client-side Firebase initialization
- Admin access control implemented in code

**Recommendations**:
1. **HIGH PRIORITY**: Verify Firebase Security Rules are properly configured (not public read/write)
2. **HIGH PRIORITY**: Add API key restrictions in Google Cloud Console
3. **MEDIUM PRIORITY**: Consider enabling Firebase App Check
4. **MEDIUM PRIORITY**: Set up billing alerts and monitoring
5. **LOW PRIORITY**: For production apps, move admin emails to Firebase configuration

**Next Steps**:
1. Log into [Firebase Console](https://console.firebase.google.com/)
2. Check your Security Rules for Firestore/Database
3. Ensure rules require authentication
4. Add API key restrictions via Google Cloud Console
5. Consider enabling App Check for additional security

---

*Last Updated: 2026-01-25*
