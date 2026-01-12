# Firebase Setup Guide

This guide will walk you through setting up Firebase Authentication for your Events Planner application.

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or select an existing project
3. Enter a project name (e.g., "My Events Planner")
4. (Optional) Enable Google Analytics
5. Click **"Create project"**

## Step 2: Enable Google Authentication

1. In your Firebase project, click **"Authentication"** in the left sidebar
2. Click **"Get started"** if this is your first time
3. Go to the **"Sign-in method"** tab
4. Find **"Google"** in the list of providers
5. Click on **"Google"** to open the configuration
6. Toggle the **"Enable"** switch to ON
7. Enter a support email address (your email)
8. Click **"Save"**

## Step 3: Register Your Web App

1. In the Firebase Console, click the **gear icon ⚙️** next to "Project Overview"
2. Select **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **web icon** (`</>`) to add a web app
5. Enter an app nickname (e.g., "Events Planner Web")
6. (Optional) Check "Also set up Firebase Hosting" if you want to use Firebase Hosting
7. Click **"Register app"**

## Step 4: Copy Your Firebase Configuration

After registering your app, you'll see a configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyABC123...",
  authDomain: "my-project.firebaseapp.com",
  projectId: "my-project-12345",
  storageBucket: "my-project-12345.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123..."
};
```

**Important**: Copy this entire object. You'll need it in the next step.

## Step 5: Update Your Code

1. Open `script.js` in your code editor
2. Find the Firebase configuration section at the top of the file (lines 2-9):

```javascript
// === Firebase Configuration ===
// IMPORTANT: Replace this with your own Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

3. Replace the placeholder values with your actual Firebase configuration:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyABC123...",  // Your actual API key
    authDomain: "my-project.firebaseapp.com",  // Your actual domain
    projectId: "my-project-12345",  // Your actual project ID
    storageBucket: "my-project-12345.appspot.com",  // Your actual storage bucket
    messagingSenderId: "123456789",  // Your actual sender ID
    appId: "1:123456789:web:abc123..."  // Your actual app ID
};
```

4. Save the file

## Step 6: Configure Authorized Domains

To allow authentication from your domain:

1. In Firebase Console, go to **Authentication** > **Settings** tab
2. Scroll down to **"Authorized domains"**
3. By default, `localhost` and your Firebase hosting domain are authorized
4. If you're hosting on a custom domain, click **"Add domain"** and enter your domain
5. Common domains to add:
   - `localhost` (already added)
   - `yourdomain.com`
   - `www.yourdomain.com`
   - Your Netlify/Vercel preview URL

## Step 7: Test Authentication

1. Deploy or run your application locally
2. Open the app in your browser
3. Click **"Sign in with Google"**
4. You should see the Google sign-in popup
5. Select your Google account
6. You should be signed in successfully!

## Troubleshooting

### Error: "This app domain is not authorized"

**Solution**: Add your domain to the authorized domains list in Firebase Console:
- Go to Authentication > Settings > Authorized domains
- Click "Add domain" and enter your domain

### Error: "API key not valid"

**Solution**: Double-check that you copied the entire Firebase config correctly. Make sure:
- No extra spaces or characters
- All values are within quotes
- The configuration is saved in `script.js`

### Error: "Firebase not defined"

**Solution**: Make sure the Firebase SDK is loading correctly. Check that:
- The Firebase CDN links are in your `index.html` (lines 10-11)
- Your internet connection is working
- You're not blocking the Firebase CDN in your browser/firewall

### Sign-in popup is blocked

**Solution**: 
- Allow popups for your domain in your browser settings
- Try disabling popup blockers
- Check browser console for specific errors

### Authentication works locally but not in production

**Solution**:
- Add your production domain to Firebase authorized domains
- Ensure your Firebase config is correct in the deployed version
- Check that HTTPS is enabled (required for production)

## Security Best Practices

### 1. Protect Your API Key

While your Firebase API key is safe to expose in client-side code (it's designed for this), you should still:

- Set up Firebase Security Rules
- Limit your API key to specific domains in Firebase Console
- Never commit sensitive Firebase Admin SDK keys to version control

### 2. Set Up Security Rules

In Firebase Console:

1. Go to **Authentication** > **Settings**
2. Set up user limits if needed
3. Configure email enumeration protection

### 3. Configure OAuth Settings

1. In Firebase Console, go to **Authentication** > **Settings** > **OAuth settings**
2. Configure:
   - **OAuth redirect domains**: Add your domains
   - **OAuth consent screen**: Customize with your branding

## Advanced Configuration

### Using Environment Variables

For better security and flexibility, consider using environment variables:

1. Create a `.env` file (don't commit this to git):
```
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=your-auth-domain
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-storage-bucket
FIREBASE_MESSAGING_SENDER_ID=your-sender-id
FIREBASE_APP_ID=your-app-id
```

2. Add `.env` to your `.gitignore`

3. Use a bundler like Webpack or Vite to inject these at build time

### Multiple Environments

For development, staging, and production:

1. Create separate Firebase projects for each environment
2. Use different config files or environment variables
3. Deploy each environment from separate branches

## Additional Resources

- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Firebase Web Setup Guide](https://firebase.google.com/docs/web/setup)
- [Google Sign-In for Web](https://developers.google.com/identity/sign-in/web/sign-in)
- [Firebase Console](https://console.firebase.google.com/)

## Next Steps

After setting up Firebase:

1. ✅ Test the sign-in functionality
2. ✅ Add members to your group
3. ✅ Create your first event
4. ✅ Customize the design and branding
5. ✅ Deploy to production

---

**Need help?** Check the main README.md or open an issue on GitHub.
