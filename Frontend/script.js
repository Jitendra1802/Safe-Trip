/**
 * Safe Trip - Dynamic Frontend Application Script
 * Seamless Dual-Mode: Works with Express API and GitHub Pages Static Fallback
 */

// Fallback dataset for GitHub Pages / Static Hosting when backend is not running
const staticPackagesFallback = [
  {
    title: "Jaipur Weekend",
    slug: "jaipur-weekend",
    destination: "Jaipur, Rajasthan",
    description: "Immerse yourself in royal heritage, grand palaces, vibrant bazaars, and delectable Rajasthani cuisine.",
    duration: "2 Nights / 3 Days",
    price: 4500,
    priceDisplay: "₹4,500",
    priceRange: "low",
    category: "economy",
    rating: 4.5,
    reviewsCount: 128,
    weather: "Sunny",
    weatherIcon: "☀️",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    image: "https://picsum.photos/seed/jaipur/400/250.jpg"
  },
  {
    title: "KedarNath Yatra",
    slug: "kedarnath-yatra",
    destination: "Kedarnath, Uttarakhand",
    description: "Sacred Himalayan pilgrimage to one of the holiest Jyotirlingas, nestled amidst majestic snow-capped peaks.",
    duration: "3 Nights / 4 Days",
    price: 8500,
    priceDisplay: "₹8,500",
    priceRange: "mid",
    category: "economy",
    rating: 4.8,
    reviewsCount: 340,
    weather: "Sunny",
    weatherIcon: "☀️",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    image: "https://picsum.photos/seed/kedarnath-temple-himalaya/400/250.jpg"
  },
  {
    title: "Vaishno Devi Yatra",
    slug: "vaishno-devi-yatra",
    destination: "Katra, Jammu & Kashmir",
    description: "A spiritually uplifting journey to the holy cave shrine of Mata Vaishno Devi in the Trikuta hills.",
    duration: "3 Nights / 4 Days",
    price: 7500,
    priceDisplay: "₹7,500",
    priceRange: "mid",
    category: "economy",
    rating: 4.7,
    reviewsCount: 290,
    weather: "Cool",
    weatherIcon: "⛅",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    image: "https://picsum.photos/seed/vaishno-devi-cave-mata/400/250.jpg"
  },
  {
    title: "Goa Beach Trip",
    slug: "goa-beach-trip",
    destination: "North & South Goa",
    description: "Sun, sand, surf, and vibrant nightlife! Relax on golden beaches, explore Portuguese architecture.",
    duration: "3 Nights / 4 Days",
    price: 8500,
    priceDisplay: "₹8,500",
    priceRange: "mid",
    category: "standard",
    rating: 4.6,
    reviewsCount: 412,
    weather: "Humid",
    weatherIcon: "🌴",
    safetyStatus: "Night travel caution",
    safetyIcon: "⚠️",
    image: "https://picsum.photos/seed/goa/400/250.jpg"
  },
  {
    title: "Ooty",
    slug: "ooty",
    destination: "Ooty & Coonoor, Tamil Nadu",
    description: "The Queen of Hill Stations! Rolling tea estates, cool misty mountain breeze, and heritage toy train ride.",
    duration: "2 Nights / 3 Days",
    price: 20000,
    priceDisplay: "₹20,000",
    priceRange: "high",
    category: "standard",
    rating: 4.9,
    reviewsCount: 165,
    weather: "Sunny",
    weatherIcon: "☀️",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    image: "https://picsum.photos/seed/ooty/400/250.jpg"
  },
  {
    title: "Kashmir Premium Tour",
    slug: "kashmir-premium-tour",
    destination: "Srinagar, Gulmarg & Pahalgam",
    description: "Paradise on Earth! Traditional houseboat stay on Dal Lake, gondola ride in snow-clad Gulmarg.",
    duration: "5 Nights / 6 Days",
    price: 50000,
    priceDisplay: "₹50,000",
    priceRange: "high",
    category: "standard",
    rating: 4.7,
    reviewsCount: 220,
    weather: "Snowfall",
    weatherIcon: "❄️",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    image: "https://picsum.photos/seed/kashmir/400/250.jpg"
  },
  {
    title: "Ladakh",
    slug: "ladakh",
    destination: "Leh, Pangong & Nubra Valley",
    description: "Rugged trans-Himalayan landscapes, azure high-altitude lakes, ancient Buddhist monasteries.",
    duration: "2 Nights / 3 Days",
    price: 10000,
    priceDisplay: "₹10,000",
    priceRange: "high",
    category: "standard",
    rating: 4.8,
    reviewsCount: 180,
    weather: "Cool",
    weatherIcon: "⛅",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    image: "https://picsum.photos/seed/ladakh-monastery-buddhist/400/250.jpg"
  },
  {
    title: "London Premium Trip",
    slug: "london-premium-trip",
    destination: "London, United Kingdom",
    description: "Experience iconic global landmarks: Big Ben, Tower Bridge, Buckingham Palace, Thames river cruise.",
    duration: "3 Nights / 4 Days",
    price: 75000,
    priceDisplay: "₹75,000",
    priceRange: "premium",
    category: "premium",
    rating: 5.0,
    reviewsCount: 95,
    weather: "Cool",
    weatherIcon: "⛅",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    image: "https://picsum.photos/seed/london-big-ben-parliament/400/250.jpg"
  },
  {
    title: "Manali Premium Trip",
    slug: "manali-premium-trip",
    destination: "Manali & Solang Valley, Himachal Pradesh",
    description: "Snow adventures, cedar pine forests, Beas River rafting, hot springs, and breathtaking mountain views.",
    duration: "2 Nights / 3 Days",
    price: 20000,
    priceDisplay: "₹20,000",
    priceRange: "high",
    category: "premium",
    rating: 4.4,
    reviewsCount: 310,
    weather: "Sunny",
    weatherIcon: "☀️",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    image: "https://picsum.photos/seed/manali-rohtang-pass-mountains/400/250.jpg"
  }
];

