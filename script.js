// === Firebase Configuration ===
const firebaseConfig = {
    apiKey: "AIzaSyD2RaLiJx2S9VcVrU2FfK4u6dOqlfRctpo",
    authDomain: "eventssite-104e7.firebaseapp.com",
    projectId: "eventssite-104e7",
    storageBucket: "eventssite-104e7.firebasestorage.app",
    messagingSenderId: "186084239560",
    appId: "1:186084239560:web:0fd31542bc5e517e361dfd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// === Church Locations ===
const churchLocations = {
    'jenns-church': {
        name: "Jenn's Church",
        location: 'Winston-Salem, NC',
        host: 'Jenn'
    },
    'first-calvary': {
        name: "First Calvary Baptist Church",
        location: 'Durham, NC',
        host: 'Kim'
    },
    'dees-church': {
        name: "Dee's Church",
        location: 'Charlotte, NC',
        host: 'Dee'
    }
};

// === Travel Details Storage ===
let travelData = {};

// === Event Data Store ===
let eventsData = {
    // === BIRTHDAYS ===
    'bday-jenn': {
        title: "Jenn's Birthday",
        date: '2026-09-03',
        time: 'All Day',
        location: 'Celebrate!',
        category: 'family',
        isBirthday: true
    },
    'bday-kim': {
        title: "Kim's Birthday",
        date: '2026-05-26',
        time: 'All Day',
        location: 'Celebrate!',
        category: 'family',
        isBirthday: true
    },
    'bday-dee': {
        title: "Dee's Birthday",
        date: '2026-12-13',
        time: 'All Day',
        location: 'Celebrate!',
        category: 'family',
        isBirthday: true
    },
    'bday-sam': {
        title: "Sam's Birthday",
        date: '2026-11-03',
        time: 'All Day',
        location: 'Celebrate!',
        category: 'family',
        isBirthday: true
    },
    'bday-arline': {
        title: "Arline's Birthday",
        date: '2026-04-09',
        time: 'All Day',
        location: 'Celebrate!',
        category: 'family',
        isBirthday: true
    },
    'bday-dana': {
        title: "Dana's Birthday",
        date: '2026-04-09',
        time: 'All Day',
        location: 'Celebrate!',
        category: 'family',
        isBirthday: true
    },
    // === CONCERTS & MUSIC ===
    'new-edition': {
        title: 'New Edition – The New Edition Way Tour',
        date: '2026-02-27',
        time: '8:00 PM - 9:00 PM',
        location: 'Spectrum Center, Charlotte',
        category: 'music',
        link: 'https://www.ticketmaster.com/new-edition-tickets/artist/735647'
    },
    'bruno-mars': {
        title: 'Bruno Mars – Romantic Tour',
        date: '2026-04-29',
        time: '7:00 PM',
        location: 'Charlotte, NC',
        category: 'music',
        link: 'https://www.ticketmaster.com/bruno-mars-tickets/artist/1094215'
    },
    'rb-lovers': {
        title: 'R&B Lovers Tour',
        date: '2026-03-20',
        time: '8:00 PM',
        location: 'Bojangles Coliseum, Charlotte',
        category: 'music',
        link: 'https://www.ticketmaster.com/'
    },
    // === SPORTS ===
    'duke-unc': {
        title: 'Duke vs UNC Basketball',
        date: '2026-02-07',
        time: '6:30 PM',
        location: 'Chapel Hill, NC',
        category: 'sports',
        link: 'https://goheels.com/sports/mbball'
    },
    'duke-unc-mar': {
        title: 'Duke vs UNC Basketball - Watch Party',
        date: '2026-03-07',
        time: '6:30 PM',
        location: "Kim's House (Game at Duke)",
        category: 'sports',
        link: 'https://goduke.com/sports/mbball'
    },
    'ciaa': {
        title: 'CIAA Tournament',
        date: '2026-02-24',
        endDate: '2026-02-28',
        time: 'Multiple Days',
        location: 'Charlotte, NC',
        category: 'sports',
        link: 'https://theciaa.com/sports/2024/6/11/tournament-central'
    },
    'ghoe': {
        title: 'GHOE Homecoming Game vs Elon',
        date: '2026-10-31',
        time: 'TBD',
        location: 'Greensboro, NC',
        category: 'sports',
        link: 'https://www.ncat.edu/alumni/ghoe/index.php'
    },
    // === FAMILY ===
    'fiu-grad': {
        title: 'FIU Spring Graduation',
        date: '2026-04-26',
        endDate: '2026-04-30',
        time: 'TBD',
        location: 'Miami, FL',
        category: 'family',
        link: 'https://www.fiu.edu/graduation/'
    },
    'devin-grad': {
        title: 'Devin Graduation',
        date: '2026-06-13',
        time: 'TBD',
        location: 'Duke University, Durham, NC',
        category: 'family',
        link: 'https://commencement.duke.edu/'
    },
    // === TRACK & FIELD ===
    'liberty-track-jan': {
        title: 'Liberty University Track Meet',
        date: '2026-01-30',
        endDate: '2026-01-31',
        time: 'Fri-Sat',
        location: 'Liberty Indoor Track Complex, Lynchburg, VA',
        category: 'sports',
        link: 'https://ncataggies.com/sports/track-and-field'
    },
    'highpoint-track-mar': {
        title: 'High Point University Track Meet',
        date: '2026-03-20',
        endDate: '2026-03-21',
        time: 'Fri-Sat',
        location: 'Vert Stadium, High Point, NC',
        category: 'sports',
        link: 'https://ncataggies.com/sports/track-and-field'
    },
    'ncat-track-apr': {
        title: 'NC A&T Track Meet',
        date: '2026-04-17',
        endDate: '2026-04-18',
        time: 'Fri-Sat',
        location: 'Marcus T. Johnson Track, Greensboro, NC',
        category: 'sports',
        link: 'https://ncataggies.com/sports/track-and-field'
    },
    'ncat-track-may': {
        title: 'NC A&T Track Meet',
        date: '2026-05-01',
        endDate: '2026-05-02',
        time: 'Fri-Sat',
        location: 'Marcus T. Johnson Track, Greensboro, NC',
        category: 'sports',
        link: 'https://ncataggies.com/sports/track-and-field'
    },
    'caa-track-championship': {
        title: 'CAA Track Championship',
        date: '2026-05-15',
        endDate: '2026-05-16',
        time: 'Fri-Sat',
        location: 'Elon, NC',
        category: 'sports',
        link: 'https://ncataggies.com/sports/track-and-field'
    },
    'jcsu-track-apr': {
        title: 'Johnson C. Smith University Track Meet',
        date: '2026-04-03',
        time: 'Friday',
        location: 'Irwin Belk Complex, Charlotte, NC',
        category: 'sports',
        link: 'https://goldenbullsports.com/sports/mens-track-and-field/schedule',
        note: "Malichi's Track Meet"
    },
    // === FESTIVALS & CULTURE ===
    'dirty-south': {
        title: 'Dirty South Rodeo Festival',
        date: '2026-07-25',
        time: '3:00 PM - 8:00 PM',
        location: 'Raleigh/Durham, NC',
        category: 'festivals',
        link: 'https://posh.vip/e/dirty-south-rodeo-festival-raleighdurham-nc'
    },
    'adult-recess': {
        title: '4th Annual Adult Recess Festival',
        date: '2026-04-25',
        time: '1:00 PM',
        location: 'Buffaloe Road Athletic Park, Raleigh',
        category: 'festivals',
        link: 'https://www.eventbrite.com/o/lets-get-social-raleigh-51158297753'
    },
    'tampa-heritage': {
        title: 'Tampa Black Heritage Festival',
        date: '2026-04-25',
        endDate: '2026-04-26',
        time: 'TBD',
        location: 'Tampa, FL',
        category: 'festivals',
        link: 'https://tampablackheritagefest.org/'
    },
    'bimbe': {
        title: 'Bimbé Cultural Arts Festival',
        date: '2026-05-16',
        time: 'All Day',
        location: 'Durham, NC',
        category: 'festivals',
        link: 'https://www.bfrcdurham.org/bimbe'
    },
    'artscape': {
        title: 'Artscape Festival',
        date: '2026-05-23',
        endDate: '2026-05-24',
        time: '11:00 AM - 11:00 PM',
        location: 'Baltimore, MD',
        category: 'festivals',
        link: 'https://www.artscape.org/'
    },
    'roots-picnic': {
        title: 'Roots Picnic',
        date: '2026-05-29',
        endDate: '2026-05-31',
        time: 'Multiple Days',
        location: 'Philadelphia, PA',
        category: 'festivals',
        link: 'https://rootspicnic.com/'
    },
    'taste-of-soul': {
        title: 'Taste of Soul',
        date: null,
        time: 'Annual Event',
        location: 'Los Angeles, CA',
        category: 'festivals',
        link: 'https://tasteofsoul.org/'
    },
    // === TRAVEL & CONFERENCES ===
    'black-tech': {
        title: 'Black Is Tech Conference',
        date: '2026-04-20',
        endDate: '2026-04-24',
        time: 'Multiple Days',
        location: 'Houston, TX',
        category: 'travel',
        link: 'https://blackistechconference.com/'
    },
    'nma': {
        title: 'NMA Annual Convention',
        date: '2026-07-25',
        endDate: '2026-07-29',
        time: 'Multiple Days',
        location: 'San Juan, Puerto Rico',
        category: 'travel',
        link: 'https://www.nmanet.org/'
    },
    'marthas-vineyard': {
        title: "Martha's Vineyard Trip",
        date: '2026-08-01',
        endDate: '2026-08-14',
        time: 'First 2 Weeks of August',
        location: 'Massachusetts',
        category: 'travel',
        link: 'https://www.mvol.com/'
    },
    'afrotech': {
        title: 'AfroTech Conference',
        date: '2026-11-02',
        endDate: '2026-11-06',
        time: 'Multiple Days',
        location: 'Houston, TX',
        category: 'travel',
        link: 'https://afrotech.com/'
    },
    'art-basel': {
        title: 'Art Basel',
        date: '2026-12-03',
        endDate: '2026-12-06',
        time: 'Multiple Days',
        location: 'Miami, FL',
        category: 'travel',
        link: 'https://www.artbasel.com/miami-beach'
    },
    'afronation': {
        title: 'AfroNation',
        date: null,
        time: 'TBD',
        location: 'International',
        category: 'travel',
        link: 'https://afronation.com/'
    },
    'black-portugal': {
        title: 'Afro Nation Portugal',
        date: '2026-07-03',
        endDate: '2026-07-05',
        time: 'July 3-5',
        location: 'Portugal',
        category: 'travel',
        link: 'https://www.afronation.com/'
    },
    // === WELLNESS & NATURE ===
    'carolina-beach': {
        title: 'Carolina Beach Adventure: Hike, Kayak & Chill',
        date: '2026-05-09',
        time: '9:00 AM - 5:00 PM',
        location: 'Carolina Beach Boardwalk Amusement Park',
        category: 'wellness',
        link: 'https://www.eventbrite.com/o/lets-get-social-raleigh-51158297753'
    },
    'hike-mine-creek': {
        title: 'Hike & Chill Mine Creek Greenway',
        date: '2026-02-07',
        time: '9:30 AM',
        location: 'Mine Creek Greenway',
        category: 'wellness',
        link: 'https://www.eventbrite.com/o/lets-get-social-raleigh-51158297753'
    },
    'hike-porte-noire': {
        title: 'Hike & Chill at Porte NOIRE Farms & Gardens',
        date: '2026-03-07',
        time: '9:30 AM',
        location: 'Porte NOIRE Gardens',
        category: 'wellness',
        link: 'https://www.eventbrite.com/o/lets-get-social-raleigh-51158297753'
    },
    'waterfalls': {
        title: 'NC Waterfalls Day Trip',
        date: null,
        time: 'Weekend Only',
        location: 'North Carolina',
        category: 'wellness',
        link: 'https://www.romanticasheville.com/waterfalls'
    },
    'girls-tea': {
        title: "Girls' Day Tea / Sleepover",
        date: '2026-01-24',
        time: 'Saturday (Flexible)',
        location: 'Host TBD',
        category: 'wellness'
    },
    'line-dance': {
        title: 'Line Dance Events',
        date: null,
        time: 'Friday Night or Saturday',
        location: 'Various Locations',
        category: 'wellness',
        link: 'https://www.eventbrite.com/d/nc--charlotte/line-dancing/'
    }
};

// Members list
const members = ['Sam', 'Charisse', 'Dee', 'Kim', 'Jenn', 'Arline', 'Treva', 'Kesha', 'Dana'];

// Admin emails - only these users can delete events
const adminEmails = [
    'krs1jack@gmail.com'  // Add admin emails here
];

// Check if current user is admin
function isAdmin() {
    const userEmail = localStorage.getItem('2026EventsUserEmail');
    return userEmail && adminEmails.includes(userEmail.toLowerCase());
}

// Member colors for avatars
const memberColors = {
    'Sam': '#667eea',
    'Charisse': '#ec4899',
    'Dee': '#f59e0b',
    'Kim': '#10b981',
    'Jenn': '#8b5cf6',
    'Arline': '#ef4444',
    'Treva': '#06b6d4',
    'Kesha': '#f97316'
};

// RSVP Storage
let rsvpData = {};
let notesData = {};
let customEvents = {};

// Current state
let currentEventId = null;
let currentMonth = new Date(2026, 0); // January 2026
let currentUser = null;

// === Generate All Sundays for 2026 (for date picker) ===
function getSundaysIn2026() {
    const sundays = [];
    const date = new Date(2026, 0, 1);

    // Find first Sunday
    while (date.getDay() !== 0) {
        date.setDate(date.getDate() + 1);
    }

    // Collect all Sundays for 2026
    while (date.getFullYear() === 2026) {
        const dateStr = date.toISOString().split('T')[0];
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthName = monthNames[date.getMonth()];
        const dayNum = date.getDate();

        sundays.push({
            date: dateStr,
            label: `${monthName} ${dayNum}, 2026`
        });

        date.setDate(date.getDate() + 7);
    }

    return sundays;
}

// === Church Event Storage ===
let confirmedChurchEvents = {};

function loadConfirmedChurchEvents() {
    try {
        const saved = localStorage.getItem('2026ConfirmedChurch');
        if (saved) {
            confirmedChurchEvents = JSON.parse(saved);
            // Add confirmed church events to eventsData
            Object.values(confirmedChurchEvents).forEach(event => {
                eventsData[event.id] = event;
            });
        }
    } catch (error) {
        console.error('Failed to load confirmed church events:', error);
    }
}

function saveConfirmedChurchEvents() {
    localStorage.setItem('2026ConfirmedChurch', JSON.stringify(confirmedChurchEvents));
}

// === Add Church Event for a Specific Sunday ===
function addChurchEvent(churchId, sundayDate) {
    const church = churchLocations[churchId];
    if (!church) return null;

    const dateObj = new Date(sundayDate + 'T12:00:00');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[dateObj.getMonth()];
    const dayNum = dateObj.getDate();

    const eventId = `church-${churchId}-${sundayDate}`;

    // Check if already exists
    if (eventsData[eventId]) {
        showToast('This church service is already added!', 'error');
        return null;
    }

    const newEvent = {
        id: eventId,
        title: `${church.name} - ${monthName} ${dayNum}`,
        date: sundayDate,
        time: 'Sunday Morning',
        location: `${church.location} (${church.host}'s Church)`,
        category: 'church',
        churchId: churchId,
        isConfirmedChurch: true
    };

    // Save to Firestore
    db.collection('church_events').doc(eventId).set(newEvent)
        .then(() => {
            showToast(`Added ${church.name} for ${monthName} ${dayNum}!`, 'success');
        })
        .catch((error) => {
            console.error("Error adding church event: ", error);
            showToast("Error adding church event", "error");
        });

    return eventId;
}

function addChurchEventCard(event) {
    const grid = document.querySelector('.category-section[data-category="church"] .events-grid');
    if (!grid) return;

    const dateObj = new Date(event.date + 'T12:00:00');
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const card = document.createElement('article');
    card.className = 'event-card church confirmed-church';
    card.dataset.eventId = event.id;
    card.innerHTML = `
        <div class="event-date">
            <span class="month">${monthNames[dateObj.getMonth()]}</span>
            <span class="day">${dateObj.getDate()}</span>
            <span class="year">2026</span>
        </div>
        <div class="event-details">
            <h3>${event.title}</h3>
            <p class="event-time">${event.time}</p>
            <p class="event-location">${event.location}</p>
            <span class="event-tag church">Confirmed</span>
        </div>
        <div class="event-rsvp">
            <button class="rsvp-btn" onclick="openRSVP('${event.id}')">RSVP</button>
            <div class="attendee-count"><span class="count">0</span> going</div>
        </div>
    `;

    // Insert after invitation cards
    const invitationCards = grid.querySelectorAll('.church-invitation');
    if (invitationCards.length > 0) {
        const lastInvitation = invitationCards[invitationCards.length - 1];
        lastInvitation.after(card);
    } else {
        grid.appendChild(card);
    }
}

// === Add Event Links to Cards ===
function addEventLinksToCards() {
    document.querySelectorAll('.event-card').forEach(card => {
        const eventId = card.dataset.eventId;
        const eventData = eventsData[eventId];

        if (eventData && eventData.link) {
            // Check if link already exists
            if (card.querySelector('.event-link-btn')) return;

            const linkBtn = document.createElement('a');
            linkBtn.href = eventData.link;
            linkBtn.target = '_blank';
            linkBtn.rel = 'noopener noreferrer';
            linkBtn.className = 'event-link-btn';
            linkBtn.innerHTML = '<span class="link-icon">&#128279;</span> Info';
            linkBtn.title = 'View event details';

            // Add to event-details section
            const detailsSection = card.querySelector('.event-details');
            if (detailsSection) {
                detailsSection.appendChild(linkBtn);
            }
        }
    });
}

// === Add Admin Controls to Cards ===
function addAdminControls() {
    if (!isAdmin()) return;

    document.querySelectorAll('.event-card').forEach(card => {
        const eventId = card.dataset.eventId;

        // Skip if delete button already exists
        if (card.querySelector('.admin-delete-btn')) return;

        // Skip church invitation cards
        if (card.classList.contains('church-invitation')) return;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'admin-delete-btn';
        deleteBtn.innerHTML = '&#128465;';
        deleteBtn.title = 'Delete event (Admin only)';
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            confirmDeleteEvent(eventId);
        };

        card.appendChild(deleteBtn);
    });
}

