# 🌍 Safe Trip — Full-Stack Travel Booking & Weather-Smart Platform

[![Node.js](https://img.shields.io/badge/Node.js-v22+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.21+-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas%20%2F%20Mongoose-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Frontend](https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20ES6+-E34F26?logo=javascript&logoColor=white)](https://developer.mozilla.org/)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success)]()

**Safe Trip** is a modern, responsive full-stack travel web application designed to help travelers discover, explore, and book safe, verified, and weather-smart travel packages across domestic and international destinations.

---

## 🌐 Live Demo

* **Frontend Demo (GitHub Pages):** [https://jitendra1802.github.io/Safe-Trip/](https://jitendra1802.github.io/Safe-Trip/)
* **Local Full-Stack Server:** `http://localhost:5000`

---

## ✨ Features

### 💻 Modern Frontend Experience
* 🏠 **Curated Travel Showcase:** Discover top-tier domestic and global vacation packages with high-resolution imagery and clear pricing.
* 🔍 **Real-Time Live Search:** Debounced instant search by destination, package title, or highlights.
* 💰 **Multi-Tier Price Filter:** Filter by Budget (< ₹5,000), Mid-range (₹5,000 - ₹10,000), Popular (₹10,000 - ₹50,000), or Luxury (₹50,000+).
* 🏷️ **Category Filtering:** Filter packages by *Economy*, *Standard*, and *Premium* tiers.
* ↕️ **Smart Sorting:** Sort packages instantly by Price (Low to High / High to Low) or Traveler Ratings.
* 🛡️ **Safety Zone & Ground Intel:** Live safety status chips (`Safe Zone`, `Night Caution`, `Advisories`) for every destination.
* ☀️ **Weather-Smart Indicators:** Real-time weather highlights (e.g. `Sunny, 28°C`, `Snow, 6°C`) to assist informed trip planning.
* ❤️ **Interactive Wishlist System:** Save packages locally with persistent `localStorage` storage, floating counter badge, and wishlist drawer.
* 📋 **Comprehensive Package Details Page:** Dedicated page with day-by-day itineraries, inclusions & exclusions side-by-side, advisory boxes, and sticky booking cards.
* 📅 **Dynamic Booking Calculator:** Interactive traveler count and room tier multipliers (Standard, Deluxe, Suite, Villa) with 18% GST auto-calculation.
* 🧾 **Instant Booking Confirmation:** Digital confirmation receipt modal displaying unique booking reference code (e.g., `ST-2026-VYVLW`) and print-ready summary.
* 📱 **Fully Responsive:** Seamlessly optimized for mobile, tablet, and desktop viewports with animated hamburger navigation.

### ⚙️ Robust Backend & REST API
* 🚀 **Express.js Server:** Clean, modular MVC architecture with JSON body parsing, CORS support, and static file hosting.
* 🍃 **MongoDB & Mongoose Integration:** Fully modeled schemas for `Package`, `Booking`, and `Contact`.
* 🔄 **Dual-Mode Zero-Config Fallback:** If MongoDB Atlas is offline or credentials are not yet set, the server seamlessly switches to an in-memory dataset so the entire web application and API remain 100% operational without crashing!
* 🌱 **Automated Database Seeder:** One-command database population script with realistic travel packages and Unsplash travel photography.
* 🛡️ **Input Validation & Calculation:** Automatic tax, multiplier, and total price validation on the server side.

---

## 🛠️ Tech Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | HTML5, Modern CSS3 (CSS Variables, Flexbox, CSS Grid, Backdrop Filter), ES6+ JavaScript |
| **Backend** | Node.js (v22+), Express.js (v4.21+) |
| **Database** | MongoDB / MongoDB Atlas, Mongoose ODM (v8.9+) |
| **Utilities** | `dotenv` (Environment Config), `cors` (Cross-Origin Resource Sharing), `nodemon` (Hot Reload) |

---

## 📁 Project Structure

```text
Safe-Trip/
├── controllers/              # Request handlers (MVC Controller layer)
│   ├── bookingController.js  # Booking creation, price calculation & lookup
│   ├── contactController.js  # Contact form handling
│   └── packageController.js  # Package queries, filters, and detail lookups
├── data/
│   └── packagesData.js       # Curated packages seed & fallback dataset
├── models/                   # Mongoose schemas
│   ├── Booking.js            # Booking schema with auto-generated reference IDs
│   ├── Contact.js            # Contact messages schema
│   └── Package.js            # Comprehensive travel package schema
├── routes/                   # Express REST API routes
│   ├── bookingRoutes.js      # /api/bookings endpoints
│   ├── contactRoutes.js      # /api/contact endpoints
│   └── packageRoutes.js      # /api/packages endpoints
├── .env.example              # Environment variables template
├── .env                      # Local environment configuration
├── about.html                # About Safe Trip & company vision
├── booking.html              # Dynamic booking page with live calculator
├── contact.html              # Contact support page connected to API
├── details.html              # Detailed package view with itinerary
├── faq.html                  # Frequently asked travel questions
├── index.html                # Main homepage with deals grid & filters
├── package.json              # Node.js project manifest & scripts
├── script.js                 # Dynamic client-side application logic
├── seed.js                   # Database seed script
├── server.js                 # Express server & static asset host
├── style.css                 # Unified modern travel portal stylesheet
└── testimonials.html         # Verified traveler reviews & feedback
```

---

## 🚀 Quick Start & Installation

### 1. Prerequisites
* [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
* [npm](https://www.npmjs.com/) (installed with Node)
* Optional: Local [MongoDB](https://www.mongodb.com/try/download/community) instance or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster.

### 2. Clone the Repository
```bash
git clone https://github.com/jitendra1802/Safe-Trip.git
cd Safe-Trip
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the root directory (or copy from `.env.example`):
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/safetrip
NODE_ENV=development
```
> **Tip for MongoDB Atlas:** Replace `MONGODB_URI` with your Atlas connection string:
> `mongodb+srv://<username>:<password>@cluster0.mongodb.net/safetrip?retryWrites=true&w=majority`
> *Note:* If MongoDB is not running, the application will automatically run in **In-Memory fallback mode** with zero configuration required!

### 5. Seed the Database
Populate your database with curated travel packages, itineraries, and high-resolution images:
```bash
npm run seed
```

### 6. Start the Application
* **Development Mode (with auto-restart via nodemon):**
  ```bash
  npm run dev
  ```
* **Production Mode:**
  ```bash
  npm start
  ```

Open your browser and navigate to:
👉 **[http://localhost:5000](http://localhost:5000)**

---

## 📡 REST API Documentation

### 1. Travel Packages

| Method | Endpoint | Description | Query Parameters |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/packages` | List all travel packages | `search`, `category`, `priceRange`, `sort` |
| `GET` | `/api/packages/:identifier` | Get single package details | `:identifier` can be slug or ObjectId |
| `POST` | `/api/packages` | Create a new package (Admin) | Package JSON body |

#### Example Request:
```http
GET /api/packages?category=economy&priceRange=mid&sort=price-low
```

#### Example Response:
```json
{
  "success": true,
  "count": 2,
  "source": "database",
  "data": [
    {
      "_id": "6aaebde1777665ee566036b1",
      "title": "Vaishno Devi Yatra",
      "slug": "vaishno-devi-yatra",
      "destination": "Katra, Jammu & Kashmir",
      "duration": "3 Nights / 4 Days",
      "price": 7500,
      "priceDisplay": "₹7,500",
      "category": "economy",
      "rating": 4.7,
      "weather": "Pleasant, 18°C",
      "safetyStatus": "Safe Zone",
      "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa..."
    }
  ]
}
```

---

### 2. Bookings

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/bookings` | Create and confirm a new trip booking |
| `GET` | `/api/bookings` | Retrieve recent bookings (optional `?email=...`) |

#### Example Request:
```http
POST /api/bookings
Content-Type: application/json

{
  "fullName": "Aarav Sharma",
  "email": "aarav@example.com",
  "phone": "+91 9876543210",
  "tripName": "Jaipur Weekend",
  "travelDate": "2026-10-15",
  "travelers": 2,
  "accommodation": "deluxe",
  "specialRequests": "Airport pickup required"
}
```

#### Example Response:
```json
{
  "success": true,
  "message": "Booking confirmed successfully!",
  "data": {
    "bookingReference": "ST-2026-VYVLW",
    "tripName": "Jaipur Weekend",
    "fullName": "Aarav Sharma",
    "email": "aarav@example.com",
    "phone": "+91 9876543210",
    "travelers": 2,
    "accommodation": "deluxe",
    "basePrice": 13500,
    "taxes": 2430,
    "totalPrice": 15930,
    "status": "confirmed"
  }
}
```

---

### 3. Contact Inquiries

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/contact` | Submit traveler inquiry message |

#### Example Request:
```http
POST /api/contact
Content-Type: application/json

{
  "name": "Rohan Gupta",
  "email": "rohan@example.com",
  "phone": "9812345678",
  "subject": "Custom Group Booking",
  "message": "We have a team of 15 members looking for a weekend retreat in Goa."
}
```

---

### 4. System Health

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Server status and database connectivity check |

---

## ☁️ Deployment Guide

### Deploying the Backend to Cloud (Render / Railway)
1. Push your repository to GitHub.
2. In [Render](https://render.com/) or [Railway](https://railway.app/), create a new **Web Service**.
3. Set the build command: `npm install`
4. Set the start command: `npm start`
5. Add the environment variables:
   * `PORT`: `5000` (or leave default assigned by provider)
   * `MONGODB_URI`: Your MongoDB Atlas connection URI
   * `NODE_ENV`: `production`
6. (Optional) Run `node seed.js` in the deployment console to populate packages.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - feel free to use and adapt it for your own travel projects.
