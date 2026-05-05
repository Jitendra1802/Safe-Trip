// Redirect to booking page
function bookTrip(tripName) {
    window.location.href =
        "booking.html?trip=" + encodeURIComponent(tripName);
}