let packagesData = [];
let wishlist = JSON.parse(localStorage.getItem('safeTripWishlist') || '[]');

// DOM Elements
let dealsGrid;
let priceFilter;
let categoryFilter;
let sortFilter;
let searchInput;
let packageCountEl;
let wishlistCountEl;

function initDOMElements() {
  dealsGrid = document.getElementById("dealsGrid");
  priceFilter = document.getElementById("priceFilter");
  categoryFilter = document.getElementById("categoryFilter");
  sortFilter = document.getElementById("sortFilter");
  searchInput = document.getElementById("searchInput");
  packageCountEl = document.getElementById("packageCount");
  wishlistCountEl = document.getElementById("wishlistCount");
}

// Initialize Application
function initApp() {
  initDOMElements();
  initNavigation();
  initWishlistUI();
  fetchPackages();
  attachFilterListeners();
}

if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// Mobile Navigation
function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

// Fetch Packages with API & Static Fallback
async function fetchPackages() {
  if (!dealsGrid) return;

  dealsGrid.innerHTML = `
    <div class="loading-state">
      <div class="spinner"></div>
      <p>Discovering verified travel packages...</p>
    </div>
  `;

  try {
    const res = await fetch('/api/packages');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const result = await res.json();

    if (result.success && Array.isArray(result.data) && result.data.length > 0) {
      packagesData = result.data;
    } else {
      packagesData = staticPackagesFallback;
    }
  } catch (error) {
    console.info('Running in static/fallback mode with client data:', error.message);
    packagesData = staticPackagesFallback;
  }

  applyFilters();
}

// Attach filter change listeners
function attachFilterListeners() {
  if (priceFilter) priceFilter.addEventListener("change", applyFilters);
  if (categoryFilter) categoryFilter.addEventListener("change", applyFilters);
  if (sortFilter) sortFilter.addEventListener("change", applyFilters);
  if (searchInput) {
    let timeout = null;
    searchInput.addEventListener("input", () => {
      clearTimeout(timeout);
      timeout = setTimeout(applyFilters, 200);
    });
  }
}