// === Delete Event with Confirmation ===
function confirmDeleteEvent(eventId) {
    const event = eventsData[eventId];
    if (!event) return;

    const modal = document.createElement('div');
    modal.className = 'delete-confirm-modal';
    modal.innerHTML = `
        <div class="delete-confirm-content">
            <h3>Delete Event?</h3>
            <p>Are you sure you want to delete "<strong>${event.title}</strong>"?</p>
            <p class="delete-warning">This action cannot be undone.</p>
            <div class="delete-confirm-buttons">
                <button class="cancel-delete-btn" onclick="closeDeleteModal()">Cancel</button>
                <button class="confirm-delete-btn" onclick="deleteEvent('${eventId}')">Delete</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeDeleteModal() {
    const modal = document.querySelector('.delete-confirm-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

function deleteEvent(eventId) {
    // Delete from Firestore
    // We try to delete from all potential collections just in case

    const db = firebase.firestore();
    const batch = db.batch();

    if (customEvents[eventId]) {
        const docRef = db.collection('custom_events').doc(eventId);
        batch.delete(docRef);
    }

    if (confirmedChurchEvents[eventId]) {
        const docRef = db.collection('church_events').doc(eventId);
        batch.delete(docRef);
    }

    // Also delete any RSVPs
    // Note: deleting a document doesn't delete subcollections, 
    // but here RSVPs are in a root 'rsvps' collection with docId = eventId
    const rsvpRef = db.collection('rsvps').doc(eventId);
    batch.delete(rsvpRef);

    batch.commit().then(() => {
        console.log('Event deleted successfully');
        showToast('Event deleted successfully', 'success');
        closeDeleteModal();
    }).catch((error) => {
        console.error('Error deleting event:', error);
        showToast('Error deleting event', 'error');
    });

    // Remove from DOM immediately for feedback (will be confirmed by listener)
    const card = document.querySelector(`[data-event-id="${eventId}"]`);
    if (card) {
        card.style.transform = 'scale(0.8)';
        card.style.opacity = '0';
        setTimeout(() => card.remove(), 300);
    }

    // Local cleanup
    delete eventsData[eventId];
    delete customEvents[eventId];
    delete confirmedChurchEvents[eventId];
    delete rsvpData[eventId];
    updateYourEventsSection();
}

// === Print/Share Functions ===
function printCalendar() {
    window.print();
}

function shareCalendar() {
    const shareData = {
        title: '2026 Events Calendar',
        text: 'Check out our 2026 events calendar!',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => showToast('Shared successfully!', 'success'))
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    copyToClipboard(window.location.href);
                }
            });
    } else {
        copyToClipboard(window.location.href);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Link copied to clipboard!', 'success');
    }).catch(() => {
        showToast('Could not copy link', 'error');
    });
}

function exportCalendarPDF() {
    showToast('Preparing print view...', 'success');
    window.print();
}

// === Initialize Application ===
document.addEventListener('DOMContentLoaded', function () {
    loadConfirmedChurchEvents();
    loadDataFromStorage();
    loadCustomEvents();
    renderConfirmedChurchCards();
    populateSundaySelects();
    addEventLinksToCards();
    checkUserSession();
    setupSignIn();
    setupFilterButtons();
    setupViewToggle();
    setupCalendarNavigation();
    setupAddEventButton();
    setupChurchInvitations();
});

// === Render saved church events on load ===
function renderConfirmedChurchCards() {
    Object.values(confirmedChurchEvents).forEach(event => {
        addChurchEventCard(event);
    });
}

// === Populate Sunday select dropdowns ===
function populateSundaySelects() {
    const sundays = getSundaysIn2026();
    const selects = document.querySelectorAll('.sunday-select');

    selects.forEach(select => {
        sundays.forEach(sunday => {
            const option = document.createElement('option');
            option.value = sunday.date;
            option.textContent = sunday.label;
            select.appendChild(option);
        });
    });
}

// === Setup Church Invitation Buttons ===
function setupChurchInvitations() {
    document.querySelectorAll('.add-church-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const churchId = this.dataset.church;
            const select = this.closest('.church-invitation').querySelector('.sunday-select');
            const sundayDate = select.value;

            if (!sundayDate) {
                showToast('Please select a Sunday first', 'error');
                return;
            }

            if (!currentUser) {
                showToast('Please sign in first', 'error');
                return;
            }

            addChurchEvent(churchId, sundayDate);
            select.value = ''; // Reset selection
        });
    });
}

// === Firebase Auth Functions ===
function setupSignIn() {
    // Firebase auth state listener handles sign-in state
    auth.onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in
            handleUserSignedIn(user);
        } else {
            // User is signed out
            handleUserSignedOut();
        }
    });
}

function signInWithGoogle() {
    auth.signInWithPopup(googleProvider)
        .then((result) => {
            // Sign-in handled by onAuthStateChanged
        })
        .catch((error) => {
            console.error('Sign-in error:', error);
            showToast('Sign-in failed: ' + error.message, 'error');
        });
}

function signOutUser() {
    auth.signOut()
        .then(() => {
            // Sign-out handled by onAuthStateChanged
        })
        .catch((error) => {
            console.error('Sign-out error:', error);
            showToast('Sign-out failed', 'error');
        });
}

// Store Google user info temporarily
let googleUser = null;

function handleUserSignedIn(user) {
    googleUser = user;

    // Hide sign-in screen
    document.getElementById('signInScreen').classList.add('hidden');

    // Check Firestore for existing user mapping
    const db = firebase.firestore();
    db.collection('users').doc(user.uid).get().then((doc) => {
        if (doc.exists && doc.data().participantName) {
            // Found existing user mapping
            completeSignIn(doc.data().participantName, user);
        } else {
            // New user or no mapping, show selection modal
            showParticipantModal();
        }
    }).catch((error) => {
        console.error("Error fetching user profile:", error);
        // Fallback to local storage if offline (optional, but good practice) or just show modal
        const savedParticipant = localStorage.getItem('2026EventsParticipant_' + user.uid);
        if (savedParticipant && members.includes(savedParticipant)) {
            completeSignIn(savedParticipant, user);
        } else {
            showParticipantModal();
        }
    });

    // Still store locally for offline/faster access if needed, but not primary source of truth
    localStorage.setItem('2026EventsUserEmail', user.email);
    localStorage.setItem('2026EventsUserUID', user.uid);
}

function showParticipantModal() {
    const modal = document.getElementById('participantModal');
    modal.classList.add('active');

    // Setup participant button handlers
    document.querySelectorAll('.participant-btn').forEach(btn => {
        btn.onclick = function () {
            const participant = this.dataset.participant;
            selectParticipant(participant);
        };
    });
}

function selectParticipant(participant) {
    if (!googleUser) return;

    // Save participant selection to Firestore
    const db = firebase.firestore();
    db.collection('users').doc(googleUser.uid).set({
        participantName: participant,
        email: googleUser.email,
        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true }).then(() => {
        console.log("User mapping saved");
    }).catch((error) => {
        console.error("Error saving user mapping:", error);
    });

    // Save locally too
    localStorage.setItem('2026EventsParticipant_' + googleUser.uid, participant);

    // Close modal
    document.getElementById('participantModal').classList.remove('active');

    // Complete sign in
    completeSignIn(participant, googleUser);

    showToast(`Welcome, ${participant}! Your RSVPs will be tracked.`, 'success');
}

function completeSignIn(participant, user) {
    currentUser = participant;
    localStorage.setItem('2026EventsUser', participant);

    // Show user bar
    const userBar = document.getElementById('userBar');
    userBar.classList.remove('hidden');
    document.getElementById('userName').textContent = participant;

    // Handle profile photo
    const userPhoto = document.getElementById('userPhoto');
    const userAvatar = document.getElementById('userAvatar');

    if (user.photoURL) {
        // Set avatar as fallback initially
        userAvatar.textContent = participant.charAt(0);
        userAvatar.style.background = memberColors[participant] || '#667eea';
        userAvatar.style.display = 'flex';
        userPhoto.style.display = 'none';

        // Load photo with error handling
        userPhoto.src = user.photoURL;

        userPhoto.onload = function () {
            // Photo loaded successfully, show it
            userPhoto.style.display = 'block';
            userAvatar.style.display = 'none';
            console.log('Profile photo loaded successfully');
        };

        userPhoto.onerror = function () {
            // Photo failed to load, keep avatar
            console.warn('Failed to load profile photo, using avatar fallback');
            userPhoto.style.display = 'none';
            userAvatar.style.display = 'flex';
        };
    } else {
        // No photo URL, show avatar
        userPhoto.style.display = 'none';
        userAvatar.style.display = 'flex';
        userAvatar.textContent = participant.charAt(0);
        userAvatar.style.background = memberColors[participant] || '#667eea';
    }

    // Initialize the app
    updateStats();
    updateAllAttendeeCountsOnCards();
    renderCalendar();

    // Setup Firestore Listeners
    setupFirestoreListeners();

    // Add admin controls if user is admin
    addAdminControls();
}

function handleUserSignedOut() {
    currentUser = null;
    localStorage.removeItem('2026EventsUser');
    localStorage.removeItem('2026EventsUserEmail');
    localStorage.removeItem('2026EventsUserUID');

    // Show sign-in screen
    document.getElementById('signInScreen').classList.remove('hidden');

    // Hide user bar
    document.getElementById('userBar').classList.add('hidden');

    showToast('Signed out successfully', 'success');
}

function checkUserSession() {
    // Firebase handles session persistence automatically
    // onAuthStateChanged will fire when auth state is determined
}

// === Local Storage Functions ===
function isLocalStorageAvailable() {
    try {
        const test = '__test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

// === Firestore Real-time Listeners ===
function setupFirestoreListeners() {
    if (!currentUser) return;

    // 1. Listen for RSVPs (Global)
    // Structure: collection('rsvps').doc(eventId) -> { userId: 'going', ... }
    db.collection('rsvps').onSnapshot((snapshot) => {
        const changes = {};
        snapshot.docChanges().forEach((change) => {
            const eventId = change.doc.id;
            const data = change.doc.data();
            rsvpData[eventId] = data || {};

            // Update UI for this event
            updateAttendeeCountOnCard(eventId);

            // If this event is currently open in modal, update it
            if (currentEventId === eventId) {
                // If modal is open, we might need to refresh the attendee list
                // logic here is tricky to not disrupt user typing, but attendee list is safe
                updateAttendeesDisplay(rsvpData[eventId]);
            }
        });

        // Update stats after batch updates
        updateStats();
    });

    // 2. Listen for Custom Events
    db.collection('custom_events').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            const eventData = change.doc.data();
            const eventId = change.doc.id;

            if (change.type === "added") {
                if (!eventsData[eventId]) {
                    eventsData[eventId] = { ...eventData, id: eventId, isCustom: true };
                    customEvents[eventId] = eventsData[eventId];
                    addEventCardToDOM(eventId, eventsData[eventId]);
                }
            } else if (change.type === "modified") {
                eventsData[eventId] = { ...eventData, id: eventId, isCustom: true };
                customEvents[eventId] = eventsData[eventId];
                // basic update: re-render card? For now just update stats
            } else if (change.type === "removed") {
                delete eventsData[eventId];
                delete customEvents[eventId];
                const card = document.querySelector(`[data-event-id="${eventId}"]`);
                if (card) card.remove();
            }
        });
        updateStats();
    });

    // 3. Listen for Confirmed Church Events
    db.collection('church_events').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            const eventData = change.doc.data();
            const eventId = change.doc.id;

            if (change.type === "added") {
                if (!eventsData[eventId]) {
                    eventsData[eventId] = { ...eventData, id: eventId, isConfirmedChurch: true };
                    confirmedChurchEvents[eventId] = eventsData[eventId];
                    addChurchEventCard(eventsData[eventId]);
                }
            } else if (change.type === 'removed') {
                delete eventsData[eventId];
                delete confirmedChurchEvents[eventId];
                const card = document.querySelector(`[data-event-id="${eventId}"]`);
                if (card) card.remove();
            }
        });
        updateStats();
    });

    // 4. Listen for User Specific Data (Notes/Travel) if we want private data
    // For now, let's make travel data public/shared as per "friend sharing" goal?
    // User requested "best site for friends sharing", so shared travel info is good.
    db.collection('travel_info').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            const eventId = change.doc.id;
            const data = change.doc.data(); // { userId: { hotel: ..., flight: ... } }
            // We need to structure this. Let's say docId=eventId, fields=userId
            // Actually, current implementation was local global. 
            // Let's make travel data global for simplicity: travelData[eventId] = { hotel, flight } (shared)
            // Or better: travelData[eventId] = { ... }
            // The previous code had travelData[eventId] = { hotel, flight... } 
            // which implied one set of travel plans PER event (likely the user's own).
            // If we want social, we might want to see OTHER's travel plans.
            // For this MVP, let's keep it simple: sync the travel data associated with the event?
            // Actually, the previous code was: travelData[eventId] = { hotel, ... }
            // and it was stored in localStorage '2026EventsTravel'.
            // This means it was PERSONAL notes.
            // If we want "friends sharing", maybe we should make it shared?
            // Let's stick to personal for "Notes" and "Travel" for now unless asked otherwise,
            // OR make it shared. 
            // "fix issues of persistence of user data connections"
            // I will assume Travel details are PERSONAL for now to avoid privacy issues unless explicitly shared.
            // So I will store these in `users/{uid}/private_data/travel`
        });
    });

    // Load User Private Data (Notes/Travel)
    db.collection('users').doc(currentUser).collection('private_data').doc('notes').get().then(doc => {
        if (doc.exists) notesData = doc.data();
    });
    db.collection('users').doc(currentUser).collection('private_data').doc('travel').get().then(doc => {
        if (doc.exists) travelData = doc.data();
    });
}

// Deprecated Local Storage Functions replaced by Firestore
function loadDataFromStorage() {
    // No-op, handled by listeners
}
function loadCustomEvents() {
    // No-op, handled by listeners
}
function loadConfirmedChurchEvents() {
    // No-op, handled by listeners
}

// === Filter Functions ===
function setupFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Filter events
            const category = this.dataset.category;
            filterEvents(category);
        });
    });
}

function filterEvents(category) {
    const sections = document.querySelectorAll('.category-section');

    sections.forEach(section => {
        if (category === 'all' || section.dataset.category === category) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// === View Toggle ===
function setupViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    const listView = document.getElementById('listView');
    const calendarView = document.getElementById('calendarView');

    viewBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const view = this.dataset.view;
            if (view === 'list') {
                listView.classList.remove('hidden');
                calendarView.classList.add('hidden');
            } else {
                listView.classList.add('hidden');
                calendarView.classList.remove('hidden');
                renderCalendar();
            }
        });
    });
}

// === RSVP Modal Functions ===
function openRSVP(eventId) {
    // Check if user is signed in
    if (!currentUser) {
        showToast('Please sign in first', 'error');
        return;
    }

    // Validate eventId exists
    if (!eventsData[eventId]) {
        console.error('Invalid event ID:', eventId);
        showToast('Event not found', 'error');
        return;
    }

    currentEventId = eventId;
    const event = eventsData[eventId];
    const modal = document.getElementById('rsvpModal');

    // Set modal title and details
    document.getElementById('modalEventTitle').textContent = event.title;

    // Build details with optional link
    let detailsHTML = `${event.time} • ${event.location}`;
    if (event.link) {
        detailsHTML += ` • <a href="${event.link}" target="_blank" class="event-link">View Event</a>`;
    }
    if (event.isBirthday) {
        detailsHTML = `🎂 Birthday Celebration!`;
    }
    document.getElementById('modalEventDetails').innerHTML = detailsHTML;

    // Load existing RSVP data
    const eventRSVP = rsvpData[eventId] || {};
    const eventNotes = notesData[eventId] || '';

    // Set select values
    document.querySelectorAll('.rsvp-select').forEach(select => {
        const member = select.dataset.member;
        select.value = eventRSVP[member] || '';

        // Highlight current user's select
        if (member === currentUser) {
            select.style.borderColor = memberColors[currentUser] || '#667eea';
            select.style.borderWidth = '3px';
        } else {
            select.style.borderColor = '';
            select.style.borderWidth = '';
        }
    });

    // Set notes
    document.getElementById('eventNotes').value = eventNotes;

    // Load travel details
    const eventTravel = travelData[eventId] || {};
    document.getElementById('hotelInfo').value = eventTravel.hotel || '';
    document.getElementById('flightInfo').value = eventTravel.flight || '';
    document.getElementById('transportInfo').value = eventTravel.transport || '';

    // Update attendees list
    updateAttendeesDisplay(eventRSVP);

    // Show modal
    modal.classList.add('active');
}

function closeRSVP() {
    document.getElementById('rsvpModal').classList.remove('active');
    currentEventId = null;
}

function saveRSVP() {
    if (!currentEventId) return;

    // Collect RSVP data
    const eventRSVP = {};
    document.querySelectorAll('.rsvp-select').forEach(select => {
        const member = select.dataset.member;
        const value = select.value;
        if (value) {
            eventRSVP[member] = value;
        }
    });

    // Save RSVP to Firestore (Global)
    db.collection('rsvps').doc(currentEventId).set(eventRSVP, { merge: true })
        .then(() => {
            console.log("RSVP saved");
        })
        .catch((error) => {
            console.error("Error saving RSVP: ", error);
            showToast("Error saving RSVP", "error");
        });

    // Update local state immediately for responsiveness (listeners will confirm)
    rsvpData[currentEventId] = eventRSVP;

    // Save Notes (Private)
    const notes = document.getElementById('eventNotes').value;
    if (notes) {
        notesData[currentEventId] = notes;
    } else {
        delete notesData[currentEventId];
    }
    db.collection('users').doc(currentUser).collection('private_data').doc('notes').set(notesData);

    // Save Travel Details (Private)
    const hotel = document.getElementById('hotelInfo').value;
    const flight = document.getElementById('flightInfo').value;
    const transport = document.getElementById('transportInfo').value;

    // Only save if there's travel data
    if (hotel || flight || transport) {
        travelData[currentEventId] = {
            hotel: hotel || '',
            flight: flight || '',
            transport: transport || ''
        };
    } else {
        delete travelData[currentEventId];
    }
    db.collection('users').doc(currentUser).collection('private_data').doc('travel').set(travelData);

    // Update display
    updateAttendeesDisplay(eventRSVP);
    updateAttendeeCountOnCard(currentEventId);
    updateStats();

    // Show toast
    showToast('RSVP saved successfully!', 'success');
}

function updateAttendeesDisplay(eventRSVP) {
    const container = document.getElementById('attendeesList');
    container.innerHTML = '';

    // Group by status
    const going = [];
    const maybe = [];
    const notGoing = [];

    for (const [member, status] of Object.entries(eventRSVP)) {
        if (status === 'going') going.push(member);
        else if (status === 'maybe') maybe.push(member);
        else if (status === 'not-going') notGoing.push(member);
    }

    // Create chips using DOM methods (safe from XSS)
    function createChip(className, prefix, name) {
        const chip = document.createElement('span');
        chip.className = `attendee-chip ${className}`;
        chip.textContent = `${prefix} ${name}`;
        if (name === currentUser) {
            chip.style.fontWeight = '700';
            chip.style.boxShadow = '0 0 0 2px ' + (memberColors[name] || '#667eea');
        }
        container.appendChild(chip);
    }

    going.forEach(m => createChip('going', '✓', m));
    maybe.forEach(m => createChip('maybe', '?', m));
    notGoing.forEach(m => createChip('not-going', '✗', m));

    if (going.length === 0 && maybe.length === 0 && notGoing.length === 0) {
        const noResponse = document.createElement('span');
        noResponse.style.color = '#64748b';
        noResponse.textContent = 'No responses yet';
        container.appendChild(noResponse);
    }
}

function updateAttendeeCountOnCard(eventId) {
    const card = document.querySelector(`[data-event-id="${eventId}"]`);
    if (!card) return;

    const eventRSVP = rsvpData[eventId] || {};
    const goingCount = Object.values(eventRSVP).filter(s => s === 'going').length;

    const countSpan = card.querySelector('.attendee-count .count');
    if (countSpan) {
        countSpan.textContent = goingCount;
    }
}

function updateAllAttendeeCountsOnCards() {
    Object.keys(eventsData).forEach(eventId => {
        updateAttendeeCountOnCard(eventId);
    });
}

// === Statistics ===
function updateStats() {
    const totalEvents = Object.keys(eventsData).length;
    document.getElementById('totalEvents').textContent = totalEvents;

    // Count upcoming events (events with dates in the future)
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset to start of day for accurate comparison
    let upcomingCount = 0;
    let signedUpCount = 0;
    const userEvents = [];

    Object.entries(eventsData).forEach(([eventId, event]) => {
        if (event.date) {
            const eventDate = new Date(event.date);
            eventDate.setHours(0, 0, 0, 0);
            if (eventDate >= today) {
                upcomingCount++;
            }
        } else {
            // TBD events count as upcoming
            upcomingCount++;
        }

        // Count events current user is going to
        if (currentUser) {
            const eventRSVP = rsvpData[eventId] || {};
            if (eventRSVP[currentUser] === 'going') {
                signedUpCount++;
                userEvents.push({ id: eventId, ...event });
            }
        }
    });

    document.getElementById('upcomingEvents').textContent = upcomingCount;
    document.getElementById('signedUpEvents').textContent = signedUpCount;

    // Update personalized "Your Events" section
    updateYourEventsSection(userEvents, signedUpCount);
}

// === Update Your Events Section ===
function updateYourEventsSection(userEvents, count) {
    const section = document.getElementById('yourEventsSection');
    const list = document.getElementById('yourEventsList');
    const countEl = document.getElementById('yourEventsCount');
    const noEventsMsg = document.getElementById('noEventsMessage');

    if (!currentUser) {
        section.classList.add('hidden');
        return;
    }

    section.classList.remove('hidden');
    countEl.textContent = count;

    // Clear existing list
    list.innerHTML = '';

    if (userEvents.length === 0) {
        noEventsMsg.style.display = 'block';
        list.style.display = 'none';
        return;
    }

    noEventsMsg.style.display = 'none';
    list.style.display = 'flex';

    // Sort by date
    userEvents.sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(a.date) - new Date(b.date);
    });

    // Create event chips
    userEvents.forEach(event => {
        const chip = document.createElement('div');
        chip.className = `your-event-chip ${event.category || ''}`;

        const dateStr = event.date ? formatEventDate(event.date) : 'TBD';

        chip.innerHTML = `
            <span class="chip-date">${dateStr}</span>
            <span class="chip-title">${event.title}</span>
            <button class="chip-view" onclick="openRSVP('${event.id}')">View</button>
        `;

        list.appendChild(chip);
    });
}

// === Format Event Date for Chips ===
function formatEventDate(dateStr) {
    const date = new Date(dateStr + 'T12:00:00');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}`;
}

