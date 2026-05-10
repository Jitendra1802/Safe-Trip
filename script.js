// Redirect to booking page
function bookTrip(tripName) {
    window.location.href =
        "booking.html?trip=" + encodeURIComponent(tripName);
}
const priceFilter = document.getElementById("priceFilter");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const searchInput = document.getElementById("searchInput");

const dealsGrid = document.getElementById("dealsGrid");
const cards = Array.from(document.querySelectorAll(".card"));


// Apply filters whenever dropdown changes
priceFilter.addEventListener("change", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
sortFilter.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);


function applyFilters() {

    const selectedPrice = priceFilter.value;
    const selectedCategory = categoryFilter.value;
    const selectedSort = sortFilter.value;
    const searchText = searchInput.value.toLowerCase();

    // FILTERING
    let filteredCards = cards.filter(card => {

        const price = card.dataset.price;
        const category = card.dataset.category;
        const title = card.querySelector("h3").innerText.toLowerCase();

        const priceMatch =
            selectedPrice === "all" || price === selectedPrice;

        const categoryMatch =
            selectedCategory === "all" || category === selectedCategory;

        const searchMatch =
            title.includes(searchText);

        return priceMatch && categoryMatch && searchMatch;
    });


    // SORTING
    if (selectedSort === "price-low") {

        filteredCards.sort((a, b) => {
            return getPrice(a) - getPrice(b);
        });

    } else if (selectedSort === "price-high") {

        filteredCards.sort((a, b) => {
            return getPrice(b) - getPrice(a);
        });

    } else if (selectedSort === "rating") {

        filteredCards.sort((a, b) => {
            return b.dataset.rating - a.dataset.rating;
        });
    }


    // CLEAR GRID
    dealsGrid.innerHTML = "";

    // SHOW FILTERED + SORTED CARDS
    filteredCards.forEach(card => {
        dealsGrid.appendChild(card);
    });
}


// Helper function to extract numeric price
function getPrice(card) {

    const priceText = card.querySelector(".price").innerText;

    return parseInt(
        priceText.replace(/[₹,]/g, "")
    );
}
