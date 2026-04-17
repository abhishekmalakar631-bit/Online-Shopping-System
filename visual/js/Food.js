/* ═══════════════════════════════════════════════════════
   FOOD PAGE — JavaScript
   Hero Carousel, Dynamic Categories, Cart, Ratings
   ═══════════════════════════════════════════════════════ */

// ── Hero Carousel Data ─────────────────────────────────
const heroSlides = [
    {
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&h=600&fit=crop",
        badge: "🔥 Trending Now",
        title: "Flavours That Make You Crave More",
        desc: "Order from 500+ top restaurants near you. Lightning-fast delivery, zero hassle.",
        cta: "Order Now",
        ctaLink: "#shop"
    },
    {
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1400&h=600&fit=crop",
        badge: "🍕 FLAT 60% OFF",
        title: "Pizza Fest Is Live!",
        desc: "Wood-fired, cheesy, loaded — grab your favorite pizza at unbelievable prices.",
        cta: "Grab The Deal",
        ctaLink: "#deals"
    },
    {
        img: "https://images.unsplash.com/photo-1495474472207-464a51ebc2cc?q=80&w=1400&h=600&fit=crop",
        badge: "🥞 Breakfast Specials",
        title: "Start Your Morning Right",
        desc: "Pancakes, waffles, smoothie bowls & more — delivered hot to your door.",
        cta: "Explore Breakfast",
        ctaLink: "#breakfast"
    },
    {
        img: "https://images.unsplash.com/photo-1544025162-83da70b77cc2?q=80&w=1400&h=600&fit=crop",
        badge: "🍗 Non-Veg Festival",
        title: "Grilled, Fried & Sizzling",
        desc: "Juicy chicken wings, smoky kebabs, tender steaks — all in one place.",
        cta: "Order Meats",
        ctaLink: "#nonveg"
    },
    {
        img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1400&h=600&fit=crop",
        badge: "🌿 Healthy Choices",
        title: "Eat Clean, Feel Great",
        desc: "Curated salads, grain bowls & fresh juices for the health-conscious foodie.",
        cta: "Eat Healthy",
        ctaLink: "#healthy"
    }
];