// === Add Event Functions ===
function setupAddEventButton() {
    // Button is added via HTML
}

function openAddEvent() {
    if (!currentUser) {
        showToast('Please sign in first', 'error');
        return;
    }
    document.getElementById('addEventModal').classList.add('active');
}

function closeAddEvent() {
    document.getElementById('addEventModal').classList.remove('active');
    // Clear form
    document.getElementById('newEventTitle').value = '';
    document.getElementById('newEventDate').value = '';
    document.getElementById('newEventTime').value = '';
    document.getElementById('newEventLocation').value = '';
    document.getElementById('newEventCategory').value = 'festivals';
}

function saveNewEvent() {
    const title = document.getElementById('newEventTitle').value.trim();
    const date = document.getElementById('newEventDate').value;
    const time = document.getElementById('newEventTime').value.trim() || 'TBD';
    const location = document.getElementById('newEventLocation').value.trim() || 'TBD';
    const category = document.getElementById('newEventCategory').value;

    if (!title) {
        showToast('Please enter an event title', 'error');
        return;
    }

    // Generate unique event ID
    const eventId = 'custom-' + Date.now();

    // Create event object
    const newEvent = {
        title: title,
        date: date || null,
        time: time,
        location: location,
        category: category,
        createdBy: currentUser,
        isCustom: true
    };

    // Save to Firestore
    db.collection('custom_events').doc(eventId).set(newEvent)
        .then(() => {
            showToast(`Event "${title}" added!`, 'success');
            // DOM update handled by listener
            closeAddEvent();
        })
        .catch((error) => {
            console.error("Error adding event: ", error);
            showToast("Error adding event", "error");
        });

    // Optimistic update (optional, but let's rely on listener for consistency)
    // eventsData[eventId] = newEvent;
    // customEvents[eventId] = newEvent;
    // addEventCardToDOM(eventId, newEvent);
    // updateStats();
}

