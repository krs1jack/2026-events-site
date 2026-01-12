# Firebase Authentication Setup Guide

This guide will help you configure Firebase Authentication to enable Google sign-in for the 2026 Events Site.

## Prerequisites

- Access to the Firebase Console
- Admin/Owner permissions for the Firebase project `eventssite-104e7`

## Step-by-Step Configuration

### 1. Access Firebase Console

1. Navigate to [Firebase Console](https://console.firebase.google.com/)
2. Sign in with your Google account
3. Select the project **eventssite-104e7**

### 2. Enable Google Authentication

1. In the left sidebar, click **Authentication**
2. Click the **Sign-in method** tab
3. Find **Google** in the list of providers
4. Click on **Google** to configure it
5. Toggle the **Enable** switch to ON
6. Configure the following:
   - **Project support email**: Select your email address from the dropdown
   - **Project public-facing name**: "2026 Culture, Travel & Fun" (should be pre-filled)
7. Click **Save**

### 3. Configure Authorized Domains

Firebase requires you to authorize domains that can use authentication:

1. Still in **Authentication** > **Sign-in method**
2. Scroll down to **Authorized domains** section
3. You should see `localhost` already listed (for local development)
4. Click **Add domain** to add your production domain(s):
   - If using Vercel: `your-project-name.vercel.app`
   - If using custom domain: `yourdomain.com`
5. Click **Add** for each domain

### 4. Verify Configuration

After completing the setup, verify everything is configured correctly:

#### Check Authentication Provider
- [ ] Google provider is **Enabled**
- [ ] Support email is set
- [ ] No error messages appear

#### Check Authorized Domains
- [ ] `localhost` is listed (for development)
- [ ] Your production domain is listed
- [ ] No typos in domain names

### 5. Test the Authentication

#### Local Testing
1. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```
2. Navigate to `http://localhost:8000`
3. Click "Sign in with Google"
4. Complete the OAuth flow
5. Verify you're signed in (user bar appears at top)

#### Production Testing
1. Deploy your site to your hosting platform
2. Navigate to your production URL
3. Click "Sign in with Google"
4. Complete the OAuth flow
5. Verify you're signed in

## Common Issues and Solutions

### Issue: "Unauthorized domain" error

**Problem**: The domain you're accessing the site from isn't authorized in Firebase.

**Solution**:
1. Go to Firebase Console > Authentication > Sign-in method > Authorized domains
2. Add your domain to the list
3. Wait a few minutes for changes to propagate
4. Try again

### Issue: "Configuration error" on sign-in

**Problem**: Firebase configuration in the code might be incorrect.

**Solution**:
1. Verify the `firebaseConfig` object in `script.js` matches your Firebase project settings
2. Get correct values from: Firebase Console > Project Settings > General > Your apps > Web app
3. Ensure all fields are correct:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`

### Issue: Sign-in popup is blocked

**Problem**: Browser is blocking the popup window.

**Solution**:
1. Allow popups for your domain in browser settings
2. Or use `signInWithRedirect()` instead of `signInWithPopup()` (requires code change)

### Issue: Users can't stay signed in

**Problem**: Session persistence might be disabled.

**Solution**:
Firebase Auth handles persistence automatically. Check:
1. Browser cookies are enabled
2. Browser isn't in incognito/private mode
3. localStorage is enabled in browser

## Security Best Practices

### API Key Protection

The Firebase API key in `script.js` is **safe to expose** in client-side code:
- It's not a secret key
- It only identifies your Firebase project
- Security is enforced by Firebase Security Rules and Authentication
- Authorized domains restrict where authentication can occur

### Security Rules

If you're using Firestore or Realtime Database in the future:
1. Implement proper security rules
2. Validate authentication tokens on the server
3. Never trust client-side validation alone

### Monitoring

Enable Firebase monitoring:
1. Go to Firebase Console > Authentication > Users
2. Monitor authentication activity
3. Review sign-in attempts
4. Watch for unusual patterns

## Additional Configuration (Optional)

### Email Link Sign-In

If you want to add email/password sign-in later:
1. Enable **Email/Password** in Sign-in methods
2. Update frontend code to handle email/password flows
3. Add UI for email/password sign-in

### Additional OAuth Providers

You can add more OAuth providers:
- Facebook
- Twitter
- GitHub
- Microsoft
- Apple

Each requires:
1. Setting up OAuth app with the provider
2. Enabling in Firebase Console
3. Adding button in the UI
4. Handling the auth flow in code

## Firebase Authentication Documentation

For more detailed information, refer to:
- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [Google Sign-In Guide](https://firebase.google.com/docs/auth/web/google-signin)
- [Manage Users](https://firebase.google.com/docs/auth/web/manage-users)

## Support

If you encounter issues:
1. Check Firebase Console for error messages
2. Review browser console for JavaScript errors
3. Verify all configuration steps above
4. Check Firebase Status: [https://status.firebase.google.com/](https://status.firebase.google.com/)

## Project Information

- **Firebase Project ID**: eventssite-104e7
- **Auth Domain**: eventssite-104e7.firebaseapp.com
- **Current Implementation**: Google OAuth 2.0 with popup flow
- **Session Persistence**: LOCAL (persists until manually signed out)
