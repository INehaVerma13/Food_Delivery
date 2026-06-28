/* ============================================
   🍽️ BengaluruBites — JavaScript
   Cart, Filters, Interactions
   ============================================ */

// ============================================
// CART STATE
// ============================================
const cart = {
  items: [],

  add(dish) {
    const existing = this.items.find(item => item.id === dish.id);
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({ ...dish, qty: 1 });
    }
    this.render();
    showToast(`${dish.name} added to cart`);
    updateCartBadge();
  },

  remove(id) {
    this.items = this.items.filter(item => item.id !== id);
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
    const countEl = document.getElementById('cart-count');

    if (!container) return;

    if (this.items.length === 0) {
      container.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty__icon">🛒</div>
          <p class="cart-empty__text">Your cart is empty.<br>Add some delicious dishes!</p>
        </div>
      `;
      if (totalEl) totalEl.textContent = '₹0';
      return;
    }

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
};

// ============================================
// CART SIDEBAR TOGGLE
// ============================================
function openCart() {
  document.getElementById('cart-overlay').classList.add('cart-overlay--open');
  document.getElementById('cart-sidebar').classList.add('cart-sidebar--open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('cart-overlay--open');
  document.getElementById('cart-sidebar').classList.remove('cart-sidebar--open');
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

// ============================================
// TOAST NOTIFICATION
// ============================================
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

// ============================================
// MOBILE NAV TOGGLE
// ============================================
function toggleMobileNav() {
  const nav = document.getElementById('main-nav');
  nav.classList.toggle('nav--mobile-open');
}

// ============================================
// SCROLL TO TOP
// ============================================
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
// CATEGORY FILTER
// ============================================
let activeCategory = 'all';

function filterByCategory(category) {
  activeCategory = category;
  const cards = document.querySelectorAll('.restaurant-card');
  const categoryCards = document.querySelectorAll('.category-card');

  // Update active category card
  categoryCards.forEach(card => {
    if (card.dataset.category === category || category === 'all') {
      card.style.opacity = '1';
    } else {
      card.style.opacity = '0.6';
    }
  });

  // Filter restaurants
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = '';
      card.style.animation = 'fadeIn 0.3s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
function initSearch() {
  const searchInput = document.getElementById('hero-search');
  if (!searchInput) return;

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

// ============================================
// ADD TO CART FROM DISH CARDS
// ============================================
function addToCart(id, name, price, image, restaurant) {
  cart.add({ id, name, price, image, restaurant });
}

// ============================================
// INTERSECTION OBSERVER ANIMATIONS
// ============================================
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = entry.target.dataset.rotate
          ? `rotate(${entry.target.dataset.rotate})`
          : 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile nav if open
        document.getElementById('main-nav')?.classList.remove('nav--mobile-open');
      }
    });
  });
}

// ============================================
// INIT ON DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  cart.render();
  updateCartBadge();
  initScrollTop();
  initSearch();
  initAnimations();
  initSmoothScroll();

  // Close cart on overlay click
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);

  // Close cart on Escape
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