function addEventCardToDOM(eventId, event) {
    const section = document.querySelector(`[data-category="${event.category}"] .events-grid`);
    if (!section) return;

    const card = document.createElement('article');
    card.className = `event-card ${event.category}`;
    card.dataset.eventId = eventId;

    const dateDisplay = event.date ? formatDateForCard(event.date) : { month: 'TBD', day: '--', year: '2026' };

    card.innerHTML = `
        <div class="event-date ${!event.date ? 'flexible' : ''}">
            <span class="month">${dateDisplay.month}</span>
            <span class="day">${dateDisplay.day}</span>
            <span class="year">${dateDisplay.year}</span>
        </div>
        <div class="event-details">
            <h3>${escapeHtml(event.title)}</h3>
            <p class="event-time">${escapeHtml(event.time)}</p>
            <p class="event-location">${escapeHtml(event.location)}</p>
            <span class="event-tag custom">Added by ${escapeHtml(event.createdBy)}</span>
        </div>
        <div class="event-rsvp">
            <button class="rsvp-btn" onclick="openRSVP('${eventId}')">RSVP</button>
            <div class="attendee-count"><span class="count">0</span> going</div>
        </div>
    `;

    section.appendChild(card);
}

function formatDateForCard(dateStr) {
    const date = new Date(dateStr);
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return {
        month: months[date.getMonth()],
        day: date.getDate().toString(),
        year: date.getFullYear().toString()
    };
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// === Calendar Functions ===
function setupCalendarNavigation() {
    document.getElementById('prevMonth').addEventListener('click', function () {
        currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
        renderCalendar();
    });

    document.getElementById('nextMonth').addEventListener('click', function () {
        currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
        renderCalendar();
    });
}

function renderCalendar() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    document.getElementById('currentMonth').textContent =
        `${monthNames[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`;

    const calendarDays = document.getElementById('calendarDays');
    calendarDays.innerHTML = '';

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // Get first day of month and total days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
        const day = document.createElement('div');
        day.className = 'calendar-day other-month';
        day.innerHTML = `<span class="day-number">${daysInPrevMonth - i}</span>`;
        calendarDays.appendChild(day);
    }

    // Current month days
    const today = new Date();
    for (let d = 1; d <= daysInMonth; d++) {
        const day = document.createElement('div');
        day.className = 'calendar-day';

        // Check if today
        if (year === today.getFullYear() && month === today.getMonth() && d === today.getDate()) {
            day.classList.add('today');
        }

        // Check if Sunday (for church highlight)
        const checkDate = new Date(year, month, d);
        if (checkDate.getDay() === 0) {
            day.classList.add('sunday');
        }

        day.innerHTML = `<span class="day-number">${d}</span>`;

        // Add events for this day
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const dayEvents = getEventsForDate(dateStr);

        dayEvents.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.className = `calendar-event ${event.category}`;
            eventDiv.textContent = event.title.substring(0, 15) + (event.title.length > 15 ? '...' : '');
            eventDiv.title = event.title;
            eventDiv.onclick = () => openRSVP(event.id);
            day.appendChild(eventDiv);
        });

        calendarDays.appendChild(day);
    }

    // Next month days to fill the grid
    const totalCells = firstDay + daysInMonth;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

    for (let i = 1; i <= remainingCells; i++) {
        const day = document.createElement('div');
        day.className = 'calendar-day other-month';
        day.innerHTML = `<span class="day-number">${i}</span>`;
        calendarDays.appendChild(day);
    }
}

