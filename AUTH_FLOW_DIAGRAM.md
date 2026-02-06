# Google Sign-In Authentication Flow

## Visual Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER VISITS WEBSITE                          │
└────────────────────────────┬────────────────────────────────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  Check Auth     │
                    │  State (Firebase)│
                    └────────┬────────┘
                             │
                ┌────────────┴────────────┐
                │                         │
            Not Signed In            Signed In
                │                         │
                ▼                         ▼
    ┌──────────────────────┐   ┌──────────────────────┐
    │  SHOW SIGN-IN SCREEN │   │   SHOW MAIN APP      │
    │                      │   │                      │
    │  • Beautiful UI      │   │  • User Bar (top)    │
    │  • Google Button     │   │  • Profile Photo     │
    │  • Gradient BG       │   │  • Event List        │
    └──────────┬───────────┘   │  • RSVP Features     │
               │               └──────────────────────┘
               ▼
    ┌──────────────────────┐
    │  USER CLICKS         │
    │  "Sign in with       │
    │   Google" Button     │
    └──────────┬───────────┘
               │
               ▼
    ┌──────────────────────┐
    │  signInWithGoogle()  │
    │  function called     │
    └──────────┬───────────┘
               │
               ▼
    ┌──────────────────────────────┐
    │  Firebase Auth               │
    │  signInWithPopup()           │
    │  • Opens Google OAuth popup  │
    │  • User selects account      │
    │  • Grants permissions        │
    └──────────┬───────────────────┘
               │
     ┌─────────┴─────────┐
     │                   │
  SUCCESS             ERROR
     │                   │
     ▼                   ▼
┌──────────────┐   ┌──────────────┐
│ Auth Success │   │ Show Error   │
│              │   │ Toast        │
└─────┬────────┘   └──────────────┘
      │
      ▼
┌────────────────────────────────┐
│  onAuthStateChanged()          │
│  Listener Triggered            │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│  handleUserSignedIn(user)      │
│                                │
│  1. Get display name           │
│  2. Store user info            │
│     • localStorage             │
│     • currentUser variable     │
│  3. Hide sign-in screen        │
│  4. Show user bar              │
│  5. Load profile photo         │
│  6. Update stats               │
│  7. Render calendar            │
│  8. Show welcome toast         │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│       MAIN APP READY           │
│                                │
│  User can now:                 │
│  • Browse events               │
│  • RSVP to events              │
│  • Add custom events           │
│  • View attendees              │
│  • Export to calendar          │
│  • Sign out                    │
└────────────────────────────────┘
```

## Sign-Out Flow

```
┌────────────────────────────────┐
│  USER CLICKS "Sign Out"        │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│  signOutUser() function called │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│  Firebase auth.signOut()       │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│  onAuthStateChanged()          │
│  Listener Triggered            │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│  handleUserSignedOut()         │
│                                │
│  1. Clear currentUser          │
│  2. Remove from localStorage   │
│  3. Show sign-in screen        │
│  4. Hide user bar              │
│  5. Show success toast         │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│  BACK TO SIGN-IN SCREEN        │
└────────────────────────────────┘
```

## Data Flow

### User Information Storage

```
Google Account
     │
     ├─── Display Name ──────────┐
     ├─── Email Address ─────────┼──► Firebase Auth Object
     ├─── Profile Photo URL ─────┤
     └─── User UID ──────────────┘
              │
              ▼
     ┌────────────────────┐
     │   localStorage     │
     ├────────────────────┤
     │ 2026EventsUser     │  → Display name (first name)
     │ 2026EventsUserEmail│  → Email address
     │ 2026EventsUserUID  │  → Firebase UID
     └────────────────────┘
              │
              ▼
     ┌────────────────────┐
     │   currentUser      │  → JavaScript variable
     │   (in memory)      │     Used throughout app
     └────────────────────┘
```

### RSVP Data Storage

```
User signs in
     │
     ▼
User RSVPs to event
     │
     ▼
