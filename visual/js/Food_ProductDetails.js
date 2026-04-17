/* ═══════════════════════════════════════════════════════
   FOOD PRODUCT DETAILS — JavaScript
   URL Parameter Parsing & Dynamic Rendering
   ═══════════════════════════════════════════════════════ */

// Base Data (Same as AllProducts for consistency)
const foodProducts = [
    { id: 1, name: "Gulab Jamun (12 pcs)", restaurant: "Haldiram's", desc: "Soft, melt-in-your-mouth dumplings made from thickened milk... A festive favorite.", price: 8.99, img: "https://images.unsplash.com/photo-1666190064816-46e0b02d0dd4?q=80&w=800&h=600&fit=crop", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 4.8, reviews: 12400, category: "sweets", veg: true, time: "25 min" },
    { id: 2, name: "Rasmalai Box (6 pcs)", restaurant: "Bikanervala", desc: "Delicate cheese patties soaked in saffron milk.", price: 10.99, img: "https://images.unsplash.com/photo-1601303516990-33a5b60b6a47?q=80&w=800&h=600&fit=crop", rating: 4.9, reviews: 8900, category: "sweets", veg: true, time: "30 min" },
    { id: 3, name: "Chicken Biryani (Family)", restaurant: "Paradise Biryani", desc: "The legendary Hyderabadi Dum Biryani...", price: 18.99, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&h=600&fit=crop", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 4.9, reviews: 45000, category: "spicy", veg: false, time: "35 min" },
    { id: 4, name: "Margherita Pizza (Large)", restaurant: "Domino's", desc: "Classic simplicity. Our hand-tossed crust topped with mozzarella.", price: 11.99, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&h=600&fit=crop", rating: 4.5, reviews: 52000, category: "pizza", veg: true, time: "30 min" },
    { id: 5, name: "Classic Smash Burger", restaurant: "Shake Shack", desc: "100% all-natural Angus beef patty smashed for a crisp sear.", price: 10.99, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&h=600&fit=crop", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 4.7, reviews: 38000, category: "burgers", veg: false, time: "20 min" },
    { id: 6, name: "Mango Lassi (Large)", restaurant: "Lassi Corner", desc: "Creamy yogurt drink blended with sweet Alfonso mangoes.", price: 4.99, img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=800&h=600&fit=crop", rating: 4.6, reviews: 16000, category: "beverages", veg: true, time: "10 min" }
];

function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id')) || 1;
}

function renderProductDetails() {
    const productId = getProductIdFromUrl();
    const product = foodProducts.find(p => p.id === productId) || foodProducts[0];

    // Main Info
    document.getElementById('dish-name').innerText = product.name;
    document.getElementById('rest-name').innerText = product.restaurant;
    document.getElementById('dish-price').innerText = `$${product.price}`;
    document.getElementById('dish-desc').innerText = product.desc;
    document.getElementById('dish-rating').innerHTML = `<i class="fas fa-star"></i> ${product.rating}`;
    document.getElementById('review-count').innerText = `(${product.reviews.toLocaleString()} reviews)`;
    document.getElementById('main-image').src = product.img;

    // Badge logic
    const badge = document.getElementById('dish-badge');
    if (product.rating >= 4.8) {
        badge.innerText = 'Bestseller';
        badge.style.display = 'block';
    } else {
        badge.style.display = 'none';
    }

    // Features
    document.getElementById('prep-time').innerText = product.time || '20 min';
    document.getElementById('diet-pref').innerText = product.veg ? '100% Pure Veg' : 'Non-Vegetarian';
    const dietIcon = document.getElementById('diet-icon');
    dietIcon.className = product.veg ? 'fas fa-leaf' : 'fas fa-drumstick-bite';

    // Thumbnails
    const thumbList = document.getElementById('thumb-list');
    if (thumbList) {
        const demoImgs = [
            product.img,
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=400&h=300&fit=crop"
        ];
        
        thumbList.innerHTML = demoImgs.map((src, index) => `
            <div class="thumb-item ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${src}', this)">
                <img src="${src}" alt="Thumbnail ${index + 1}">
            </div>
        `).join('');
    }

    // Dynamic Video feature
    const videoContainer = document.getElementById('video-container');
    const featureVideo = document.getElementById('feature-video');
    const overlay = document.getElementById('video-overlay');
    if (product.video && videoContainer) {
        featureVideo.src = product.video;
        videoContainer.style.display = 'block';
        featureVideo.pause(); // ensure it starts paused
        if (overlay) overlay.style.display = 'flex';
        featureVideo.controls = false;
    } else if (videoContainer) {
        videoContainer.style.display = 'none';
    }

    // Like button state
    const likeBtn = document.getElementById('like-btn');
    if (likeBtn) {
        let likedItems = JSON.parse(localStorage.getItem('food_liked') || '[]');
        if (likedItems.includes(product.name)) {
            likeBtn.classList.add('liked');
            likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
        }
        
        likeBtn.onclick = () => {
            let liked = JSON.parse(localStorage.getItem('food_liked') || '[]');
            const idx = liked.indexOf(product.name);
            if (idx > -1) {
                liked.splice(idx, 1);
                likeBtn.classList.remove('liked');
                likeBtn.innerHTML = '<i class="far fa-heart"></i>';
            } else {
                liked.push(product.name);
                likeBtn.classList.add('liked');
                likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
            }
            localStorage.setItem('food_liked', JSON.stringify(liked));
        };
    }
}

function changeMainImage(src, element) {
    document.getElementById('main-image').src = src;
    document.querySelectorAll('.thumb-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
}

function playVideo() {
    const video = document.getElementById('feature-video');
    const overlay = document.getElementById('video-overlay');
    if (video) {
        video.controls = true;
        video.play();
        if (overlay) overlay.style.display = 'none';
    }
}

function renderRelatedProducts() {
    const currentId = getProductIdFromUrl();
    const relatedGrid = document.getElementById('related-grid');
    if (!relatedGrid) return;

    // Filter out current product and show 4 random ones
    const related = foodProducts
        .filter(p => p.id !== currentId)
        .slice(0, 4);

    relatedGrid.innerHTML = related.map(item => `
        <div class="food-card" onclick="window.location.href='Food_ProductDetails.html?id=${item.id}'">
            <div class="card-img-wrap" style="height: 160px;">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="card-content">
                <div class="card-title" style="font-size: 1rem;">${item.name}</div>
                <div class="card-restaurant" style="font-size: 0.75rem;">${item.restaurant}</div>
                <div class="card-meta">
                    <span class="card-price" style="font-size: 1rem;">$${item.price}</span>
                    <i class="fas fa-arrow-right" style="color: #E23744;"></i>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderProductDetails();
    renderRelatedProducts();
});

function handleAddToCart() {
    const productId = getProductIdFromUrl();
    const product = foodProducts.find(p => p.id === productId);
    alert(`${product.name} added to your basket!`);
}

function handleOrderNow() {
    renderProductDetails();
    alert('Taking you to checkout...');
}