function getEventsForDate(dateStr) {
    const events = [];

    Object.entries(eventsData).forEach(([id, event]) => {
        if (event.date === dateStr) {
            events.push({ ...event, id });
        } else if (event.date && event.endDate) {
            // Check if date falls within range
            const checkDate = new Date(dateStr);
            const startDate = new Date(event.date);
            const endDate = new Date(event.endDate);

            if (checkDate >= startDate && checkDate <= endDate) {
                events.push({ ...event, id });
            }
        }
    });

    return events;
}

// === Toast Notification ===
function showToast(message, type = 'success') {
    // Remove existing toasts
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Auto remove
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// === Close modal on outside click ===
document.getElementById('rsvpModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeRSVP();
    }
});

// === Keyboard navigation ===
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeRSVP();
        closeAddEvent();
    }
});

// === Export functions for external use ===
window.openRSVP = openRSVP;
window.closeRSVP = closeRSVP;
window.saveRSVP = saveRSVP;
window.signOut = signOut;
window.openAddEvent = openAddEvent;
window.closeAddEvent = closeAddEvent;
window.saveNewEvent = saveNewEvent;

// === Edit Event Functions ===
let isEditMode = false;
let editingEventId = null;

function openEditEvent() {
    if (!currentEventId) return;

    const event = eventsData[currentEventId];
    if (!event) return;

    isEditMode = true;
    editingEventId = currentEventId;

    // Close RSVP modal
    closeRSVP();

    // Open add event modal in edit mode
    const modal = document.getElementById('addEventModal');
    modal.classList.add('active');

    // Change title
    modal.querySelector('h2').textContent = 'Edit Event';
    modal.querySelector('.save-event-btn').textContent = 'Save Changes';

    // Fill in existing data
    document.getElementById('newEventTitle').value = event.title || '';
    document.getElementById('newEventDate').value = event.date || '';
    document.getElementById('newEventTime').value = event.time || '';
    document.getElementById('newEventLocation').value = event.location || '';
    document.getElementById('newEventCategory').value = event.category || 'festivals';
}

