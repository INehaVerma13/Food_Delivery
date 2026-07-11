/* ============================================
   🍽️ BiteSwift — JavaScript (Core Logic)
   Cart, Cuisines, Multi-page Routing & Simulators
   ============================================ */

// ============================================
// 1. RESTAURANTS & DETAILED MENUS DATA
// ============================================
const restaurantsData = {
  "mtr": {
    id: "mtr",
    name: "MTR — Mavalli Tiffin Rooms",
    cuisine: "South Indian · Heritage · Tiffins",
    rating: "4.6",
    deliveryTime: "25–35 min",
    location: "Lalbagh",
    costForTwo: "₹200",
    veg: true,
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&h=600&fit=crop",
    menu: [
      { id: "mtr-rava-idli", name: "Rava Idli", price: 90, desc: "The legendary MTR creation, made with semolina, yogurt, ghee, cashews, and mustard seeds. Served with potato sagu and ghee.", isVeg: true, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=300&fit=crop" },
      { id: "mtr-masala-dosa", name: "Special Masala Dosa", price: 110, desc: "Thick, crispy rice crepe laced with pure ghee, stuffed with spiced potato mash and served with flavorful coconut chutney.", isVeg: true, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&h=300&fit=crop" },
      { id: "mtr-bisi-bele", name: "Bisi Bele Bath", price: 120, desc: "A hearty, spiced rice and lentil dish loaded with vegetables, tamarind, and fresh-ground spices. Served with crisp boondi.", isVeg: true, image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=300&h=300&fit=crop" },
      { id: "mtr-chow-chow", name: "Chow Chow Bath", price: 100, desc: "A classic sweet-and-savory breakfast combo featuring a scoop of spicy Khara Bath and a scoop of sweet Kesari Bath.", isVeg: true, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop" },
      { id: "mtr-coffee", name: "Iconic Filter Coffee", price: 40, desc: "Freshly brewed decoction blended with hot frothed milk, served in a traditional brass tumbler and dabara.", isVeg: true, image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=300&fit=crop" }
    ]
  },
  "vidyarthi-bhavan": {
    id: "vidyarthi-bhavan",
    name: "Vidyarthi Bhavan",
    cuisine: "South Indian · Heritage · Dosas",
    rating: "4.5",
    deliveryTime: "30–40 min",
    location: "Basavanagudi",
    costForTwo: "₹200",
    veg: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&h=600&fit=crop",
    menu: [
      { id: "vb-dosa", name: "Benne Masala Dosa", price: 90, desc: "VB's legendary thick, butter-crisp dosa with a golden-brown crust, containing a spiced potato cube filling and served with thick chutney.", isVeg: true, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&h=300&fit=crop" },
      { id: "vb-sagu", name: "Poori Saagu", price: 80, desc: "Fluffy, deep-fried whole wheat pooris served with a spiced mixed-vegetable sagu (curry).", isVeg: true, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=300&fit=crop" },
      { id: "vb-vada", name: "Rava Vada", price: 50, desc: "Crispy, golden, doughnut-shaped savory fritter made from semolina and spices. Extensively crunchy.", isVeg: true, image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=300&h=300&fit=crop" },
      { id: "vb-kesari", name: "Kesari Bath", price: 50, desc: "Warm semolina sweet pudding flavored with ghee, cardamom, pineapple essence, and topped with toasted cashews.", isVeg: true, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop" },
      { id: "vb-coffee", name: "Filter Coffee", price: 40, desc: "Traditional South Indian chicory-blended filter coffee frothed to perfection.", isVeg: true, image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=300&fit=crop" }
    ]
  },
  "meghana-foods": {
    id: "meghana-foods",
    name: "Meghana Foods",
    cuisine: "Biryani · Andhra Style · Spicy",
    rating: "4.4",
    deliveryTime: "30–45 min",
    location: "Koramangala",
    costForTwo: "₹400",
    veg: false,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop",
    menu: [
      { id: "meghana-biryani", name: "Meghana Special Boneless Biryani", price: 320, desc: "Signature rich Andhra-style biryani featuring layers of aromatic basmati rice and highly spiced tender boneless chicken cooked in secret gravy.", isVeg: false, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&h=300&fit=crop" },
      { id: "meghana-chicken-65", name: "Chicken 65 (Andhra Style)", price: 290, desc: "Fiery, deep-fried chicken cubes tossed in yogurt, curry leaves, and green chilies.", isVeg: false, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=300&fit=crop" },
      { id: "meghana-mutton", name: "Mutton Keema Biryani", price: 420, desc: "Spiced minced mutton cooked with special Andhra herbs, layered over long-grain basmati rice.", isVeg: false, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=300&fit=crop" },
      { id: "meghana-paneer", name: "Paneer Biryani", price: 260, desc: "Soft paneer cubes marinated in Andhra spices, cooked with basmati rice. Satisfyingly spicy.", isVeg: true, image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=300&h=300&fit=crop" }
    ]
  },
  "truffles": {
    id: "truffles",
    name: "Truffles",
    cuisine: "Burgers · Cafes · Comfort Food",
    rating: "4.5",
    deliveryTime: "25–40 min",
    location: "Koramangala",
    costForTwo: "₹550",
    veg: false,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
    menu: [
      { id: "truffles-burger", name: "All American Cheese Burger", price: 295, desc: "Juicy flame-grilled double chicken/beef patty topped with double cheddar cheese, lettuce, onions, gherkins, and signature Truffles dressing.", isVeg: false, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop" },
      { id: "truffles-veggie", name: "Classic Veggie Burger", price: 220, desc: "Golden fried crispy mixed-veg patty with lettuce, tomatoes, cheese, and spicy mayo.", isVeg: true, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=300&fit=crop" },
      { id: "truffles-fries", name: "Cheesy Mex Fries", price: 180, desc: "Crispy salted French fries drenched in rich cheese sauce, topped with jalapeños and Mexican salsa.", isVeg: true, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop" },
      { id: "truffles-truffle-cake", name: "Chocolate Truffle Cake Slice", price: 150, desc: "Decadent, moist dark chocolate cake layered with rich chocolate ganache. Ultimate dessert choice.", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop" }
    ]
  },
  "empire-restaurant": {
    id: "empire-restaurant",
    name: "Empire Restaurant",
    cuisine: "North Indian · Mughlai · Late Night",
    rating: "4.3",
    deliveryTime: "20–35 min",
    location: "Church Street",
    costForTwo: "₹350",
    veg: false,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop",
    menu: [
      { id: "empire-biryani", name: "Empire Special Chicken Biryani", price: 220, desc: "A classic local favorite - mildly spiced, fragrant ghee rice layered with deep-fried chicken and slow-cooked gravy.", isVeg: false, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=300&fit=crop" },
      { id: "empire-kebab", name: "Empire Chicken Kebab (Full)", price: 250, desc: "The legendary bright red, deep-fried crispy chicken starter heavily spiced with Empire's signature spice blend.", isVeg: false, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=300&fit=crop" },
      { id: "empire-ghee-rice", name: "Ghee Rice with Dal", price: 150, desc: "Rich basmati rice cooked in pure ghee, flavored with whole spices, topped with fried onions. Served with aromatic dal fry.", isVeg: true, image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=300&h=300&fit=crop" },
      { id: "empire-butter-chicken", name: "Mughlai Butter Chicken", price: 280, desc: "Succulent tandoori chicken pieces cooked in a creamy, velvety tomato, butter, and cashew nut gravy.", isVeg: false, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=300&fit=crop" }
    ]
  },
  "toit": {
    id: "toit",
    name: "Toit Brewpub",
    cuisine: "Italian · Craft Beer · Pizza",
    rating: "4.4",
    deliveryTime: "35–50 min",
    location: "Indiranagar",
    costForTwo: "₹1200",
    veg: false,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
    menu: [
      { id: "toit-pizza", name: "Wood-fired Pepperoni Pizza", price: 450, desc: "Fresh wood-fired sourdough pizza topped with premium pepperoni, house-made marinara sauce, and fresh mozzarella cheese.", isVeg: false, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=300&fit=crop" },
      { id: "toit-margherita", name: "Classic Margherita Pizza", price: 380, desc: "Traditional wood-fired pizza with tomato sauce, fresh buffalo mozzarella, olive oil, and fresh basil leaves.", isVeg: true, image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=300&h=300&fit=crop" },
      { id: "toit-blonde", name: "Basmati Blonde (Craft Beer Mock)", price: 300, desc: "Toit's signature light, refreshing brew made with a touch of organic basmati rice (non-alcoholic mock version for home delivery).", isVeg: true, image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=300&h=300&fit=crop" },
      { id: "toit-popcorn", name: "Chilli Truffle Popcorn", price: 180, desc: "Crispy hot popcorn tossed in luxury white truffle oil, sprinkled with custom chilli powder.", isVeg: true, image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=300&h=300&fit=crop" }
    ]
  },
  "ctr": {
    id: "ctr",
    name: "CTR — Shri Sagar",
    cuisine: "South Indian · Heritage · Crispy Dosas",
    rating: "4.5",
    deliveryTime: "30–45 min",
    location: "Malleshwaram",
    costForTwo: "₹200",
    veg: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&h=600&fit=crop",
    menu: [
      { id: "ctr-benne-dosa", name: "Benne Masala Dosa", price: 80, desc: "The iconic, crisp, heavily-buttered Masala Dosa that Malleshwaram is famous for. Fluffy inside, glass-like crunchy outside.", isVeg: true, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=300&fit=crop" },
      { id: "ctr-vada", name: "Medu Vada", price: 45, desc: "Crispy fried black lentil donut fritter served with sambar and fresh coconut chutney.", isVeg: true, image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=300&h=300&fit=crop" },
      { id: "ctr-khara", name: "Khara Bath", price: 45, desc: "Savory semolina porridge cooked with mixed vegetables, ghee, curry leaves, and traditional spices.", isVeg: true, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop" },
      { id: "ctr-kesari", name: "Pineapple Kesari", price: 45, desc: "Sweet, ghee-loaded semolina dessert infused with saffron, pineapple chunks, and raisins.", isVeg: true, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop" }
    ]
  },
  "karavalli": {
    id: "karavalli",
    name: "Karavalli",
    cuisine: "South Indian · Coastal · Seafood",
    rating: "4.7",
    deliveryTime: "40–55 min",
    location: "Residency Road",
    costForTwo: "₹1500",
    veg: false,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&h=600&fit=crop",
    menu: [
      { id: "karavalli-prawn", name: "Tiger Prawn Gassi", price: 650, desc: "Fresh tiger prawns simmered in a rich Mangalorean coconut curry spiced with ground bedgi chillies and sour tamarind.", isVeg: false, image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=300&h=300&fit=crop" },
      { id: "karavalli-kori", name: "Kori Rotti", price: 450, desc: "A classic Tuluva dish: crispy, wafer-thin rice crepes (rotti) served with chicken pieces cooked in a spiced coconut gravy.", isVeg: false, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=300&fit=crop" },
      { id: "karavalli-neer-dosa", name: "Neer Dosa (3 Pcs)", price: 120, desc: "Extremely soft, light, paper-thin lace crepes made from fine rice batter. Pairs beautifully with coastal curries.", isVeg: true, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=300&fit=crop" },
      { id: "karavalli-fish", name: "Coastal Anjal Tawa Fry", price: 580, desc: "Kingfish slice coated in a special red chilli spice paste, shallow fried on a tawa till perfectly tender.", isVeg: false, image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=300&h=300&fit=crop" }
    ]
  },
  "koshys": {
    id: "koshys",
    name: "Koshy's",
    cuisine: "Continental · Classic · Stews",
    rating: "4.2",
    deliveryTime: "30–45 min",
    location: "St. Mark's Road",
    costForTwo: "₹450",
    veg: false,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
    menu: [
      { id: "koshys-mutton", name: "Koshy's Mutton Stew", price: 350, desc: "A legendary British-era legacy: tender chunks of mutton slowly simmered with potatoes, onions, carrots, and light black pepper spices in a creamy coconut milk broth.", isVeg: false, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=300&fit=crop" },
      { id: "koshys-devilled", name: "Devilled Chicken", price: 290, desc: "Fried chicken pieces tossed in a tangy, spicy, and slightly sweet sweet-sour devil sauce. Perfect with cold beverages.", isVeg: false, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=300&fit=crop" },
      { id: "koshys-custard", name: "Caramel Custard", price: 120, desc: "Classic baked egg custard with a sweet caramel syrup base. Pure nostalgic texture.", isVeg: false, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop" },
      { id: "koshys-cold-coffee", name: "Classic Cold Coffee", price: 150, desc: "Perfectly blended chilled coffee with rich milk and vanilla ice cream scoop.", isVeg: true, image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=300&fit=crop" }
    ]
  }
};

// ============================================
// 2. STATE MANAGEMENT (LOCAL STORAGE CART)
// ============================================
const cart = {
  items: [],

  // Load cart from LocalStorage
  load() {
    const saved = localStorage.getItem("biteswift_cart");
    if (saved) {
      try {
        this.items = JSON.parse(saved);
      } catch (e) {
        this.items = [];
      }
    }
    this.render();
    updateCartBadge();
  },

  // Save cart to LocalStorage
  save() {
    localStorage.setItem("biteswift_cart", JSON.stringify(this.items));
  },

  add(dish) {
    const existing = this.items.find(item => item.id === dish.id);
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({ ...dish, qty: 1 });
    }
    this.save();
    this.render();
    showToast(`🍛 Added ${dish.name} to cart!`);
    updateCartBadge();

    // Trigger cart badge pop animation
    const badge = document.getElementById('cart-badge');
    if (badge) {
      badge.classList.remove('badge-pop');
      void badge.offsetWidth; // force reflow
      badge.classList.add('badge-pop');
    }
  },

  remove(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.save();
    this.render();
    updateCartBadge();
  },

  updateQty(id, delta) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        this.remove(id);
        return;
      }
    }
    this.save();
    this.render();
    updateCartBadge();
  },

  clear() {
    this.items = [];
    this.save();
    this.render();
    updateCartBadge();
  },

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  },

  getCount() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  },

  render() {
    // Dynamic binding to multiple possible cart-item containers across pages
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');

    if (container) {
      if (this.items.length === 0) {
        container.innerHTML = `
          <div class="cart-empty">
            <div class="cart-empty__icon">🛒</div>
            <p class="cart-empty__text">Your cart is empty.<br>Add some delicious dishes!</p>
          </div>
        `;
        if (totalEl) totalEl.textContent = '₹0';
      } else {
        container.innerHTML = this.items.map(item => `
          <div class="cart-item">
            <img class="cart-item__image" src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="cart-item__info">
              <div class="cart-item__name">${item.name}</div>
              <div class="cart-item__restaurant">${item.restaurant}</div>
              <div class="cart-item__controls">
                <button class="cart-item__qty-btn" onclick="cart.updateQty('${item.id}', -1)">−</button>
                <span class="cart-item__qty">${item.qty}</span>
                <button class="cart-item__qty-btn" onclick="cart.updateQty('${item.id}', 1)">+</button>
              </div>
            </div>
            <div class="cart-item__price">₹${item.price * item.qty}</div>
          </div>
        `).join('');
        if (totalEl) totalEl.textContent = `₹${this.getTotal()}`;
      }
    }

    // Trigger page-specific bindings if they exist
    if (typeof renderCheckoutSummary === 'function') {
      renderCheckoutSummary();
    }
  }
};

// ============================================
// 3. COMMON INTERACTION MODULES
// ============================================
function openCart() {
  const overlay = document.getElementById('cart-overlay');
  const sidebar = document.getElementById('cart-sidebar');
  if (overlay) overlay.classList.add('cart-overlay--open');
  if (sidebar) sidebar.classList.add('cart-sidebar--open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const overlay = document.getElementById('cart-overlay');
  const sidebar = document.getElementById('cart-sidebar');
  if (overlay) overlay.classList.remove('cart-overlay--open');
  if (sidebar) sidebar.classList.remove('cart-sidebar--open');
  document.body.style.overflow = '';
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const count = cart.getCount();
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.querySelector('.toast__text').textContent = message;
  toast.classList.add('toast--visible');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('toast--visible');
  }, 2500);
}

function toggleMobileNav() {
  const nav = document.getElementById('main-nav');
  if (nav) nav.classList.toggle('nav--mobile-open');
}

function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('scroll-top--visible');
    } else {
      btn.classList.remove('scroll-top--visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById('main-nav')?.classList.remove('nav--mobile-open');
      }
    });
  });
}

// ============================================
// 4. LANDING PAGE SPECIFIC MODULES
// ============================================
function initLandingPage() {
  // Category Filtering
  window.filterByCategory = function(category) {
    const cards = document.querySelectorAll('.restaurant-card');
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
      if (card.dataset.category === category || category === 'all') {
        card.style.opacity = '1';
        card.style.transform = 'scale(1.02)';
      } else {
        card.style.opacity = '0.6';
        card.style.transform = 'scale(1)';
      }
    });

    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
        card.style.animation = 'fadeIn 0.3s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  };

  // Search Logic
  const searchInput = document.getElementById('hero-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const restaurantCards = document.querySelectorAll('.restaurant-card');
      const dishCards = document.querySelectorAll('.dish-card');

      restaurantCards.forEach(card => {
        const name = card.querySelector('.restaurant-card__name')?.textContent.toLowerCase() || '';
        const cuisine = card.querySelector('.restaurant-card__cuisine')?.textContent.toLowerCase() || '';
        if (name.includes(query) || cuisine.includes(query) || query === '') {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });

      dishCards.forEach(card => {
        const name = card.querySelector('.dish-card__name')?.textContent.toLowerCase() || '';
        const restaurant = card.querySelector('.dish-card__restaurant')?.textContent.toLowerCase() || '';
        if (name.includes(query) || restaurant.includes(query) || query === '') {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

// ============================================
// 5. DYNAMIC RESTAURANT PAGE LOADER
// ============================================
function initRestaurantPage() {
  const params = new URLSearchParams(window.location.search);
  const restaurantId = params.get('id');
  const restaurant = restaurantsData[restaurantId];

  if (!restaurant) {
    // Redirect to home if ID is invalid
    window.location.href = "index.html";
    return;
  }

  // Set page title
  document.title = `${restaurant.name} Menu — BiteSwift`;

  // Render Header Details
  const container = document.getElementById('restaurant-detail-header');
  if (container) {
    container.innerHTML = `
      <div class="rest-hero" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('${restaurant.image}')">
        <div class="rest-hero__content">
          <div class="rest-hero__eyebrow">
            <span class="badge badge--lime">${restaurant.veg ? 'Pure Veg' : 'Veg & Non-Veg'}</span>
            <span class="badge">📍 ${restaurant.location}</span>
          </div>
          <h1 class="rest-hero__title text-display">${restaurant.name}</h1>
          <p class="rest-hero__cuisine">${restaurant.cuisine}</p>
          <div class="rest-hero__meta">
            <span class="restaurant-card__rating">★ ${restaurant.rating}</span>
            <span class="badge">🛵 ${restaurant.deliveryTime}</span>
            <span class="badge">💵 ${restaurant.costForTwo} for two</span>
          </div>
        </div>
      </div>
    `;
  }

  // Render Menu Container
  const menuContainer = document.getElementById('restaurant-menu-container');
  if (menuContainer) {
    // Generate menu layout
    let html = `
      <div class="menu-filters">
        <div class="menu-filters__left">
          <button class="btn-ghost btn-sm btn-active" onclick="filterMenu('all')">Full Menu</button>
          <button class="btn-ghost btn-sm" onclick="filterMenu('veg')">🟢 Veg Only</button>
          <button class="btn-ghost btn-sm" onclick="filterMenu('nonveg')">🔴 Non-Veg</button>
        </div>
      </div>
      <div class="menu-list">
    `;

    restaurant.menu.forEach(item => {
      html += `
        <div class="menu-item-card animate-in" data-veg="${item.isVeg}">
          <div class="menu-item-card__left">
            <span class="menu-item-card__indicator ${item.isVeg ? 'veg' : 'nonveg'}"></span>
            <h3 class="menu-item-card__name">${item.name}</h3>
            <span class="menu-item-card__price">₹${item.price}</span>
            <p class="menu-item-card__desc">${item.desc}</p>
          </div>
          <div class="menu-item-card__right">
            <img class="menu-item-card__img" src="${item.image}" alt="${item.name}" loading="lazy">
            <button class="btn-lime btn-sm menu-item-card__add-btn" 
              onclick="addToCart('${item.id}', '${item.name}', ${item.price}, '${item.image}', '${restaurant.name}')">
              ADD +
            </button>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    menuContainer.innerHTML = html;
  }

  // Filter Menu Helper
  window.filterMenu = function(filter) {
    const items = document.querySelectorAll('.menu-item-card');
    const buttons = document.querySelectorAll('.menu-filters button');
    
    // Toggle active button style
    buttons.forEach(btn => {
      if (btn.innerText.toLowerCase().includes(filter)) {
        btn.classList.add('btn-active');
      } else {
        btn.classList.remove('btn-active');
      }
    });

    items.forEach(item => {
      const isVeg = item.dataset.veg === 'true';
      if (filter === 'all' || 
         (filter === 'veg' && isVeg) || 
         (filter === 'nonveg' && !isVeg)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  };
}

// ============================================
// 6. CHECKOUT & COUPON SIMULATOR MODULE
// ============================================
let activeDiscount = 0;
let appliedCouponCode = "";

function initCheckoutPage() {
  if (cart.items.length === 0) {
    const mainCheckout = document.querySelector('.checkout-container');
    if (mainCheckout) {
      mainCheckout.innerHTML = `
        <div class="checkout-empty" style="text-align:center; padding: 100px 24px;">
          <div style="font-size: 64px; margin-bottom: 24px;">🍱</div>
          <h2 class="text-heading-lg" style="margin-bottom: 16px;">Your basket is empty!</h2>
          <p style="margin-bottom: 32px;">Go back to the homepage to order from your city's finest restaurants.</p>
          <a href="index.html" class="btn-lime">Explore Restaurants</a>
        </div>
      `;
    }
    return;
  }

  window.renderCheckoutSummary = function() {
    const container = document.getElementById('checkout-items-summary');
    if (!container) return;

    const subtotal = cart.getTotal();
    const packingFee = 20;
    const deliveryFee = subtotal > 500 ? 0 : 30;
    const gst = Math.round(subtotal * 0.05); // 5% GST
    
    let discount = 0;
    if (appliedCouponCode === "CRAVE50") {
      discount = Math.min(150, Math.round(subtotal * 0.5));
    } else if (appliedCouponCode === "FIRSTFEED") {
      discount = 200;
    }
    
    const finalTotal = Math.max(0, subtotal + packingFee + deliveryFee + gst - discount);

    container.innerHTML = `
      <div class="summary-section">
        <h3 class="summary-title text-heading-sm">Order Summary</h3>
        <div class="summary-list">
          ${cart.items.map(item => `
            <div class="summary-item">
              <span class="summary-item__qty">${item.qty} x</span>
              <span class="summary-item__name">${item.name}</span>
              <span class="summary-item__price">₹${item.price * item.qty}</span>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="billing-section">
        <div class="billing-row">
          <span>Subtotal</span>
          <span>₹${subtotal}</span>
        </div>
        <div class="billing-row">
          <span>Restaurant Packaging</span>
          <span>₹${packingFee}</span>
        </div>
        <div class="billing-row">
          <span>Delivery Partner Fee</span>
          <span>${deliveryFee === 0 ? '<span style="color:var(--color-lime-pulse)">FREE</span>' : `₹${deliveryFee}`}</span>
        </div>
        <div class="billing-row">
          <span>Taxes (5% GST)</span>
          <span>₹${gst}</span>
        </div>
        ${discount > 0 ? `
          <div class="billing-row billing-row--discount" style="color: green; font-weight: bold;">
            <span>Coupon Discount (${appliedCouponCode})</span>
            <span>- ₹${discount}</span>
          </div>
        ` : ''}
        <div class="billing-row billing-row--total" style="font-weight: bold; font-size: var(--text-heading-sm); border-top: 2px solid #000; padding-top: var(--spacing-12); margin-top: var(--spacing-12);">
          <span>Grand Total</span>
          <span>₹${finalTotal}</span>
        </div>
      </div>
    `;

    // Update bottom Pay button
    const payBtn = document.getElementById('checkout-pay-btn');
    if (payBtn) {
      payBtn.innerHTML = `Confirm & Pay ₹${finalTotal}`;
    }
  };

  // Run render first time
  renderCheckoutSummary();

  // Coupon Application Action
  window.applyCoupon = function() {
    const input = document.getElementById('coupon-input');
    if (!input) return;
    const code = input.value.toUpperCase().trim();

    if (code === "CRAVE50" || code === "FIRSTFEED") {
      appliedCouponCode = code;
      showToast(`🎉 Coupon ${code} applied successfully!`);
      renderCheckoutSummary();
    } else {
      showToast("❌ Invalid Coupon Code");
    }
  };

  // Quick select coupon click
  window.selectQuickCoupon = function(code) {
    const input = document.getElementById('coupon-input');
    if (input) {
      input.value = code;
      applyCoupon();
    }
  };

  // Payment Method Selection Tabs
  window.selectPaymentMethod = function(method) {
    const tabs = document.querySelectorAll('.payment-tab');
    const sections = document.querySelectorAll('.payment-section');

    tabs.forEach(tab => {
      if (tab.dataset.method === method) {
        tab.classList.add('payment-tab--active');
      } else {
        tab.classList.remove('payment-tab--active');
      }
    });

    sections.forEach(sec => {
      if (sec.id === `payment-sec-${method}`) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  };

  // Credit Card Live Mirror Input Listeners
  const cardNum = document.getElementById('cc-number');
  const cardName = document.getElementById('cc-name');
  const cardExpiry = document.getElementById('cc-expiry');

  if (cardNum) {
    cardNum.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      let matches = v.match(/\d{4,16}/g);
      let match = matches && matches[0] || '';
      let parts = [];

      for (let i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4));
      }

      if (parts.length > 0) {
        e.target.value = parts.join(' ');
      } else {
        e.target.value = v;
      }
      
      const vNum = document.getElementById('card-view-number');
      if (vNum) vNum.textContent = e.target.value || '•••• •••• •••• ••••';
    });
  }

  if (cardName) {
    cardName.addEventListener('input', (e) => {
      const vName = document.getElementById('card-view-name');
      if (vName) vName.textContent = e.target.value.toUpperCase() || 'YOUR NAME';
    });
  }

  if (cardExpiry) {
    cardExpiry.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      if (v.length >= 2) {
        e.target.value = v.substring(0, 2) + '/' + v.substring(2, 4);
      } else {
        e.target.value = v;
      }
      const vExp = document.getElementById('card-view-expiry');
      if (vExp) vExp.textContent = e.target.value || 'MM/YY';
    });
  }

  // Autofill Address Details for Demo
  window.autofillDemoAddress = function() {
    const nameInput = document.getElementById('address-name');
    const phoneInput = document.getElementById('address-phone');
    const areaInput = document.getElementById('address-area');
    const pinInput = document.getElementById('address-pin');
    const cityInput = document.getElementById('address-city');

    if (nameInput) nameInput.value = "Neha Verma";
    if (phoneInput) phoneInput.value = "9876543210";
    if (areaInput) areaInput.value = "456, Midtown Heights, Sector 4, Park Road";
    if (pinInput) pinInput.value = "560001";
    if (cityInput) cityInput.value = "My City";

    showToast("📝 Autofilled demo delivery details!");
  };

  // Handle Checkout Form Submission
  const checkoutForm = document.getElementById('checkout-main-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Mock submit validation
      const name = document.getElementById('address-name').value;
      const phone = document.getElementById('address-phone').value;
      const area = document.getElementById('address-area').value;

      if (!name || !phone || !area) {
        showToast("⚠️ Please fill in all delivery details");
        return;
      }

      // Record first item's restaurant name to display on the tracker page
      const merchant = cart.items[0]?.restaurant || "Local Kitchens";
      localStorage.setItem("bb_last_order_merchant", merchant);

      // Show secure BitesPay processing overlay
      const overlay = document.getElementById('processing-overlay');
      if (overlay) {
        overlay.style.display = 'flex';
      }

      // Reset cart
      cart.clear();

      // Redirect to tracker page after 2 seconds
      setTimeout(() => {
        window.location.href = "track.html";
      }, 2000);
    });
  }
}

// ============================================
// 7. ORDER TRACKER TIMELINE SIMULATOR
// ============================================
function initTrackerPage() {
  const steps = [
    { title: "Order Confirmed 🧾", desc: "Sent to the restaurant", time: 0 },
    { title: "Kitchen Preparing Your Feast 🍳", desc: "Chef is frying that tasty meal", time: 4 },
    { title: "Delivery Partner Dispatched 🛵", desc: "Ramesh K. is picking up your package", time: 8 },
    { title: "Driver is Nearby 📍", desc: "Just 2 minutes away on the road", time: 12 },
    { title: "Delivered! Enjoy your meal 🥳", desc: "Handed over safely with hot filter coffee", time: 16 }
  ];

  const merchantName = localStorage.getItem("bb_last_order_merchant") || "MTR — Mavalli Tiffin Rooms";
  const merchantEl = document.getElementById('track-merchant');
  if (merchantEl) {
    merchantEl.textContent = merchantName;
  }

  const timeline = document.getElementById('track-timeline');
  const driverIcon = document.getElementById('driver-svg-courier');
  const progressLine = document.getElementById('track-map-progress-line');

  if (!timeline) return;

  // Render Timeline base
  timeline.innerHTML = steps.map((s, idx) => `
    <div class="track-step" id="step-${idx}">
      <div class="track-step__badge">
        <span class="track-step__num">${idx + 1}</span>
      </div>
      <div class="track-step__content">
        <h4 class="track-step__title">${s.title}</h4>
        <p class="track-step__desc">${s.desc}</p>
      </div>
    </div>
  `).join('');

  // Active steps ticker
  let elapsed = 0;
  
  function updateProgress() {
    steps.forEach((step, idx) => {
      const stepEl = document.getElementById(`step-${idx}`);
      if (stepEl && elapsed >= step.time) {
        stepEl.classList.add('track-step--active');
        if (idx === steps.length - 1 && elapsed >= step.time) {
          stepEl.classList.add('track-step--completed');
        }
      }
    });

    // Move Courier Icon along mock track
    const pct = Math.min(100, (elapsed / 16) * 100);
    if (driverIcon) {
      driverIcon.style.left = `calc(${pct}% - 24px)`;
    }
    if (progressLine) {
      progressLine.style.width = `${pct}%`;
    }

    // Status updates text
    const statusText = document.getElementById('track-status-banner');
    if (statusText) {
      if (elapsed < 4) {
        statusText.innerHTML = `Order accepted by <strong>${merchantName}</strong>.`;
      } else if (elapsed < 8) {
        statusText.innerHTML = `Dish being cooked fresh. Prep time 12 mins.`;
      } else if (elapsed < 12) {
        statusText.innerHTML = `Partner assigned: <strong>Ramesh K. (TVS Apache)</strong>.`;
      } else if (elapsed < 16) {
        statusText.innerHTML = `Ramesh is checking maps. Approaching your block.`;
      } else {
        statusText.innerHTML = `🏆 Order delivered! Enjoy the delicious flavors.`;
        triggerConfetti();
      }
    }

    if (elapsed < 16) {
      elapsed += 1;
      setTimeout(updateProgress, 1000);
    }
  }

  // Kickstart progress loop
  updateProgress();
}

function triggerConfetti() {
  const container = document.getElementById('confetti-wrapper');
  if (!container || container.children.length > 0) return;

  const colors = ['#a3e635', '#fbbf25', '#3366e0', '#f5d1fe', '#ff0000'];
  for (let i = 0; i < 80; i++) {
    const conf = document.createElement('div');
    conf.style.position = 'absolute';
    conf.style.width = `${Math.floor(Math.random() * 8) + 6}px`;
    conf.style.height = `${Math.floor(Math.random() * 12) + 6}px`;
    conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    conf.style.left = `${Math.random() * 100}%`;
    conf.style.top = `-20px`;
    conf.style.borderRadius = '2px';
    conf.style.transform = `rotate(${Math.random() * 360}deg)`;
    conf.style.opacity = Math.random();
    
    const duration = Math.random() * 3 + 2;
    conf.style.animation = `fallConfetti ${duration}s ease-in-out forwards`;
    container.appendChild(conf);
  }

  if (!document.getElementById('confetti-keyframes')) {
    const style = document.createElement('style');
    style.id = 'confetti-keyframes';
    style.textContent = `
      @keyframes fallConfetti {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

// ============================================
// 8. GENERAL BOOTSTRAPPING & ROUTING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Load Cart first
  cart.load();

  // Common setups
  initScrollTop();
  initSmoothScroll();

  // Dynamic route dispatcher
  const path = window.location.pathname.toLowerCase();
  
  if (path.includes('restaurant.html')) {
    initRestaurantPage();
  } else if (path.includes('checkout.html')) {
    initCheckoutPage();
  } else if (path.includes('track.html')) {
    initTrackerPage();
  } else {
    initLandingPage();
  }

  // Cart overlay dismiss
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });
});

// Add fadeIn animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);
