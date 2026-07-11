/* ============================================
   🧪 CraveLabs — JavaScript (Core Logic)
   Clerk Google Auth, Cuisines, Multi-page Shared Cart
   Bento Micro-interactions & Order Tracking Timelines
   ============================================ */

// ============================================
// 1. DATA CENTER: 9 LEGENDARY RESTAURANTS & CATEGORIZED MENUS
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
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');

    if (container) {
      if (this.items.length === 0) {
        container.innerHTML = `
          <div class="cart-empty" style="text-align:center; padding: 48px var(--spacing-24);">
            <div style="font-size:48px; margin-bottom:16px;">🛒</div>
            <p style="color:var(--color-text-muted);">Your cart is empty.<br>Add some delicious dishes!</p>
          </div>
        `;
        if (totalEl) totalEl.textContent = '₹0';
      } else {
        container.innerHTML = this.items.map(item => `
          <div class="cart-item">
            <img class="cart-item__img" src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="cart-item__info">
              <div class="cart-item__name">${item.name}</div>
              <div class="cart-item__restaurant">${item.restaurant}</div>
              <div class="cart-item__controls">
                <button class="cart-item__btn" onclick="cart.updateQty('${item.id}', -1)">−</button>
                <span class="cart-item__qty">${item.qty}</span>
                <button class="cart-item__btn" onclick="cart.updateQty('${item.id}', 1)">+</button>
              </div>
            </div>
            <div class="cart-item__price">₹${item.price * item.qty}</div>
          </div>
        `).join('');
        if (totalEl) totalEl.textContent = `₹${this.getTotal()}`;
      }
    }

    if (typeof renderCheckoutSummary === 'function') {
      renderCheckoutSummary();
    }
  }
};

// ============================================
// 3. SECURE GATE: INTEGRATED CLERK AUTHENTICATION (CDN IMPLEMENTATION)
// ============================================
let userAuthSession = null;

async function initClerkAuth() {
  const userButtonDiv = document.getElementById('clerk-user-button');
  
  if (window.Clerk) {
    try {
      await window.Clerk.load();
      
      // Update global user authentication reference
      userAuthSession = window.Clerk.user;

      if (userButtonDiv) {
        if (window.Clerk.user) {
          window.Clerk.mountUserButton(userButtonDiv);
        } else {
          userButtonDiv.innerHTML = `<button class="btn-ghost btn-sm" onclick="window.Clerk.openSignIn()" style="border-radius: var(--radius-pill); font-weight:700;">Login</button>`;
        }
      }
    } catch (e) {
      console.warn("Clerk load issue, loading generic authentication simulator instead.", e);
      setupMockAuth();
    }
  } else {
    setupMockAuth();
  }
}