function saveEditedEvent() {
    if (!editingEventId) return;

    const title = document.getElementById('newEventTitle').value.trim();
    const date = document.getElementById('newEventDate').value;
    const time = document.getElementById('newEventTime').value.trim() || 'TBD';
    const location = document.getElementById('newEventLocation').value.trim() || 'TBD';
    const category = document.getElementById('newEventCategory').value;

    if (!title) {
        showToast('Please enter an event title', 'error');
        return;
    }

    // Update event data
    eventsData[editingEventId].title = title;
    eventsData[editingEventId].date = date || null;
    eventsData[editingEventId].time = time;
    eventsData[editingEventId].location = location;
    eventsData[editingEventId].category = category;

    // If it's a custom event, save to localStorage
    if (customEvents[editingEventId]) {
        customEvents[editingEventId] = eventsData[editingEventId];
        saveCustomEvents();
    }

    // Update the card in DOM
    updateEventCardInDOM(editingEventId);

    // Close modal
    closeAddEvent();

    showToast('Event updated!', 'success');
}

function updateEventCardInDOM(eventId) {
    const card = document.querySelector(`[data-event-id="${eventId}"]`);
    if (!card) return;

    const event = eventsData[eventId];
    const dateDisplay = event.date ? formatDateForCard(event.date) : { month: 'TBD', day: '--', year: '2026' };

    // Update date
    const dateDiv = card.querySelector('.event-date');
    if (dateDiv) {
        dateDiv.querySelector('.month').textContent = dateDisplay.month;
        dateDiv.querySelector('.day').textContent = dateDisplay.day;
        dateDiv.querySelector('.year').textContent = dateDisplay.year;
    }

    // Update details
    const h3 = card.querySelector('h3');
    if (h3) h3.textContent = event.title;

    const timeP = card.querySelector('.event-time');
    if (timeP) timeP.textContent = event.time;

    const locationP = card.querySelector('.event-location');
    if (locationP) locationP.textContent = event.location;
}

