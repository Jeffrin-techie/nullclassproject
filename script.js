// Language change function
function changeLanguage() {
    const lang = document.getElementById('languageSelector').value;
    const elements = document.querySelectorAll('[data-' + lang + ']');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-' + lang);
        element.textContent = key;
    });
}



// Show the booking form for Bus or Cab
function showBookingForm(type) {
    // Hide both forms initially
    document.getElementById('busOptions').style.display = 'none';
    document.getElementById('cabOptions').style.display = 'none';

    // Show the booking form
    document.getElementById('bookingForm').style.display = 'block';

    // Toggle based on the type (bus or cab)
    if (type === 'bus') {
        document.getElementById('busOptions').style.display = 'block';
        document.getElementById('cabOptions').style.display = 'none';
    } else if (type === 'cab') {
        document.getElementById('busOptions').style.display = 'none';
        document.getElementById('cabOptions').style.display = 'block';
    }
}
const translations = {
    login: {
      en: "Login",
      hi: "लॉग इन करें",
      te: "ప్రవేశించండి",
      ml: "ലോഗിൻ ചെയ്യുക",
      ta: "உள்நுழைய",
      de: "Anmelden",
      tr: "Giriş Yap",
      zh: "登录",
      ja: "ログイン"
    },
    amenities: {
      en: "Amenities",
      hi: "सुविधाएं",
      te: "సౌకర్యాలు",
      ml: "സൗകര്യങ്ങൾ",
      ta: "வசதிகள்",
      de: "Annehmlichkeiten",
      tr: "İmkanlar",
      zh: "设施",
      ja: "設備"
    },
    bookBus: {
      en: "Book a Bus",
      hi: "बस बुक करें",
      te: "బస్ బుక్ చేయండి",
      ml: "ബസ് ബുക്ക് ചെയ്യുക",
      ta: "பேருந்து பதிவு செய்யுங்கள்",
      de: "Bus buchen",
      tr: "Otobüs Rezervasyonu Yapın",
      zh: "预订巴士",
      ja: "バスを予約する"
    }
  };
  
  
// Handle Booking Submission
function submitBooking() {
    const selectedRoute = document.getElementById('customRoute').value;
    if (selectedRoute.trim() === '') {
        alert('Please enter a custom route');
        return;
    }

    // Capture bus or cab details if needed (example for bus)
    const busSize = document.getElementById('busSize').value;
    const amenities = [];
    if (document.getElementById('wifi').checked) amenities.push('WiFi');
    if (document.getElementById('ac').checked) amenities.push('AC');
    if (document.getElementById('tv').checked) amenities.push('TV');

    alert(`Booking Submitted! \nRoute: ${selectedRoute} \nBus Size: ${busSize} \nAmenities: ${amenities.join(', ')}`);
}

// Login and Review Submission
let isLoggedIn = false;

function login() {
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        alert('Please enter a username');
        return;
    }
    isLoggedIn = true;
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('reviewSection').style.display = 'block';
}

function submitReview() {
    const reviewText = document.getElementById('reviewText').value;
    if (reviewText.trim() === '') {
        alert('Please write a review');
        return;
    }

    alert(`Review Submitted! \nReview: ${reviewText}`);
}

// Star Rating Function
function submitStarRating(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = '#ffcc00';  // Highlight stars up to the selected rating
        } else {
            star.style.color = '';  // Reset color for unselected stars
        }
    });
    alert(`You rated ${rating} stars!`);
}

// Rating Thumbs Up/Down Function
function submitRating(rating) {
    const message = rating === 1 ? 'You rated this positively' : 'You rated this negatively';
    alert(message);
}