// Fallback Mock Authentication UI for demo/environments where Clerk SDK is blocked
function setupMockAuth() {
  const userButtonDiv = document.getElementById('clerk-user-button');
  if (!userButtonDiv) return;

  const mockUser = localStorage.getItem("cravelabs_mock_user");
  if (mockUser) {
    userAuthSession = JSON.parse(mockUser);
    userButtonDiv.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px;">
        <div style="width:32px; height:32px; border-radius:50%; background:var(--color-lime); color:var(--color-void); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:14px; cursor:pointer;" onclick="mockSignOut()">N</div>
        <button class="btn-ghost btn-sm" onclick="mockSignOut()" style="padding:4px 10px; font-size:11px;">Log out</button>
      </div>
    `;
  } else {
    userButtonDiv.innerHTML = `<button class="btn-ghost btn-sm" onclick="mockSignIn()" style="border-radius: var(--radius-pill); font-weight:700;">Login</button>`;
  }
}

window.mockSignIn = function() {
  userAuthSession = { name: "Neha Verma", email: "nehaverma01304@gmail.com" };
  localStorage.setItem("cravelabs_mock_user", JSON.stringify(userAuthSession));
  showToast("🔐 Successfully logged in via Google!");
  setupMockAuth();
};

window.mockSignOut = function() {
  userAuthSession = null;
  localStorage.removeItem("cravelabs_mock_user");
  showToast("🔒 Logged out successfully");
  setupMockAuth();
};

// Enforces login gate before checkout
function verifyUserLogin() {
  if (window.Clerk && window.Clerk.user) {
    return true;
  }
  if (userAuthSession) {
    return true;
  }
  return false;
}

// ============================================
// 4. COMMON SIDE-DRAWER INTERACTIONS
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

// ============================================
// 5. LANDING PAGE CUISINE AND VEG FILTERS
// ============================================
function initLandingPage() {
  // Bento interactive hover grid beams
  document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });

  let currentCuisineFilter = 'all';
  let isVegOnly = false;

  window.filterByCuisine = function(cuisine, btnEl) {
    currentCuisineFilter = cuisine;
    
    // Toggle active filter button
    const buttons = document.querySelectorAll('.filters-group .filter-btn');
    buttons.forEach(btn => btn.classList.remove('filter-btn--active'));
    if (btnEl) btnEl.classList.add('filter-btn--active');
    
    applyFilters();
  };

  window.toggleVegOnlyFilter = function(btnEl) {
    isVegOnly = !isVegOnly;
    if (btnEl) {
      btnEl.classList.toggle('filter-btn--active', isVegOnly);
    }
    applyFilters();
  };

  function applyFilters() {
    const cards = document.querySelectorAll('.restaurant-card');
    cards.forEach(card => {
      const cardCategory = card.dataset.category || '';
      const cardVeg = card.dataset.veg === 'true';

      const matchCuisine = (currentCuisineFilter === 'all' || cardCategory === currentCuisineFilter);
      const matchVeg = (!isVegOnly || cardVeg);

      if (matchCuisine && matchVeg) {
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.3s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Live Instant Search input listener
  const searchInput = document.getElementById('hero-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const restaurantCards = document.querySelectorAll('.restaurant-card');

      restaurantCards.forEach(card => {
        const name = card.querySelector('.restaurant-card__name')?.textContent.toLowerCase() || '';
        const cuisineStr = card.querySelector('.restaurant-card__cuisine')?.textContent.toLowerCase() || '';
        if (name.includes(query) || cuisineStr.includes(query) || query === '') {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

// ============================================
// 6. RESTAURANT DETAILS PAGE & CATEGORY TAB BINDINGS
// ============================================
function initRestaurantPage() {
  const params = new URLSearchParams(window.location.search);
  const restaurantId = params.get('id');
  const restaurant = restaurantsData[restaurantId];

  if (!restaurant) {
    window.location.href = "index.html";
    return;
  }

  document.title = `${restaurant.name} Menu — CraveLabs`;

  const header = document.getElementById('restaurant-detail-header');
  if (header) {
    header.innerHTML = `
      <div class="rest-hero" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.85)), url('${restaurant.image}')">
        <div class="rest-hero__content">
          <div class="rest-hero__eyebrow">
            <span class="badge badge--lime">${restaurant.veg ? '🟢 PURE VEG' : '🔴 VEG & NON-VEG'}</span>
            <span class="badge">📍 ${restaurant.location}</span>
          </div>
          <h1 class="rest-hero__title" style="font-size:48px; font-weight:700; letter-spacing: -1.5px; margin-bottom:8px;">${restaurant.name}</h1>
          <p class="rest-hero__cuisine" style="color:var(--color-text-muted); font-size:16px; margin-bottom:20px;">${restaurant.cuisine}</p>
          <div class="rest-hero__meta">
            <span class="restaurant-card__rating">★ ${restaurant.rating}</span>
            <span class="badge">🛵 ${restaurant.deliveryTime}</span>
            <span class="badge">💵 ${restaurant.costForTwo} for two</span>
          </div>
        </div>
      </div>
    `;
  }

  const menuContainer = document.getElementById('restaurant-menu-container');
  if (menuContainer) {
    let html = `
      <div class="menu-filters">
        <div class="menu-filters__left">
          <button class="filter-btn filter-btn--active" onclick="filterMenu('all')">Full Menu</button>
          <button class="filter-btn" onclick="filterMenu('veg')">🟢 Veg Only</button>
          <button class="filter-btn" onclick="filterMenu('nonveg')">🔴 Non-Veg</button>
        </div>
      </div>
      <div class="menu-grid">
    `;

    restaurant.menu.forEach(item => {
      html += `
        <div class="menu-item animate-in" data-veg="${item.isVeg}">
          <div class="menu-item__details">
            <span class="menu-item__indicator ${item.isVeg ? 'menu-item__indicator--veg' : 'menu-item__indicator--nonveg'}"></span>
            <h3 class="menu-item__name">${item.name}</h3>
            <span class="menu-item__price">₹${item.price}</span>
            <p class="menu-item__desc">${item.desc}</p>
          </div>
          <div class="menu-item__right">
            <img class="menu-item__img" src="${item.image}" alt="${item.name}" loading="lazy">
            <button class="btn-lime btn-sm menu-item__add-btn" 
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

  window.filterMenu = function(filter) {
    const items = document.querySelectorAll('.menu-item');
    const buttons = document.querySelectorAll('.menu-filters button');
    
    buttons.forEach(btn => {
      if (btn.innerText.toLowerCase().includes(filter)) {
        btn.classList.add('filter-btn--active');
      } else {
        btn.classList.remove('filter-btn--active');
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
// 7. CHECKOUT / AUTH GUARD & SIMULATIONS
// ============================================
let activeDiscount = 0;
let appliedCouponCode = "";

function initCheckoutPage() {
  if (cart.items.length === 0) {
    const mainCheckout = document.querySelector('.checkout-layout');
    if (mainCheckout) {
      mainCheckout.innerHTML = `
        <div class="checkout-empty" style="text-align:center; padding: 100px 24px; background:var(--color-panel); border: 1px solid var(--color-border); border-radius:var(--radius-bento);">
          <div style="font-size: 64px; margin-bottom: 24px;">🍱</div>
          <h2 class="text-display" style="margin-bottom: 16px; font-size:32px;">Your basket is empty!</h2>
          <p style="margin-bottom: 32px; color:var(--color-text-muted);">Go back to the homepage to order from CraveLabs' finest restaurants.</p>
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
    const gst = Math.round(subtotal * 0.05);
    
    let discount = 0;
    if (appliedCouponCode === "CRAVE50") {
      discount = Math.min(150, Math.round(subtotal * 0.5));
    } else if (appliedCouponCode === "FIRSTFEED") {
      discount = 200;
    }
    
    const finalTotal = Math.max(0, subtotal + packingFee + deliveryFee + gst - discount);

    container.innerHTML = `
      <div style="margin-bottom: 24px;">
        <h3 class="form-label" style="font-size:16px; margin-bottom:16px; color:#fff;">Order Summary</h3>
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${cart.items.map(item => `
            <div style="display:flex; justify-content:space-between; font-size:14px;">
              <span style="color:var(--color-text-muted);"><span style="color:#fff; font-weight:700;">${item.qty}x</span> ${item.name}</span>
              <span style="font-weight:700; color:#fff;">₹${item.price * item.qty}</span>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div style="border-top:1px dashed var(--color-border); padding-top:16px; display:flex; flex-direction:column; gap:8px; font-size:14px; color:var(--color-text-muted);">
        <div style="display:flex; justify-content:space-between;">
          <span>Subtotal</span>
          <span>₹${subtotal}</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span>Kitchen Packaging</span>
          <span>₹${packingFee}</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span>Courier Partner Fee</span>
          <span>${deliveryFee === 0 ? '<span style="color:var(--color-lime)">FREE</span>' : `₹${deliveryFee}`}</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span>GST (5%)</span>
          <span>₹${gst}</span>
        </div>
        ${discount > 0 ? `
          <div style="display:flex; justify-content:space-between; color:var(--color-lime); font-weight:700;">
            <span>Coupon (${appliedCouponCode})</span>
            <span>- ₹${discount}</span>
          </div>
        ` : ''}
        <div style="display:flex; justify-content:space-between; font-size:18px; font-weight:700; color:#fff; border-top:1px solid var(--color-border); padding-top:16px; margin-top:8px;">
          <span>Grand Total</span>
          <span style="color:var(--color-lime);">₹${finalTotal}</span>
        </div>
      </div>
    `;

    const payBtn = document.getElementById('checkout-pay-btn');
    if (payBtn) {
      payBtn.textContent = `Confirm & Pay ₹${finalTotal}`;
    }
  };

  renderCheckoutSummary();

  // Coupon apply bindings
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

  window.selectQuickCoupon = function(code) {
    const input = document.getElementById('coupon-input');
    if (input) {
      input.value = code;
      applyCoupon();
    }
  };

  // Payment tab actions
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

  // CC Input mirror listeners
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

  // Address Autofill action
  window.autofillDemoAddress = function() {
    const name = document.getElementById('address-name');
    const phone = document.getElementById('address-phone');
    const area = document.getElementById('address-area');
    const pin = document.getElementById('address-pin');
    const city = document.getElementById('address-city');

    if (name) name.value = "Neha Verma";
    if (phone) phone.value = "9876543210";
    if (area) area.value = "456, Midtown Heights, Sector 4, Park Road";
    if (pin) pin.value = "560001";
    if (city) city.value = "My City";

    showToast("📝 Autofilled demo delivery details!");
  };

  // Handle Form submit with Clerk Check
  const checkoutForm = document.getElementById('checkout-main-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Enforce auth gate
      if (!verifyUserLogin()) {
        showToast("🔒 Clerk Google login required before placing order");
        if (window.Clerk) {
          window.Clerk.openSignIn();
        } else {
          // Open mock login prompts if Clerk is not available
          mockSignIn();
        }
        return;
      }

      // Address validations
      const name = document.getElementById('address-name').value;
      const phone = document.getElementById('address-phone').value;
      const area = document.getElementById('address-area').value;

      if (!name || !phone || !area) {
        showToast("⚠️ Please fill in all delivery details");
        return;
      }

      // Save order merchant for tracker
      const merchant = cart.items[0]?.restaurant || "Local Kitchens";
      localStorage.setItem("bb_last_order_merchant", merchant);

      // Trigger overlay verification spinner
      const overlay = document.getElementById('processing-overlay');
      if (overlay) {
        overlay.style.display = 'flex';
      }

      cart.clear();

      setTimeout(() => {
        window.location.href = "track.html";
      }, 2000);
    });
  }
}

// ============================================
// 8. ORDER TIMELINE & ROAD MAP TRACKER (NEON STYLE)
// ============================================
function initTrackerPage() {
  const steps = [
    { title: "Order Verified by Clerk 🔐", desc: "User session authenticated safely", time: 0 },
    { title: "Confirmed by Merchant 🧾", desc: "Sent to chef cooking queue", time: 3 },
    { title: "Preparing Fresh Meal 🍳", desc: "Quality taste guidelines active", time: 6 },
    { title: "Rider Dispatched 🛵", desc: "Courier Ramesh K. on his TVS bike", time: 9 },
    { title: "Arrived at Destination 📍", desc: "Confetti triggers live now!", time: 12 }
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

  timeline.innerHTML = steps.map((s, idx) => `
    <div class="timeline-step" id="step-${idx}">
      <div class="timeline-step__badge">
        <span>${idx + 1}</span>
      </div>
      <div style="flex:1;">
        <h4 class="timeline-step__title">${s.title}</h4>
        <p class="timeline-step__desc">${s.desc}</p>
      </div>
    </div>
  `).join('');

  let elapsed = 0;
  
  function updateProgress() {
    steps.forEach((step, idx) => {
      const stepEl = document.getElementById(`step-${idx}`);
      if (stepEl && elapsed >= step.time) {
        stepEl.classList.add('timeline-step--active');
        if (idx === steps.length - 1 && elapsed >= step.time) {
          stepEl.classList.add('timeline-step--completed');
        }
      }
    });

    const pct = Math.min(100, (elapsed / 12) * 100);
    if (driverIcon) {
      driverIcon.style.left = `calc(${pct}% - 25px)`;
    }
    if (progressLine) {
      progressLine.style.width = `${pct}%`;
    }

    const statusBanner = document.getElementById('track-status-banner');
    if (statusBanner) {
      if (elapsed < 3) {
        statusBanner.innerHTML = `Order authenticated. Waiting for kitchen confirmation...`;
      } else if (elapsed < 6) {
        statusBanner.innerHTML = `Order cooking fresh at <strong>${merchantName}</strong>.`;
      } else if (elapsed < 9) {
        statusBanner.innerHTML = `Courier Ramesh K. is picking up package...`;
      } else if (elapsed < 12) {
        statusBanner.innerHTML = `Ramesh K. is crossing the signal near you.`;
      } else {
        statusBanner.innerHTML = `🏆 Delivered! Order dispatched successfully.`;
        triggerConfettiCanvas();
      }
    }

    if (elapsed < 12) {
      elapsed += 1;
      setTimeout(updateProgress, 1000);
    }
  }

  updateProgress();
}

// Confetti fallback creation
function triggerConfettiCanvas() {
  const container = document.getElementById('confetti-canvas-overlay');
  if (!container || container.children.length > 0) return;

  const colors = ['#a3e635', '#8b5cf6', '#f43f5e', '#3b82f6', '#ffffff'];
  for (let i = 0; i < 90; i++) {
    const dot = document.createElement('div');
    dot.style.position = 'absolute';
    dot.style.width = `${Math.floor(Math.random() * 8) + 6}px`;
    dot.style.height = `${Math.floor(Math.random() * 10) + 6}px`;
    dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `-20px`;
    dot.style.transform = `rotate(${Math.random() * 360}deg)`;
    dot.style.borderRadius = '3px';
    dot.style.opacity = Math.random();
    
    const duration = Math.random() * 2 + 2;
    dot.style.animation = `fallDot ${duration}s ease-in-out forwards`;
    container.appendChild(dot);
  }

  if (!document.getElementById('confetti-fall-keyframes')) {
    const style = document.createElement('style');
    style.id = 'confetti-fall-keyframes';
    style.textContent = `
      @keyframes fallDot {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(105vh) rotate(540deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

// ============================================
// 9. GENERAL INITS & ENTRY POINTS
// ============================================
window.addToCart = function(id, name, price, image, restaurant) {
  cart.add({ id, name, price, image, restaurant });
};

window.openCart = openCart;
window.closeCart = closeCart;

document.addEventListener('DOMContentLoaded', () => {
  // Load local storage cart state
  cart.load();

  // Load Clerk auth
  initClerkAuth();

  // General inits
  initScrollTop();

  // Route dispatcher
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

  // Common bindings
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });
});