function deleteEvent() {
    if (!currentEventId) return;

    const event = eventsData[currentEventId];
    if (!event) return;

    // Confirm deletion
    if (!confirm(`Are you sure you want to delete "${event.title}"?`)) {
        return;
    }

    // Remove from DOM
    const card = document.querySelector(`[data-event-id="${currentEventId}"]`);
    if (card) {
        card.remove();
    }

    // Remove from data
    delete eventsData[currentEventId];

    // Remove from custom events if applicable
    if (customEvents[currentEventId]) {
        delete customEvents[currentEventId];
        saveCustomEvents();
    }

    // Remove RSVPs and notes
    delete rsvpData[currentEventId];
    delete notesData[currentEventId];
    saveDataToStorage();

    // Close modal
    closeRSVP();

    // Update stats
    updateStats();

    showToast('Event deleted', 'success');
}

// Override saveNewEvent to handle edit mode
const originalSaveNewEvent = saveNewEvent;
saveNewEvent = function () {
    if (isEditMode) {
        saveEditedEvent();
        isEditMode = false;
        editingEventId = null;
    } else {
        originalSaveNewEvent();
    }
};

// Override closeAddEvent to reset edit mode
const originalCloseAddEvent = closeAddEvent;
closeAddEvent = function () {
    isEditMode = false;
    editingEventId = null;

    // Reset modal title
    const modal = document.getElementById('addEventModal');
    if (modal) {
        const h2 = modal.querySelector('h2');
        if (h2) h2.textContent = 'Add New Event';
        const btn = modal.querySelector('.save-event-btn');
        if (btn) btn.textContent = 'Add Event';
    }

    originalCloseAddEvent();
};