┌────────────────────────────────┐
│   localStorage                 │
│   "2026EventsRSVP"            │
├────────────────────────────────┤
│   {                            │
│     "event-id": {              │
│       "Sam": "going",          │
│       "Kim": "maybe",          │
│       "Dee": "not-going"       │
│     }                          │
│   }                            │
└────────────────────────────────┘
     │
     ▼
Persists across sessions
     │
     ▼
Available when user returns
```

## Security Flow

```
┌────────────────────────────────┐
│  Client (Browser)              │
├────────────────────────────────┤
│  • Firebase Config (public)    │
│  • Authentication request      │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│  Firebase Authentication       │
│  (Google Cloud)                │
├────────────────────────────────┤
│  • Validates domain            │
│  • Checks authorized list      │
│  • Enforces OAuth rules        │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│  Google OAuth                  │
├────────────────────────────────┤
│  • User authenticates          │
│  • Grants permissions          │
│  • Returns ID token            │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│  Firebase Auth Token           │
├────────────────────────────────┤
│  • Signed by Firebase          │
│  • Contains user info          │
│  • Expires after time          │
│  • Auto-refreshed              │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│  Client receives token         │
│  • Stored by Firebase SDK      │
│  • Used for auth state         │
│  • Protected by Firebase       │
└────────────────────────────────┘
```

## Component Interaction

```
┌─────────────────────────────────────────────────────────────┐
│                         index.html                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────┐         ┌──────────────────┐    │
│  │  Sign-In Screen      │         │   User Bar       │    │
│  │  • Google Button ─────────┐    │   • Photo        │    │
│  │  • Gradient BG       │    │    │   • Name         │    │
│  └──────────────────────┘    │    │   • Sign Out Btn │    │
│                              │    └──────────────────┘    │
│  ┌──────────────────────┐    │                            │
│  │  Main Content        │    │                            │
│  │  • Event Cards       │    │                            │
│  │  • RSVP Buttons      │    │                            │
│  │  • Calendar View     │    │                            │
│  └──────────────────────┘    │                            │
│                              │                            │
└──────────────────────────────┼────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                          script.js                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────┐    ┌─────────────────────┐       │
│  │  Firebase Setup     │    │  Auth Functions     │       │
│  │  • initializeApp()  │    │  • signInWithGoogle │       │
│  │  • GoogleProvider   │    │  • signOutUser      │       │
│  └─────────────────────┘    │  • onAuthStateChanged│      │
│                             └─────────────────────┘       │
│  ┌─────────────────────┐    ┌─────────────────────┐       │
│  │  State Management   │    │  UI Updates         │       │
│  │  • currentUser      │    │  • Show/hide screens│       │
│  │  • rsvpData         │    │  • Update stats     │       │
│  │  • eventsData       │    │  • Toast messages   │       │
│  └─────────────────────┘    └─────────────────────┘       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                      Firebase (Cloud)                        │
├─────────────────────────────────────────────────────────────┤
│  • Authentication Service                                   │
│  • User Management                                          │
│  • Session Tokens                                           │
│  • Security Rules                                           │
└─────────────────────────────────────────────────────────────┘
```

## State Machine

```
┌─────────────────┐
│  INITIAL STATE  │
│  (Loading)      │
└────────┬────────┘
         │
         ▼
    Check Auth
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌───────┐  ┌──────────┐
│SIGNED │  │NOT SIGNED│
│  OUT  │  │    IN    │
└───┬───┘  └────┬─────┘
    │           │
    │  Sign In  │
    │◄──────────┤
    │           │
    │  Sign Out │
    ├──────────►│
    │           │
    └───────────┘
```

## Error Handling

```
Error Occurs
     │
     ├─── Popup Blocked ──────► Show error toast
     │                          Suggest allowing popups
     │
     ├─── Network Error ────────► Show error toast
     │                           "Check connection"
     │
     ├─── Invalid Domain ───────► Show error toast
     │                           "Unauthorized domain"
     │
     ├─── User Cancelled ───────► Do nothing
     │                           Return to sign-in screen
     │
     └─── Unknown Error ────────► Show error toast
                                 Log to console
```