// ── Food Products Database ─────────────────────────────
const foodProducts = {
    sweets: [
        { name: "Gulab Jamun (12 pcs)", restaurant: "Haldiram's", price: 8.99, originalPrice: 12.99, img: "https://images.unsplash.com/photo-1666190064816-46e0b02d0dd4?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 12400, badge: "Bestseller", veg: true, time: "25 min", cuisine: "Indian Sweets" },
        { name: "Rasmalai Box (6 pcs)", restaurant: "Bikanervala", price: 10.99, originalPrice: 15.99, img: "https://images.unsplash.com/photo-1601303516990-33a5b60b6a47?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 8900, badge: "Top Rated", veg: true, time: "30 min", cuisine: "Indian Sweets" },
        { name: "Belgian Chocolate Cake", restaurant: "The Cheesecake Factory", price: 24.99, originalPrice: 34.99, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 15600, badge: "Premium", veg: true, time: "35 min", cuisine: "Bakery" },
        { name: "Classic Tiramisu", restaurant: "Italian Kitchen", price: 12.99, img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 6700, badge: "", veg: true, time: "20 min", cuisine: "Italian" },
        { name: "Mango Kulfi (4 pcs)", restaurant: "Naturals", price: 7.49, originalPrice: 9.99, img: "https://images.unsplash.com/photo-1615478503562-ec2d8aa0a24e?q=80&w=400&h=300&fit=crop", rating: 4.5, reviews: 9800, badge: "Summer Special", veg: true, time: "20 min", cuisine: "Indian" },
        { name: "Red Velvet Cupcakes (6)", restaurant: "Magnolia Bakery", price: 14.99, img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 4200, badge: "", veg: true, time: "25 min", cuisine: "Bakery" }
    ],
    spicy: [
        { name: "Chicken Biryani (Family)", restaurant: "Paradise Biryani", price: 18.99, originalPrice: 24.99, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 45000, badge: "🔥 Most Ordered", veg: false, time: "35 min", cuisine: "Hyderabadi" },
        { name: "Schezwan Noodles", restaurant: "Wok Express", price: 9.99, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=400&h=300&fit=crop", rating: 4.4, reviews: 7600, badge: "Spicy", veg: true, time: "20 min", cuisine: "Indo-Chinese" },
        { name: "Paneer Tikka Masala", restaurant: "Punjab Grill", price: 13.99, originalPrice: 17.99, img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 18200, badge: "Chef's Special", veg: true, time: "30 min", cuisine: "North Indian" },
        { name: "Nashville Hot Chicken", restaurant: "Fire Bird", price: 15.99, img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 11000, badge: "🌶️ Extra Hot", veg: false, time: "25 min", cuisine: "American" },
        { name: "Thai Green Curry", restaurant: "Bangkok Street", price: 14.49, img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=400&h=300&fit=crop", rating: 4.5, reviews: 8400, badge: "", veg: false, time: "30 min", cuisine: "Thai" },
        { name: "Spicy Lamb Kebab Platter", restaurant: "Barbeque Nation", price: 22.99, originalPrice: 29.99, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 14500, badge: "Premium", veg: false, time: "40 min", cuisine: "Mughlai" }
    ],
    pizza: [
        { name: "Margherita Pizza (Large)", restaurant: "Domino's", price: 11.99, originalPrice: 16.99, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=400&h=300&fit=crop", rating: 4.5, reviews: 52000, badge: "Value Deal", veg: true, time: "30 min", cuisine: "Italian" },
        { name: "BBQ Chicken Pizza", restaurant: "Pizza Hut", price: 15.99, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 34000, badge: "", veg: false, time: "35 min", cuisine: "Italian" },
        { name: "Truffle Mushroom Pizza", restaurant: "Artisan Pizzeria", price: 19.99, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 8700, badge: "Gourmet", veg: true, time: "40 min", cuisine: "Italian" },
        { name: "Pepperoni Feast", restaurant: "Papa John's", price: 14.49, originalPrice: 18.99, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 28000, badge: "Popular", veg: false, time: "30 min", cuisine: "Italian" },
        { name: "Four Cheese Garlic Bread", restaurant: "Domino's", price: 6.99, img: "https://images.unsplash.com/photo-1619531040576-f9416740661b?q=80&w=400&h=300&fit=crop", rating: 4.4, reviews: 19000, badge: "", veg: true, time: "20 min", cuisine: "Italian" },
        { name: "Calzone Supreme", restaurant: "Oven Story", price: 16.99, img: "https://images.unsplash.com/photo-1536964549093-de7d3cc0a869?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 5400, badge: "New", veg: false, time: "35 min", cuisine: "Italian" }
    ],
    burgers: [
        { name: "Classic Smash Burger", restaurant: "Shake Shack", price: 10.99, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 38000, badge: "Fan Favorite", veg: false, time: "20 min", cuisine: "American" },
        { name: "Veg Crunch Burger", restaurant: "Burger Singh", price: 7.99, originalPrice: 10.99, img: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=400&h=300&fit=crop", rating: 4.4, reviews: 14000, badge: "30% OFF", veg: true, time: "15 min", cuisine: "Fusion" },
        { name: "Double Bacon Cheeseburger", restaurant: "Five Guys", price: 14.99, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 22000, badge: "Premium", veg: false, time: "25 min", cuisine: "American" },
        { name: "Falafel Wrap Burger", restaurant: "The Green Bowl", price: 9.49, img: "https://images.unsplash.com/photo-1572802419224-296b0aeee15d?q=80&w=400&h=300&fit=crop", rating: 4.5, reviews: 6800, badge: "Healthy", veg: true, time: "20 min", cuisine: "Mediterranean" },
        { name: "Chicken Zinger Meal", restaurant: "KFC", price: 8.99, originalPrice: 12.49, img: "https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=400&h=300&fit=crop", rating: 4.3, reviews: 41000, badge: "Combo Deal", veg: false, time: "15 min", cuisine: "Fast Food" },
        { name: "Wagyu Beef Slider Trio", restaurant: "Gordon Ramsay Street", price: 24.99, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 3200, badge: "Gourmet", veg: false, time: "30 min", cuisine: "Premium" }
    ],
    beverages: [
        { name: "Mango Lassi (Large)", restaurant: "Lassi Corner", price: 4.99, img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 16000, badge: "Refreshing", veg: true, time: "10 min", cuisine: "Indian" },
        { name: "Cold Brew Coffee", restaurant: "Blue Tokai", price: 5.49, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 12000, badge: "Artisan", veg: true, time: "10 min", cuisine: "Café" },
        { name: "Fresh Fruit Smoothie Bowl", restaurant: "Smoothie Factory", price: 8.99, img: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?q=80&w=400&h=300&fit=crop", rating: 4.5, reviews: 7800, badge: "Healthy", veg: true, time: "12 min", cuisine: "Health" },
        { name: "Classic Mojito (Virgin)", restaurant: "SodaBottleOpenerWala", price: 6.49, img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=400&h=300&fit=crop", rating: 4.4, reviews: 5400, badge: "", veg: true, time: "10 min", cuisine: "Café" },
        { name: "Matcha Green Tea Latte", restaurant: "Starbucks", price: 5.99, img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=400&h=300&fit=crop", rating: 4.3, reviews: 9200, badge: "Trending", veg: true, time: "8 min", cuisine: "Café" },
        { name: "Oreo Milkshake", restaurant: "Keventers", price: 6.99, originalPrice: 8.99, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 21000, badge: "Crowd Fav", veg: true, time: "12 min", cuisine: "Shakes" }
    ],
    biryani: [
        { name: "Hyderabadi Dum Biryani", restaurant: "Paradise", price: 14.99, originalPrice: 19.99, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 67000, badge: "Legendary", veg: false, time: "40 min", cuisine: "Hyderabadi" },
        { name: "Lucknowi Biryani", restaurant: "Tunday Kababi", price: 13.99, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 23000, badge: "Authentic", veg: false, time: "45 min", cuisine: "Awadhi" },
        { name: "Veg Dum Biryani", restaurant: "Behrouz Biryani", price: 11.99, img: "https://images.unsplash.com/photo-1642821373181-696a54913e93?q=80&w=400&h=300&fit=crop", rating: 4.5, reviews: 18000, badge: "Bestseller", veg: true, time: "35 min", cuisine: "Royal" },
        { name: "Egg Biryani Special", restaurant: "Meghana Foods", price: 10.99, img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=400&h=300&fit=crop", rating: 4.4, reviews: 14000, badge: "", veg: false, time: "30 min", cuisine: "South Indian" },
        { name: "Kolkata Biryani", restaurant: "Arsalan", price: 15.99, img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 31000, badge: "Heritage", veg: false, time: "40 min", cuisine: "Bengali" },
        { name: "Paneer Biryani Royal", restaurant: "ITC Bukhara", price: 16.99, originalPrice: 22.99, img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 8600, badge: "Premium", veg: true, time: "45 min", cuisine: "Mughlai" }
    ],
    healthy: [
        { name: "Quinoa Buddha Bowl", restaurant: "The Green Kitchen", price: 12.99, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 9200, badge: "Superfood", veg: true, time: "20 min", cuisine: "Health" },
        { name: "Grilled Chicken Salad", restaurant: "Salad Days", price: 10.99, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&h=300&fit=crop", rating: 4.5, reviews: 11000, badge: "High Protein", veg: false, time: "15 min", cuisine: "Health" },
        { name: "Avocado Toast Platter", restaurant: "Artisan Café", price: 9.99, img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 7600, badge: "Trending", veg: true, time: "15 min", cuisine: "Café" },
        { name: "Poke Bowl (Salmon)", restaurant: "Poké Bar", price: 14.99, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 5400, badge: "Fresh", veg: false, time: "20 min", cuisine: "Japanese" },
        { name: "Overnight Oats Jar", restaurant: "True Elements", price: 6.99, img: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?q=80&w=400&h=300&fit=crop", rating: 4.3, reviews: 4200, badge: "Breakfast", veg: true, time: "10 min", cuisine: "Health" },
        { name: "Detox Green Smoothie", restaurant: "Raw Pressery", price: 7.49, img: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?q=80&w=400&h=300&fit=crop", rating: 4.4, reviews: 6800, badge: "Cleanse", veg: true, time: "8 min", cuisine: "Juice Bar" }
    ],
    chinese: [
        { name: "Kung Pao Chicken", restaurant: "Wok & Roll", price: 13.99, img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 14000, badge: "Popular", veg: false, time: "25 min", cuisine: "Chinese" },
        { name: "Veg Hakka Noodles", restaurant: "Mainland China", price: 8.99, originalPrice: 11.99, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=400&h=300&fit=crop", rating: 4.4, reviews: 22000, badge: "25% OFF", veg: true, time: "20 min", cuisine: "Indo-Chinese" },
        { name: "Dim Sum Basket (8 pcs)", restaurant: "Yauatcha", price: 16.99, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 9600, badge: "Premium", veg: false, time: "30 min", cuisine: "Chinese" },
        { name: "Sweet & Sour Tofu", restaurant: "Wok Express", price: 10.49, img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=400&h=300&fit=crop", rating: 4.3, reviews: 7800, badge: "", veg: true, time: "20 min", cuisine: "Chinese" },
        { name: "Dragon Roll Sushi (8 pcs)", restaurant: "Sushi Lab", price: 18.99, img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 5200, badge: "Chef's Pick", veg: false, time: "25 min", cuisine: "Japanese" },
        { name: "Chilli Paneer Dry", restaurant: "Berco's", price: 9.99, img: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=400&h=300&fit=crop", rating: 4.5, reviews: 16000, badge: "Spicy", veg: true, time: "20 min", cuisine: "Indo-Chinese" }
    ],
    desserts: [
        { name: "Brownie Sundae", restaurant: "Baskin Robbins", price: 8.99, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 19000, badge: "Indulgent", veg: true, time: "15 min", cuisine: "Dessert" },
        { name: "Churros with Chocolate", restaurant: "Street Churros", price: 7.49, img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=400&h=300&fit=crop", rating: 4.5, reviews: 8400, badge: "", veg: true, time: "15 min", cuisine: "Spanish" },
        { name: "Crème Brûlée", restaurant: "Le Petit Café", price: 11.99, img: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 4500, badge: "Classic", veg: true, time: "20 min", cuisine: "French" },
        { name: "Nutella Waffle Stack", restaurant: "The Waffle House", price: 9.99, originalPrice: 13.99, img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 12000, badge: "30% OFF", veg: true, time: "18 min", cuisine: "Belgian" },
        { name: "Matcha Ice Cream Mochi", restaurant: "Mochi Bar", price: 10.99, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400&h=300&fit=crop", rating: 4.4, reviews: 3800, badge: "Unique", veg: true, time: "12 min", cuisine: "Japanese" },
        { name: "Cheesecake New York Style", restaurant: "The Cheesecake Factory", price: 12.99, img: "https://images.unsplash.com/photo-1524351199432-4b67b7a8a554?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 25000, badge: "Iconic", veg: true, time: "15 min", cuisine: "American" }
    ],
    breakfast: [
        { name: "Full English Breakfast", restaurant: "The Breakfast Club", price: 14.99, img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 11000, badge: "Hearty", veg: false, time: "30 min", cuisine: "British" },
        { name: "Masala Dosa Combo", restaurant: "A2B", price: 6.99, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 28000, badge: "South Indian", veg: true, time: "20 min", cuisine: "South Indian" },
        { name: "Fluffy Pancake Stack", restaurant: "IHOP", price: 9.99, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=400&h=300&fit=crop", rating: 4.5, reviews: 15000, badge: "Classic", veg: true, time: "18 min", cuisine: "American" },
        { name: "Eggs Benedict", restaurant: "Café Lota", price: 11.99, img: "https://images.unsplash.com/photo-1608039829572-9b0119e8d56a?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 7200, badge: "Brunch", veg: false, time: "25 min", cuisine: "French" },
        { name: "Poha & Jalebi Set", restaurant: "Indore Kitchen", price: 5.49, img: "https://images.unsplash.com/photo-1606491956689-2ea866880049?q=80&w=400&h=300&fit=crop", rating: 4.4, reviews: 13000, badge: "Taste of India", veg: true, time: "15 min", cuisine: "Street Food" },
        { name: "Açaí Bowl Supreme", restaurant: "Smoothie King", price: 10.49, img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 6400, badge: "Superfood", veg: true, time: "10 min", cuisine: "Health" }
    ]
};

// ── Category Metadata ──────────────────────────────────
const categoryMeta = {
    sweets: { icon: "fas fa-cookie-bite", label: "Sweets & Mithai", tagline: "SUGAR RUSH", title: "Irresistible Sweet Treats", bg: "var(--food-warm-bg)" },
    spicy: { icon: "fas fa-pepper-hot", label: "Spicy & Fiery", tagline: "BRING THE HEAT", title: "Flame-Kissed Flavours", bg: "var(--food-section-alt)" },
    pizza: { icon: "fas fa-pizza-slice", label: "Pizza", tagline: "CHEESY GOODNESS", title: "Pizza Paradise", bg: "var(--food-bg)" },
    burgers: { icon: "fas fa-burger", label: "Burgers", tagline: "STACKED & LOADED", title: "Burger Bonanza", bg: "var(--food-warm-bg)" },
    beverages: { icon: "fas fa-mug-hot", label: "Beverages", tagline: "SIP & CHILL", title: "Refreshing Beverages", bg: "var(--food-section-alt)" },
    biryani: { icon: "fas fa-bowl-rice", label: "Biryani", tagline: "ROYAL FEAST", title: "Biryani Kingdom", bg: "var(--food-bg)" },
    healthy: { icon: "fas fa-leaf", label: "Healthy", tagline: "EAT CLEAN", title: "Healthy & Fresh", bg: "var(--food-warm-bg)" },
    chinese: { icon: "fas fa-utensils", label: "Chinese & Asian", tagline: "EAST MEETS WEST", title: "Asian Delights", bg: "var(--food-section-alt)" },
    desserts: { icon: "fas fa-ice-cream", label: "Desserts", tagline: "SWEET ENDINGS", title: "Divine Desserts", bg: "var(--food-bg)" },
    breakfast: { icon: "fas fa-egg", label: "Breakfast", tagline: "RISE & DINE", title: "Morning Specials", bg: "var(--food-warm-bg)" }
};

// ── Restaurant Spotlight Data ──────────────────────────
const restaurants = [
    { name: "Paradise Biryani", cuisine: "Hyderabadi · Biryani · Kebabs", rating: 4.9, logo: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=120&h=120&fit=crop" },
    { name: "Haldiram's", cuisine: "Indian · Sweets · Snacks", rating: 4.7, logo: "https://images.unsplash.com/photo-1601303516990-33a5b60b6a47?q=80&w=120&h=120&fit=crop" },
    { name: "Shake Shack", cuisine: "Burgers · Shakes · American", rating: 4.8, logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=120&h=120&fit=crop" },
    { name: "Domino's Pizza", cuisine: "Pizza · Italian · Fast Food", rating: 4.5, logo: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=120&h=120&fit=crop" },
    { name: "Starbucks", cuisine: "Coffee · Snacks · Beverages", rating: 4.6, logo: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=120&h=120&fit=crop" },
    { name: "Yauatcha", cuisine: "Dim Sum · Chinese · Asian", rating: 4.9, logo: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=120&h=120&fit=crop" },
    { name: "The Green Kitchen", cuisine: "Salads · Bowls · Healthy", rating: 4.7, logo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=120&h=120&fit=crop" },
    { name: "Baskin Robbins", cuisine: "Ice Cream · Desserts · Cakes", rating: 4.6, logo: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=120&h=120&fit=crop" }
];

// ═══════════════════════════════════════════════════════
//  HERO CAROUSEL
// ═══════════════════════════════════════════════════════

let currentSlide = 0;
let carouselInterval;
const SLIDE_DURATION = 5000;

// ---- Swipe / Drag State ----
let isDragging = false;
let dragStartX = 0;
let dragCurrentX = 0;
let dragStartTime = 0;
const SWIPE_THRESHOLD = 50;       // min px to count as swipe
const VELOCITY_THRESHOLD = 0.3;   // px/ms — fast flick triggers even short swipes

function initHeroCarousel() {
    const inner = document.getElementById('food-carousel-inner');
    const nav = document.getElementById('food-carousel-nav');
    if (!inner || !nav) return;

    // Build slides
    inner.innerHTML = heroSlides.map((s, i) => `
        <div class="carousel-slide ${i === 0 ? 'active' : ''}">
            <img src="${s.img}" alt="${s.title}" loading="${i === 0 ? 'eager' : 'lazy'}">
            <div class="slide-content">
                <div class="slide-badge">${s.badge}</div>
                <h2>${s.title}</h2>
                <p>${s.desc}</p>
                <a href="${s.ctaLink}" class="slide-cta">${s.cta} <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');

    // Build dots
    nav.innerHTML = heroSlides.map((_, i) => `
        <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-idx="${i}"></button>
    `).join('');

    // Dot click
    nav.querySelectorAll('.carousel-dot').forEach(dot => {
        dot.addEventListener('click', () => goToSlide(+dot.dataset.idx));
    });

    // Arrows
    document.getElementById('foodPrevSlide')?.addEventListener('click', () => {
        goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
    });
    document.getElementById('foodNextSlide')?.addEventListener('click', () => {
        goToSlide((currentSlide + 1) % heroSlides.length);
    });

    initSwipeHandlers();
    startAutoplay();
}

function goToSlide(idx) {
    currentSlide = idx;
    const inner = document.getElementById('food-carousel-inner');
    inner.style.transform = `translateX(-${idx * 100}%)`;

    document.querySelectorAll('.food-hero-carousel .carousel-slide').forEach((s, i) => {
        s.classList.toggle('active', i === idx);
    });
    document.querySelectorAll('.food-hero-carousel .carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === idx);
    });

    resetProgress();
    resetAutoplay();
}

function startAutoplay() {
    carouselInterval = setInterval(() => {
        goToSlide((currentSlide + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    animateProgress();
}

function resetAutoplay() {
    clearInterval(carouselInterval);
    startAutoplay();
}

function animateProgress() {
    const fill = document.getElementById('food-progress-fill');
    if (!fill) return;
    fill.style.transition = 'none';
    fill.style.width = '0%';
    requestAnimationFrame(() => {
        fill.style.transition = `width ${SLIDE_DURATION}ms linear`;
        fill.style.width = '100%';
    });
}

function resetProgress() {
    animateProgress();
}

// ═══════════════════════════════════════════════════════
//  Touch + Mouse Swipe / Drag Handlers
// ═══════════════════════════════════════════════════════
function initSwipeHandlers() {
    const carousel = document.querySelector('.food-hero-carousel');
    if (!carousel) return;

    // Prevent image dragging interfering
    carousel.addEventListener('dragstart', e => e.preventDefault());

    // --- Touch Events ---
    carousel.addEventListener('touchstart', onDragStart, { passive: true });
    carousel.addEventListener('touchmove', onDragMove, { passive: false });
    carousel.addEventListener('touchend', onDragEnd);
    carousel.addEventListener('touchcancel', onDragEnd);

    // --- Mouse Events ---
    carousel.addEventListener('mousedown', onDragStart);
    carousel.addEventListener('mousemove', onDragMove);
    carousel.addEventListener('mouseup', onDragEnd);
    carousel.addEventListener('mouseleave', onDragEnd);
}

function getClientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
}

function onDragStart(e) {
    if (e.target.closest('.carousel-control, .carousel-dot, .slide-cta')) return;

    isDragging = true;
    dragStartX = getClientX(e);
    dragCurrentX = dragStartX;
    dragStartTime = Date.now();

    clearInterval(carouselInterval);

    document.querySelector('.food-hero-carousel').style.cursor = 'grabbing';

    const inner = document.getElementById('food-carousel-inner');
    if (inner) inner.style.transition = 'none';
}

function onDragMove(e) {
    if (!isDragging) return;

    if (e.cancelable && e.touches) e.preventDefault();

    dragCurrentX = getClientX(e);
    const deltaX = dragCurrentX - dragStartX;

    const inner = document.getElementById('food-carousel-inner');
    if (inner) {
        // We use transform relative to currentSlide
        // currentSlide * 100% is the baseline
        // we add deltaX in pixels. Since we can't easily mix % and px in translate, 
        // we'll calculate percentage based on container width.
        const width = inner.offsetWidth;
        const percentDelta = (deltaX / width) * 100;
        inner.style.transform = `translateX(calc(-${currentSlide * 100}% + ${percentDelta}%))`;
    }
}

function onDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;

    document.querySelector('.food-hero-carousel').style.cursor = '';

    const deltaX = dragCurrentX - dragStartX;
    const elapsed = Date.now() - dragStartTime;
    const velocity = Math.abs(deltaX) / elapsed;

    const inner = document.getElementById('food-carousel-inner');
    if (inner) inner.style.transition = 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';

    if (Math.abs(deltaX) > SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
        if (deltaX < 0) {
            goToSlide((currentSlide + 1) % heroSlides.length);
        } else {
            goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
        }
    } else {
        goToSlide(currentSlide);
    }
}

// ═══════════════════════════════════════════════════════
//  DYNAMIC CATEGORY SECTIONS
// ═══════════════════════════════════════════════════════

function buildProductCard(item) {
    const ratingClass = item.rating >= 4.5 ? 'high' : item.rating >= 4.0 ? 'medium' : 'low';
    const discount = item.originalPrice ? Math.round((1 - item.price / item.originalPrice) * 100) : 0;

    return `
        <div class="food-product-card" onclick="window.location.href='Food_ProductDetails.html?id=${item.id || 1}'">
            <div class="image-wrapper">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
                ${item.badge ? `<span class="food-badge ${discount > 0 ? 'food-badge-offer' : item.badge.includes('New') ? 'food-badge-new' : 'food-badge-best'}">${discount > 0 ? discount + '% OFF' : item.badge}</span>` : ''}
                <span class="food-badge-veg ${item.veg ? 'veg' : 'non-veg'}"></span>
                <span class="food-delivery-chip"><i class="fas fa-clock"></i> ${item.time}</span>
                <button class="food-wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(this, '${item.name.replace(/'/g, "\\'")}')"><i class="far fa-heart"></i></button>
            </div>
            <div class="food-product-info">
                <p class="food-restaurant-name">${item.restaurant}</p>
                <h3>${item.name}</h3>
                <span class="food-cuisine-tag">${item.cuisine}</span>
                <div class="food-rating-row">
                    <span class="food-rating-badge ${ratingClass}"><i class="fas fa-star"></i> ${item.rating}</span>
                    <span class="reviews-count">${formatReviews(item.reviews)} ratings</span>
                </div>
                <div class="food-price-row">
                    <span class="food-price">$${item.price.toFixed(2)}${item.originalPrice ? `<span class="original-price">$${item.originalPrice.toFixed(2)}</span>` : ''}</span>
                    <button class="food-order-btn" onclick="event.stopPropagation(); addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price})"><i class="fas fa-plus"></i> ADD</button>
                </div>
            </div>
        </div>
    `;
}

function renderCategorySections() {
    const container = document.getElementById('food-dynamic-categories');
    if (!container) return;

    let html = '';
    for (const [key, items] of Object.entries(foodProducts)) {
        const meta = categoryMeta[key];
        html += `
            <section class="food-container" id="section-${key}" style="background: ${meta.bg};" data-cat="${key}">
                <div class="food-section-header">
                    <div>
                        <span class="food-section-tagline">${meta.tagline}</span>
                        <h2><i class="${meta.icon}" style="margin-right: 10px; color: var(--food-red);"></i>${meta.title}</h2>
                    </div>
                    <a href="Food_AllProducts.html" class="food-view-all">View All <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="food-product-scroll">
                    ${items.map(item => buildProductCard(item)).join('')}
                </div>
            </section>
        `;
    }
    container.innerHTML = html;
}

// ── Restaurant Spotlight ───────────────────────────────
function renderRestaurants() {
    const grid = document.getElementById('food-restaurant-grid');
    if (!grid) return;

    grid.innerHTML = restaurants.map(r => `
        <div class="food-restaurant-card" onclick="showToast('Exploring ${r.name}...')">
            <img class="rest-logo" src="${r.logo}" alt="${r.name}">
            <div class="rest-info">
                <h4>${r.name}</h4>
                <p>${r.cuisine}</p>
                <span class="rest-rating"><i class="fas fa-star"></i> ${r.rating}</span>
            </div>
        </div>
    `).join('');
}

// ── Top Deals Section (Dynamic) ────────────────────────
function renderTopDeals() {
    const dealsContainer = document.getElementById('food-top-deals-container');
    if (!dealsContainer) return;

    // Flatten all products
    let allProducts = [];
    Object.values(foodProducts).forEach(categoryItems => {
        allProducts = allProducts.concat(categoryItems);
    });

    // Filter items with an originalPrice (implies a discount)
    let deals = allProducts.filter(item => item.originalPrice && item.originalPrice > item.price);

    // Calculate discount % and sort descending
    deals.forEach(item => {
        item.discountPercent = Math.round((1 - item.price / item.originalPrice) * 100);
    });
    deals.sort((a, b) => b.discountPercent - a.discountPercent);

    // Take top 6 deals to show
    const topDeals = deals.slice(0, 6);

    dealsContainer.innerHTML = topDeals.map(item => buildProductCard(item)).join('');
}

// ═══════════════════════════════════════════════════════
//  CATEGORY TAB FILTERING
// ═══════════════════════════════════════════════════════

function initCategoryTabs() {
    const tabs = document.querySelectorAll('.food-cat-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const cat = tab.dataset.category;
            const target = document.getElementById(`section-${cat}`);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ═══════════════════════════════════════════════════════
//  CART & INTERACTIONS
// ═══════════════════════════════════════════════════════

let cartCount = 0;

function initCartCount() {
    const cart = JSON.parse(localStorage.getItem('urbanmart_cart') || '[]');
    cartCount = cart.length;
    updateCartBadge();
}

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('urbanmart_cart') || '[]');
    cart.push({ name, price, quantity: 1, category: 'Food' });
    localStorage.setItem('urbanmart_cart', JSON.stringify(cart));
    
    cartCount = cart.length;
    updateCartBadge();
    showToast(`${name} added to cart — $${price.toFixed(2)}`);
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.textContent = cartCount;
        badge.style.display = cartCount > 0 ? 'flex' : 'none';
    }
}

function toggleWishlist(btn, name) {
    btn.classList.toggle('liked');
    const icon = btn.querySelector('i');
    
    let likedItems = JSON.parse(localStorage.getItem('food_liked') || '[]');
    
    if (btn.classList.contains('liked')) {
        icon.className = 'fas fa-heart';
        if (name && !likedItems.includes(name)) likedItems.push(name);
        showToast('Added to favourites ❤️');
    } else {
        icon.className = 'far fa-heart';
        if (name) likedItems = likedItems.filter(item => item !== name);
        showToast('Removed from favourites');
    }
    localStorage.setItem('food_liked', JSON.stringify(likedItems));
}

// ═══════════════════════════════════════════════════════
//  TOAST NOTIFICATION
// ═══════════════════════════════════════════════════════

let toastTimeout;
function showToast(message) {
    let toast = document.getElementById('food-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'food-toast';
        toast.className = 'food-toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    toast.classList.remove('show');
    void toast.offsetWidth; // force reflow
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ═══════════════════════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════════════════════

function formatReviews(num) {
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num;
}

// ── Deal Banner Copy Code ──────────────────────────────
function copyCode(el) {
    const code = el.dataset.code || 'YUMMY50';
    navigator.clipboard.writeText(code).then(() => {
        showToast(`Code "${code}" copied! 🎉`);
    }).catch(() => {
        showToast(`Code: ${code}`);
    });
}

// ── Newsletter ─────────────────────────────────────────
function initNewsletter() {
    const form = document.getElementById('food-newsletter-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input').value;
        if (email) {
            showToast('Subscribed successfully! 🎉');
            form.reset();
        }
    });
}

// ── Sticky Category Tabs Shadow ────────────────────────
function initStickyTabs() {
    const tabs = document.querySelector('.food-category-tabs');
    if (!tabs) return;

    const observer = new IntersectionObserver(([entry]) => {
        tabs.classList.toggle('sticky-shadow', !entry.isIntersecting);
    }, { threshold: [1], rootMargin: '-1px 0px 0px 0px' });

    observer.observe(tabs);
}

// ── Scroll Animations ──────────────────────────────────
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('food-animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.food-product-card, .food-restaurant-card, .food-step').forEach(el => {
        observer.observe(el);
    });
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    initCartCount();
    initHeroCarousel();
    renderTopDeals();
    renderCategorySections();
    renderRestaurants();
    initCategoryTabs();
    initNewsletter();
    initStickyTabs();

    // Delay scroll animations slightly
    setTimeout(initScrollAnimations, 300);
});
