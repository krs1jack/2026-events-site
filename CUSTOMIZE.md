# Quick Customization Guide

This guide helps you personalize your Events Planner to match your group's style and needs.

## 🎨 Changing Colors

### Main Color Scheme

Edit `styles-modern.css` (lines 8-24) to change the primary colors:

```css
:root {
    /* Change these to your preferred colors */
    --primary-navy: #0F172A;      /* Main dark color */
    --emerald-primary: #059669;    /* Primary accent */
    --coral-primary: #F97316;      /* Secondary accent */
}
```

### Color Palette Examples

**Ocean Blue Theme:**
```css
--primary-navy: #0C4A6E;          /* Deep ocean blue */
--emerald-primary: #0891B2;       /* Cyan */
--coral-primary: #F59E0B;         /* Amber */
```

**Sunset Theme:**
```css
--primary-navy: #7C2D12;          /* Deep orange */
--emerald-primary: #DC2626;       /* Red */
--coral-primary: #FB923C;         /* Light orange */
```

**Forest Theme:**
```css
--primary-navy: #14532D;          /* Deep green */
--emerald-primary: #16A34A;       /* Green */
--coral-primary: #84CC16;         /* Lime */
```

**Midnight Theme:**
```css
--primary-navy: #1E1B4B;          /* Deep indigo */
--emerald-primary: #8B5CF6;       /* Purple */
--coral-primary: #EC4899;         /* Pink */
```

### Category Colors

Change event category colors (lines 26-40):

```css
--music-color: #8B5CF6;           /* Purple for entertainment */
--sports-color: #3B82F6;          /* Blue for sports */
--family-color: #EC4899;          /* Pink for personal */
--festivals-color: #F59E0B;       /* Amber for festivals */
--travel-color: #14B8A6;          /* Teal for travel */
--wellness-color: #06B6D4;        /* Cyan for wellness */
--church-color: #A855F7;          /* Purple for spiritual */
```

## 📝 Changing Text & Branding

### Site Title

**In `index.html` (line 6):**
```html
<title>Your Group Name - Event Planner</title>
```

### Hero Section

**In `index.html` (lines 46-48):**
```html
<h1>Your Group Name</h1>
<p class="tagline">Your Custom Tagline Here</p>
```

**Examples:**
- "The Adventure Squad - Making Memories Together"
- "Family Events 2026 - Never Miss a Moment"
- "Travel Buddies - Exploring the World Together"

### Sign-In Screen

**In `index.html` (lines 17-19):**
```html
<h1>Your Group Name</h1>
<p>Sign in with your Google account to join the fun</p>
```

### Footer

**In `index.html` (line 229):**
```html
<p>Your Group Name - Your Custom Footer Text</p>
```

## 🏷️ Renaming Categories

### Update Filter Buttons

**In `index.html` (lines 64-71):**
```html
<button class="filter-btn" data-category="music">Music</button>
<button class="filter-btn" data-category="sports">Sports</button>
<!-- Change the text, keep the data-category value -->
```

### Update Category Titles in JavaScript

**In `script.js`, find `ensureCategorySection` function and update:**
```javascript
const categoryNames = {
    'music': 'Your Music Label',
    'sports': 'Your Sports Label',
    'family': 'Your Family Label',
    // ... etc
};
```

## 🖼️ Adding Your Logo

### Option 1: Replace Hero Title with Image

**In `index.html` (line 46), replace:**
```html
<h1>My Events Planner</h1>
```

**With:**
```html
<img src="your-logo.png" alt="Your Group Name" style="max-width: 400px; height: auto;">
```

### Option 2: Add Logo Next to Title

```html
<div style="display: flex; align-items: center; gap: 16px; justify-content: center;">
    <img src="your-logo.png" alt="Logo" style="height: 60px;">
    <h1>My Events Planner</h1>
</div>
```

## 📅 Changing the Year

Currently set for 2026. To change to a different year:

### 1. Update `script.js`

**Line 46:**
```javascript
let currentMonth = new Date(2027, 0); // Change 2026 to 2027
```