window.openEditEvent = openEditEvent;
window.deleteEvent = deleteEvent;

// === Export to CSV functionality ===
function exportToCSV() {
    let csv = 'Event,Date,Location,';
    members.forEach(m => csv += m + ',');
    csv += 'Notes\n';

    Object.entries(eventsData).forEach(([id, event]) => {
        const eventRSVP = rsvpData[id] || {};
        const notes = notesData[id] || '';

        csv += `"${event.title}","${event.date || 'TBD'}","${event.location}",`;
        members.forEach(m => {
            const status = eventRSVP[m] || '';
            csv += `"${status}",`;
        });
        csv += `"${notes.replace(/"/g, '""')}"\n`;
    });

    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '2026-events-rsvp.csv';
    a.click();
    window.URL.revokeObjectURL(url);

    showToast('CSV exported successfully!', 'success');
}

window.exportToCSV = exportToCSV;

// === Export to Google Calendar (ICS Format) ===
function exportToGoogleCalendar() {
    if (!currentUser) {
        showToast('Please sign in first', 'error');
        return;
    }

    // Get events the current user is going to
    const userEvents = [];

    Object.entries(eventsData).forEach(([id, event]) => {
        const eventRSVP = rsvpData[id] || {};
        if (eventRSVP[currentUser] === 'going' && event.date) {
            userEvents.push({ id, ...event });
        }
    });

    if (userEvents.length === 0) {
        showToast('No events to export. RSVP "Going" to some events first!', 'error');
        return;
    }

    // Generate ICS file content
    let ics = 'BEGIN:VCALENDAR\r\n';
    ics += 'VERSION:2.0\r\n';
    ics += 'PRODID:-//2026 Culture Travel Fun//EN\r\n';
    ics += 'CALSCALE:GREGORIAN\r\n';
    ics += 'METHOD:PUBLISH\r\n';
    ics += 'X-WR-CALNAME:2026 Culture Travel & Fun\r\n';

    userEvents.forEach(event => {
        const startDate = formatDateForICS(event.date);
        const endDate = event.endDate ? formatDateForICS(event.endDate) : startDate;

        ics += 'BEGIN:VEVENT\r\n';
        ics += `UID:${event.id}@2026events\r\n`;
        ics += `DTSTAMP:${formatDateTimeForICS(new Date())}\r\n`;
        ics += `DTSTART;VALUE=DATE:${startDate}\r\n`;
        ics += `DTEND;VALUE=DATE:${incrementDate(endDate)}\r\n`;
        ics += `SUMMARY:${escapeICS(event.title)}\r\n`;
        ics += `LOCATION:${escapeICS(event.location)}\r\n`;
        ics += `DESCRIPTION:${escapeICS(event.time + ' - ' + event.location)}\r\n`;
        ics += 'END:VEVENT\r\n';
    });

    ics += 'END:VCALENDAR\r\n';

    // Download ICS file
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `2026-events-${currentUser.toLowerCase()}.ics`;
    a.click();
    window.URL.revokeObjectURL(url);

    showToast(`${userEvents.length} events exported! Import the .ics file into Google Calendar.`, 'success');
}

function formatDateForICS(dateStr) {
    // Convert YYYY-MM-DD to YYYYMMDD
    return dateStr.replace(/-/g, '');
}

function formatDateTimeForICS(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}

function incrementDate(dateStr) {
    // Add one day for ICS end date (exclusive)
    const date = new Date(dateStr.substring(0, 4), parseInt(dateStr.substring(4, 6)) - 1, parseInt(dateStr.substring(6, 8)));
    date.setDate(date.getDate() + 1);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
}

function escapeICS(text) {
    if (!text) return '';
    return text
        .replace(/\\/g, '\\\\')
        .replace(/;/g, '\\;')
        .replace(/,/g, '\\,')
        .replace(/\n/g, '\\n');
}

window.exportToGoogleCalendar = exportToGoogleCalendar;

// === Invite Friends Functions ===
function openInviteModal() {
    const modal = document.getElementById('inviteModal');
    const linkInput = document.getElementById('inviteLink');

    // Set the invite link (use current URL or deployed URL)
    const siteUrl = window.location.href.split('?')[0]; // Remove any query params
    linkInput.value = siteUrl;

    modal.classList.add('active');
}

function closeInviteModal() {
    document.getElementById('inviteModal').classList.remove('active');
}

function copyInviteLink() {
    const linkInput = document.getElementById('inviteLink');
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); // For mobile

    navigator.clipboard.writeText(linkInput.value).then(() => {
        showToast('Link copied to clipboard!', 'success');
    }).catch(() => {
        // Fallback for older browsers
        document.execCommand('copy');
        showToast('Link copied to clipboard!', 'success');
    });
}

function shareViaEmail() {
    const siteUrl = document.getElementById('inviteLink').value;
    const subject = encodeURIComponent('Join our 2026 Culture, Travel & Fun Calendar!');
    const body = encodeURIComponent(`Hey! I wanted to invite you to our events calendar for 2026.\n\nClick here to join: ${siteUrl}\n\nLet's plan some amazing adventures together!`);

    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
    showToast('Opening email...', 'success');
}

function shareViaSMS() {
    const siteUrl = document.getElementById('inviteLink').value;
    const message = encodeURIComponent(`Hey! Join our 2026 events calendar: ${siteUrl}`);

    // Try SMS URI (works on mobile)
    window.open(`sms:?body=${message}`, '_blank');
    showToast('Opening messages...', 'success');
}

function shareViaWhatsApp() {
    const siteUrl = document.getElementById('inviteLink').value;
    const message = encodeURIComponent(`Hey! I wanted to invite you to our 2026 Culture, Travel & Fun calendar. Click here to join: ${siteUrl}`);

    window.open(`https://wa.me/?text=${message}`, '_blank');
    showToast('Opening WhatsApp...', 'success');
}

// Close invite modal on click outside
document.addEventListener('click', function (e) {
    const modal = document.getElementById('inviteModal');
    if (e.target === modal) {
        closeInviteModal();
    }
});

// Expose functions globally
window.openInviteModal = openInviteModal;
window.closeInviteModal = closeInviteModal;
window.copyInviteLink = copyInviteLink;
window.shareViaEmail = shareViaEmail;
window.shareViaSMS = shareViaSMS;
window.shareViaWhatsApp = shareViaWhatsApp;