// Filter and Sort Logic
function applyFilters() {
  if (!dealsGrid) return;

  const selectedPrice = priceFilter ? priceFilter.value : "all";
  const selectedCategory = categoryFilter ? categoryFilter.value : "all";
  const selectedSort = sortFilter ? sortFilter.value : "default";
  const searchText = searchInput ? searchInput.value.trim().toLowerCase() : "";

  let filtered = packagesData.filter(pkg => {
    // Price match
    let priceMatch = true;
    if (selectedPrice !== "all") {
      if (pkg.priceRange) {
        priceMatch = (pkg.priceRange === selectedPrice);
      } else {
        const p = pkg.price;
        if (selectedPrice === "low") priceMatch = (p < 5000);
        else if (selectedPrice === "mid") priceMatch = (p >= 5000 && p <= 10000);
        else if (selectedPrice === "high") priceMatch = (p > 10000 && p <= 50000);
        else if (selectedPrice === "premium") priceMatch = (p > 50000);
      }
    }

    // Category match
    const categoryMatch = selectedCategory === "all" || 
      (pkg.category && pkg.category.toLowerCase() === selectedCategory.toLowerCase());

    // Search match
    const titleMatch = pkg.title.toLowerCase().includes(searchText);
    const destinationMatch = pkg.destination ? pkg.destination.toLowerCase().includes(searchText) : false;
    const descMatch = pkg.description ? pkg.description.toLowerCase().includes(searchText) : false;
    const searchMatch = !searchText || titleMatch || destinationMatch || descMatch;

    return priceMatch && categoryMatch && searchMatch;
  });

  // Sorting
  if (selectedSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "rating") {
    filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  renderPackages(filtered);
}


// Helper for card subtitle matching the design
function getTripSubtitle(pkg) {
  const nights = pkg.duration ? pkg.duration.split('/')[0].trim() : '2 Nights';
  if (pkg.title.includes('Jaipur') || pkg.title.includes('Ooty') || pkg.title.includes('Manali')) {
    return `${nights}, Hotel & Food Included`;
  }
  if (pkg.title.includes('KedarNath') || pkg.title.includes('Goa')) {
    return `${nights}, Flight + Hotel`;
  }
  if (pkg.title.includes('Vaishno') || pkg.title.includes('London')) {
    return `${nights}, Train + Hotel`;
  }
  if (pkg.title.includes('Kashmir')) {
    return `${nights}, Luxury Stay + Flight`;
  }
  return `${nights}, Hotel & Transport Included`;
}

// Render Packages Cards (4 cards in a row)
function renderPackages(packages) {
  if (!dealsGrid) return;

  if (packageCountEl) {
    packageCountEl.textContent = `Showing ${packages.length} package${packages.length === 1 ? '' : 's'}`;
  }

  if (packages.length === 0) {
    dealsGrid.innerHTML = `
      <div class="empty-state">
        <p style="font-size: 2.5rem; margin-bottom: 12px;">🗺️</p>
        <h3>No travel packages found</h3>
        <p>Try clearing or modifying your search and filter criteria.</p>
      </div>
    `;
    return;
  }

  dealsGrid.innerHTML = packages.map(pkg => {
    const isWishlisted = wishlist.includes(pkg.slug || pkg.title);
    const safetyIsZone = (pkg.safetyStatus || 'Safe Zone').includes('Safe');
    const safetyIcon = pkg.safetyIcon || (safetyIsZone ? '✅' : '⚠️');
    const weatherIcon = pkg.weatherIcon || '☀️';
    const idParam = encodeURIComponent(pkg.slug || pkg.title);
    const subtitle = getTripSubtitle(pkg);
    const weatherText = pkg.weather ? (pkg.weather.includes(',') ? pkg.weather.split(',')[0].trim() : pkg.weather) : 'Sunny';

    return `
      <div class="card" data-slug="${pkg.slug || ''}" data-category="${pkg.category || 'standard'}">
        <div class="card-image">
          <img src="${pkg.image}" alt="${pkg.title}" loading="lazy" onerror="this.src='https://picsum.photos/400/250.jpg'">
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${pkg.slug || pkg.title}', event)" 
                  title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            ${isWishlisted ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="card-content">
          <h3>${pkg.title}</h3>
          <p class="trip-features">${subtitle}</p>
          <div class="rating">⭐ ${pkg.rating || 4.5}</div>
          <p class="price">${pkg.priceDisplay || ('₹' + (pkg.price || 0).toLocaleString('en-IN'))}</p>
          <p class="info-line">Weather: ${weatherIcon} ${weatherText}</p>
          <p class="info-line">Safety: ${safetyIcon} ${pkg.safetyStatus || 'Safe Zone'}</p>
          <div class="card-actions">
            <button class="details-btn" onclick="showDetails('${idParam}')">View Details</button>
            <button class="book-btn" onclick="bookTrip('${encodeURIComponent(pkg.title)}')">Book Now</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Navigation Actions
function showDetails(identifier) {
  window.location.href = `details.html?trip=${identifier}`;
}

function bookTrip(tripName) {
  window.location.href = `booking.html?trip=${tripName}`;
}

// Wishlist Functionality
function toggleWishlist(identifier, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }

  const index = wishlist.indexOf(identifier);
  let added = false;

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed from wishlist`, 'info');
  } else {
    wishlist.push(identifier);
    added = true;
    showToast(`Added to wishlist! ❤️`, 'success');
  }

  localStorage.setItem('safeTripWishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  applyFilters(); // refresh heart states
}

function updateWishlistUI() {
  if (wishlistCountEl) {
    wishlistCountEl.textContent = wishlist.length;
  }
}

function initWishlistUI() {
  updateWishlistUI();

  const counterBtn = document.querySelector('.wishlist-counter');
  if (counterBtn) {
    counterBtn.addEventListener('click', () => {
      openWishlistModal();
    });
  }
}

function openWishlistModal() {
  const modal = document.getElementById('detailsModal');
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalBody) return;

  const wishlistedItems = packagesData.filter(p => wishlist.includes(p.slug || p.title));

  if (wishlistedItems.length === 0) {
    modalBody.innerHTML = `
      <div style="text-align: center; padding: 30px 10px;">
        <span style="font-size: 3rem;">🤍</span>
        <h3 style="margin: 16px 0 8px;">Your Wishlist is Empty</h3>
        <p style="color: #64748b; margin-bottom: 20px;">Explore our destinations and click the heart icon to save your favorite packages!</p>
        <button class="btn book-btn" onclick="closeModal()">Explore Packages</button>
      </div>
    `;
  } else {
    modalBody.innerHTML = `
      <h3 style="margin-bottom: 16px; color: #0f172a;">❤️ Your Saved Packages (${wishlistedItems.length})</h3>
      <div style="display: flex; flex-direction: column; gap: 14px; max-height: 60vh; overflow-y: auto;">
        ${wishlistedItems.map(item => `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; gap: 12px;">
            <img src="${item.image}" alt="${item.title}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px;">
            <div style="flex: 1;">
              <h4 style="margin: 0; font-size: 1rem;">${item.title}</h4>
              <p style="margin: 2px 0 0; color: #0284c7; font-weight: 700;">${item.priceDisplay || ('₹' + item.price.toLocaleString('en-IN'))}</p>
            </div>
            <button class="btn book-btn" style="padding: 6px 12px; font-size: 0.85rem;" onclick="bookTrip('${encodeURIComponent(item.title)}')">Book</button>
            <button style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: #ef4444;" onclick="toggleWishlist('${item.slug || item.title}'); openWishlistModal();">🗑️</button>
          </div>
        `).join('')}
      </div>
    `;
  }

  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('detailsModal');
  if (modal) modal.classList.remove('active');
}

// Toast Notification Helper
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