**Function `getSundaysIn2026` (line 245):**
```javascript
// Rename function to getSundaysIn2027
function getSundaysIn2027() {
    const sundays = [];
    const date = new Date(2027, 0, 1); // Change year
    
    // ... rest stays the same
    
    while (date.getFullYear() === 2027) { // Change comparison
```

### 2. Update Date Input Min/Max

**In `index.html` (line 151):**
```html
<input type="date" id="newEventDate" min="2027-01-01" max="2027-12-31">
```

## 🎭 Adding Custom Event Types

### Step 1: Add Category Variable in CSS

**In `styles-modern.css` (around line 32):**
```css
--custom-color: #Your-Color;
--custom-light: #Your-Light-Color;
```

### Step 2: Add Filter Button

**In `index.html`, navigation section:**
```html
<button class="filter-btn" data-category="custom">Your Category</button>
```

### Step 3: Add Category Styles

**In `styles-modern.css`, add:**
```css
.filter-btn[data-category="custom"].active {
    background: var(--custom-color);
    border-color: var(--custom-color);
}

.category-title.custom {
    background: var(--custom-light);
    color: var(--custom-color);
    border-color: var(--custom-color);
}

.event-card.custom::before {
    background: var(--custom-color);
}
```

### Step 4: Add to Category Names

**In `script.js`, `ensureCategorySection` function:**
```javascript
const categoryNames = {
    'music': 'Entertainment',
    // ... existing categories
    'custom': 'Your Category Name'
};
```

## 🌐 Changing Language

To translate the interface:

### Update HTML Text

Search and replace in `index.html`:
- "Sign in" → Your translation
- "RSVP" → Your translation
- "Add Event" → Your translation
- etc.

### Update JavaScript Messages

Search in `script.js` for:
- `showToast` calls
- Button labels
- Modal titles

### Date/Month Names

**In `script.js`, update month arrays:**
```javascript
const monthNames = ['Jan', 'Feb', 'Mar', ...]; // Update to your language
const months = ['JAN', 'FEB', 'MAR', ...]; // Update to your language
```

## 🔤 Changing Fonts

### Use Different Google Fonts

**In `index.html` (line 8):**
```html
<link href="https://fonts.googleapis.com/css2?family=Your-Font:wght@400;600;700&display=swap" rel="stylesheet">
```

**In `styles-modern.css` (line 58):**
```css
body {
    font-family: 'Your-Font', sans-serif;
}
```

### Font Pairing Suggestions

**Modern & Professional:**
- `font-family: 'Montserrat', 'Open Sans', sans-serif;`

**Elegant & Sophisticated:**
- `font-family: 'Playfair Display', 'Lato', sans-serif;`

**Clean & Minimal:**
- `font-family: 'Roboto', 'Helvetica Neue', sans-serif;`

**Fun & Friendly:**
- `font-family: 'Quicksand', 'Nunito', sans-serif;`

## 🎨 Advanced Styling

### Add Patterns/Textures

**Add to hero background:**
```css
.hero {
    background: linear-gradient(135deg, var(--primary-navy) 0%, var(--secondary-navy) 100%),
                url('your-pattern.png');
    background-blend-mode: overlay;
}
```

### Rounded Corners

**Adjust border radius variables in CSS:**
```css
:root {
    --radius-sm: 8px;   /* Increase for more roundness */
    --radius: 12px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --radius-xl: 32px;
}
```

### Animation Speed

**Change transition duration:**
```css
/* Search for 'transition:' in CSS and adjust */
transition: all 0.3s ease; /* Change 0.3s to your preference */
```

## 💡 Quick Tips

1. **Test Changes**: Always test in multiple browsers
2. **Mobile First**: Check responsive design on phone/tablet
3. **Backup**: Keep a copy of original files before major changes
4. **Git Commits**: Commit after each successful change
5. **Color Contrast**: Ensure text is readable on all backgrounds
6. **Consistency**: Use the same colors/fonts throughout

## 🛠️ Tools for Customization

- **Color Picker**: [Coolors.co](https://coolors.co/)
- **Gradient Generator**: [CSSGradient.io](https://cssgradient.io/)
- **Font Pairing**: [FontPair.co](https://fontpair.co/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Patterns**: [Hero Patterns](https://heropatterns.com/)

---

**Have fun customizing! Make it yours! 🎨**
