/* ═══════════════════════════════════════════════════════
   FOOD ALL PRODUCTS — JavaScript
   Filtering, Sorting, and Grid Rendering
   ═══════════════════════════════════════════════════════ */

// Base Data (Derived from Food.js)
const foodProducts = [
    { id: 1, name: "Gulab Jamun (12 pcs)", restaurant: "Haldiram's", price: 8.99, img: "https://images.unsplash.com/photo-1666190064816-46e0b02d0dd4?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 12400, category: "sweets", veg: true, time: "25 min" },
    { id: 2, name: "Rasmalai Box (6 pcs)", restaurant: "Bikanervala", price: 10.99, img: "https://images.unsplash.com/photo-1601303516990-33a5b60b6a47?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 8900, category: "sweets", veg: true, time: "30 min" },
    { id: 3, name: "Chicken Biryani (Family)", restaurant: "Paradise Biryani", price: 18.99, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 45000, category: "spicy", veg: false, time: "35 min" },
    { id: 4, name: "Margherita Pizza (Large)", restaurant: "Domino's", price: 11.99, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=400&h=300&fit=crop", rating: 4.5, reviews: 52000, category: "pizza", veg: true, time: "30 min" },
    { id: 5, name: "Classic Smash Burger", restaurant: "Shake Shack", price: 10.99, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 38000, category: "burgers", veg: false, time: "20 min" },
    { id: 6, name: "Mango Lassi (Large)", restaurant: "Lassi Corner", price: 4.99, img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 16000, category: "beverages", veg: true, time: "10 min" },
    { id: 7, name: "Quinoa Buddha Bowl", restaurant: "The Green Kitchen", price: 12.99, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 9200, category: "healthy", veg: true, time: "20 min" },
    { id: 8, name: "Kung Pao Chicken", restaurant: "Wok & Roll", price: 13.99, img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 14000, category: "chinese", veg: false, time: "25 min" },
    { id: 9, name: "Brownie Sundae", restaurant: "Baskin Robbins", price: 8.99, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 19000, category: "desserts", veg: true, time: "15 min" },
    { id: 10, name: "Masala Dosa Combo", restaurant: "A2B", price: 6.99, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 28000, category: "breakfast", veg: true, time: "20 min" },
    { id: 11, name: "Paneer Tikka Masala", restaurant: "Punjab Grill", price: 13.99, img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 18200, category: "spicy", veg: true, time: "30 min" },
    { id: 12, name: "BBQ Chicken Pizza", restaurant: "Pizza Hut", price: 15.99, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 34000, category: "pizza", veg: false, time: "35 min" },
    { id: 13, name: "Veg Crunch Burger", restaurant: "Burger Singh", price: 7.99, img: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=400&h=300&fit=crop", rating: 4.4, reviews: 14000, category: "burgers", veg: true, time: "15 min" },
    { id: 14, name: "Cold Brew Coffee", restaurant: "Blue Tokai", price: 5.49, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 12000, category: "beverages", veg: true, time: "10 min" },
    { id: 15, name: "Dim Sum Basket (8 pcs)", restaurant: "Yauatcha", price: 16.99, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 9600, category: "chinese", veg: false, time: "30 min" },
    { id: 16, name: "Cheesecake New York Style", restaurant: "The Cheesecake Factory", price: 12.99, img: "https://images.unsplash.com/photo-1524351199432-4b67b7a8a554?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 25000, category: "desserts", veg: true, time: "15 min" }
];

let currentFilter = 'all';
let currentSort = 'featured';

function renderProducts() {
    const grid = document.getElementById('products-grid');
    const resultsCount = document.getElementById('results-count');
    if (!grid) return;

    let filtered = foodProducts.filter(p => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'veg') return p.veg;
        if (currentFilter === 'non-veg') return !p.veg;
        return p.category === currentFilter;
    });

    if (currentSort === 'price-low') filtered.sort((a,b) => a.price - b.price);
    else if (currentSort === 'price-high') filtered.sort((a,b) => b.price - a.price);
    else if (currentSort === 'rating') filtered.sort((a,b) => b.rating - a.rating);

    resultsCount.innerText = filtered.length;

    grid.innerHTML = filtered.map(item => `
        <div class="food-card" onclick="window.location.href='Food_ProductDetails.html?id=${item.id}'">
            <div class="card-img-wrap">
                <img src="${item.img}" alt="${item.name}">
                <div class="${item.veg ? 'veg-mark' : 'non-veg-mark'}"></div>
            </div>
            <div class="card-content">
                <div class="card-title">${item.name}</div>
                <div class="card-restaurant">${item.restaurant}</div>
                <div class="card-meta">
                    <span class="card-rating"><i class="fas fa-star"></i> ${item.rating}</span>
                    <span class="card-price">$${item.price}</span>
                    <button class="add-btn" onclick="event.stopPropagation(); addToCart('${item.name}', ${item.price})">ADD</button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    renderProducts();
}

function updateSort(sort) {
    currentSort = sort;
    renderProducts();
}

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('urbanmart_cart') || '[]');
    cart.push({ name, price, quantity: 1, category: 'Food' });
    localStorage.setItem('urbanmart_cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
    
    // Also try to update badge if there is one on the nav
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.textContent = cart.length;
        badge.style.display = cart.length > 0 ? 'flex' : 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderProducts();
    initBackToTop();
    initCustomDropdown();

    // Filter button listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => updateFilter(btn.dataset.filter));
    });
});

// --- Back to Top Button ---
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Custom Dropdown Logic ---
function initCustomDropdown() {
    const dropdown = document.getElementById('sort-dropdown');
    const trigger = document.getElementById('dropdown-trigger');
    const menu = document.getElementById('dropdown-menu');
    const label = document.getElementById('dropdown-label');
    const backdrop = document.getElementById('dropdown-backdrop');
    const items = menu ? menu.querySelectorAll('.dropdown-item') : [];

    if (!dropdown || !trigger || !menu) return;

    function openDropdown() {
        dropdown.classList.add('open');
        if (backdrop) backdrop.classList.add('visible');
    }

    function closeDropdown() {
        dropdown.classList.remove('open');
        if (backdrop) backdrop.classList.remove('visible');
    }

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
    });

    if (backdrop) {
        backdrop.addEventListener('click', closeDropdown);
    }

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) closeDropdown();
    });

    // Keyboard: Escape to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDropdown();
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            const value = item.dataset.value;
            const text = item.querySelector('span').textContent;
            
            // Update label
            label.textContent = 'Sort: ' + text;

            // Update active state
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Close dropdown
            closeDropdown();

            // Trigger sort
            updateSort(value);
        });
    });
}
