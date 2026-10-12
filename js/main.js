(function () {
  const STORAGE_KEY = 'sole_and_co_inventory';
  const CART_KEY = 'sole_and_co_cart';

  const demoProducts = [
    {
      id: 'NKE-101',
      brand: 'Nike',
      name: 'Air Zoom Pegasus 40',
      category: 'Running',
      price: 159,
      quantity: 18,
      sizes: [6, 7, 8, 9, 10, 11],
      color: 'Midnight / Volt',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      description: 'Responsive cushioning and a trusted fit for everyday miles.'
    },
    {
      id: 'ADS-204',
      brand: 'Adidas',
      name: 'Ultraboost Light',
      category: 'Running',
      price: 189,
      quantity: 12,
      sizes: [5, 6, 7, 8, 9, 10],
      color: 'Core Black / Cloud White',
      image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
      description: 'A lightweight, energy-returning runner with premium comfort.'
    },
    {
      id: 'NB-312',
      brand: 'New Balance',
      name: 'FuelCell Rebel v4',
      category: 'Running',
      price: 174,
      quantity: 9,
      sizes: [6, 7, 8, 9, 10, 11],
      color: 'Sea Salt / Electric',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
      description: 'Explosive cushioning with a sleek, race-ready silhouette.'
    },
    {
      id: 'ASC-421',
      brand: 'ASICS',
      name: 'GT-1000 11',
      category: 'Running',
      price: 146,
      quantity: 24,
      sizes: [6, 7, 8, 9, 10, 12],
      color: 'Abyss / Pearl',
      image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=900&q=80',
      description: 'Stable support and smooth transitions for daily training.'
    },
    {
      id: 'PUM-512',
      brand: 'Puma',
      name: 'Velocity Nitro 3',
      category: 'Running',
      price: 139,
      quantity: 16,
      sizes: [5, 6, 7, 8, 9, 10, 11],
      color: 'Carmine / White',
      image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=900&q=80',
      description: 'Built for speed with a responsive foam system and versatile fit.'
    },
    {
      id: 'NKE-220',
      brand: 'Nike',
      name: 'Jordan Max Aura 4',
      category: 'Lifestyle',
      price: 154,
      quantity: 11,
      sizes: [6, 7, 8, 9, 10, 11],
      color: 'Sail / Brown',
      image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=900&q=80',
      description: 'A clean, layered lifestyle sneaker with elevated comfort.'
    },
    {
      id: 'ADS-335',
      brand: 'Adidas',
      name: 'Campus 00s',
      category: 'Lifestyle',
      price: 120,
      quantity: 20,
      sizes: [6, 7, 8, 9, 10, 11, 12],
      color: 'Cloud White / Core Black',
      image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=900&q=80',
      description: 'An easygoing classic for everyday wear and versatile styling.'
    },
    {
      id: 'CVS-456',
      brand: 'Converse',
      name: 'Chuck Taylor All Star',
      category: 'Lifestyle',
      price: 92,
      quantity: 27,
      sizes: [5, 6, 7, 8, 9, 10, 11],
      color: 'Natural / Black',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
      description: 'Iconic canvas styling with a timeless silhouette.'
    },
    {
      id: 'PUM-781',
      brand: 'Puma',
      name: 'Clyde Court',
      category: 'Lifestyle',
      price: 108,
      quantity: 14,
      sizes: [6, 7, 8, 9, 10, 11],
      color: 'Puma White / Peacoat',
      image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80',
      description: 'Retro-inspired comfort with modern support and street-ready details.'
    },
    {
      id: 'NKE-340',
      brand: 'Nike',
      name: 'LeBron XIX',
      category: 'Basketball',
      price: 209,
      quantity: 8,
      sizes: [7, 8, 9, 10, 11, 12],
      color: 'University Red / Black',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80',
      description: 'High-impact cushioning and traction for explosive court movement.'
    },
    {
      id: 'ADS-602',
      brand: 'Adidas',
      name: 'Crazy Explosive',
      category: 'Basketball',
      price: 198,
      quantity: 10,
      sizes: [6, 7, 8, 9, 10, 11],
      color: 'Solar Red / Core Black',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80',
      description: 'A springy on-court silhouette built for quick cuts and vertical bursts.'
    },
    {
      id: 'PUM-891',
      brand: 'Puma',
      name: 'MB.03',
      category: 'Basketball',
      price: 164,
      quantity: 13,
      sizes: [6, 7, 8, 9, 10, 11],
      color: 'Puma Black / Silver',
      image: 'https://images.unsplash.com/photo-1600185365926-3a2d5d4f8bf4?auto=format&fit=crop&w=900&q=80',
      description: 'A bold signature performance style engineered for impact absorption.'
    },
    {
      id: 'NKE-430',
      brand: 'Nike',
      name: 'Metcon 9',
      category: 'Training',
      price: 168,
      quantity: 7,
      sizes: [6, 7, 8, 9, 10, 11],
      color: 'Metallic Silver / Black',
      image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80',
      description: 'Stable, durable support for pushes, pulls, carries, and quick lifts.'
    },
    {
      id: 'ADS-703',
      brand: 'Adidas',
      name: 'Powerlift 5',
      category: 'Training',
      price: 176,
      quantity: 6,
      sizes: [6, 7, 8, 9, 10, 11, 12],
      color: 'Team Navy / Off White',
      image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
      description: 'A firm and balanced training companion for strength-driven workouts.'
    },
    {
      id: 'ASC-909',
      brand: 'ASICS',
      name: 'Noosa Tri 12',
      category: 'Casual',
      price: 134,
      quantity: 22,
      sizes: [5, 6, 7, 8, 9, 10],
      color: 'Lime / White',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
      description: 'Lightweight comfort with a sporty casual finish for everyday wear.'
    },
    {
      id: 'NB-520',
      brand: 'New Balance',
      name: '530',
      category: 'Casual',
      price: 101,
      quantity: 30,
      sizes: [6, 7, 8, 9, 10, 11, 12],
      color: 'Cream / Taupe',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
      description: 'A distinct retro-inspired everyday sneaker with an easy, refined fit.'
    }
  ];

  function parseStorageItem(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function normalizeProduct(product) {
    const sizes = Array.isArray(product.sizes)
      ? product.sizes
      : String(product.sizes || '')
          .split(',')
          .map((size) => Number(String(size).trim()))
          .filter((value) => !Number.isNaN(value));

    return {
      id: String(product.id || '').trim(),
      brand: String(product.brand || '').trim(),
      name: String(product.name || product.shoeName || '').trim(),
      category: String(product.category || 'Casual').trim(),
      price: Number(product.price || 0),
      quantity: Number(product.quantity || product.inventory || 0),
      sizes: sizes.map((size) => Number(size)),
      color: String(product.color || '').trim(),
      image: String(product.image || product.imageUrl || '').trim(),
      description: String(product.description || '').trim(),
    };
  }

  function getDefaultProducts() {
    return demoProducts.map((product) => normalizeProduct(product));
  }

  function saveProducts(products) {
    const normalized = (products || []).map((product) => normalizeProduct(product));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  }

  function getProducts() {
    const savedProducts = parseStorageItem(STORAGE_KEY, null);
    if (!Array.isArray(savedProducts) || savedProducts.length === 0) {
      saveProducts(getDefaultProducts());
      return getProducts();
    }
    return savedProducts.map((product) => normalizeProduct(product));
  }

  function seedDemoInventory() {
    saveProducts(getDefaultProducts());
    return getProducts();
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Number(value) || 0);
  }

  window.SoleAndCo = {
    STORAGE_KEY,
    CART_KEY,
    getProducts,
    saveProducts,
    seedDemoInventory,
    formatCurrency,
    normalizeProduct
  };

  function buildProductCard(product) {
    const lowStock = product.quantity < 5;
    return `
      <article class="product-card" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-info">
          <div class="product-meta">
            <span class="product-brand">${product.brand}</span>
            <span class="stock-pill ${lowStock ? 'low-stock' : ''}">${lowStock ? 'Low stock' : 'In stock'}</span>
          </div>
          <h3>${product.name}</h3>
          <div class="product-category">${product.category}</div>
          <div class="product-price">${formatCurrency(product.price)}</div>
          <p class="product-description">${product.description}</p>
          <div class="product-actions">
            <button class="secondary" data-action="details" data-id="${product.id}" type="button">Quick View</button>
            <button class="primary" data-action="add" data-id="${product.id}" type="button">Add to cart</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderHomePage() {
    const productGrid = document.getElementById('productGrid');
    const resultsSummary = document.getElementById('resultsSummary');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const brandFilter = document.getElementById('brandFilter');
    const sortSelect = document.getElementById('sortSelect');

    if (!productGrid || !resultsSummary) {
      return;
    }

    const products = getProducts();
    const categories = [...new Set(products.map((product) => product.category))].sort();
    const brands = [...new Set(products.map((product) => product.brand))].sort();

    categoryFilter.innerHTML = '<option value="all">All categories</option>' + categories.map((category) => `<option value="${category}">${category}</option>`).join('');
    brandFilter.innerHTML = '<option value="all">All brands</option>' + brands.map((brand) => `<option value="${brand}">${brand}</option>`).join('');

    const applyFilters = () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const selectedCategory = categoryFilter.value;
      const selectedBrand = brandFilter.value;
      const sortValue = sortSelect.value;

      let filtered = products.filter((product) => {
        const matchesSearch = !searchTerm || `${product.name} ${product.brand}`.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
        return matchesSearch && matchesCategory && matchesBrand;
      });

      if (sortValue === 'price-asc') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (sortValue === 'price-desc') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      } else if (sortValue === 'name-asc') {
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
      }

      resultsSummary.textContent = `${filtered.length} product${filtered.length === 1 ? '' : 's'} matched`;

      if (!filtered.length) {
        productGrid.innerHTML = '<div class="empty-state">No shoes match your selected filters.</div>';
        return;
      }

      productGrid.innerHTML = filtered.map((product) => buildProductCard(product)).join('');
    };

    searchInput.addEventListener('input', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    brandFilter.addEventListener('change', applyFilters);
    sortSelect.addEventListener('change', applyFilters);

    document.getElementById('shopNowBtn')?.addEventListener('click', () => {
      document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    applyFilters();
  }

  function getCart() {
    return parseStorageItem(CART_KEY, []);
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function readCartDetails() {
    const products = getProducts();
    return getCart().map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return product ? { ...item, product } : null;
    }).filter(Boolean);
  }

  function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartBadge = document.getElementById('cartBadge');
    const cartTotal = document.getElementById('cartTotal');
    if (!cartItems || !cartBadge || !cartTotal) {
      return;
    }

    const details = readCartDetails();
    const total = details.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const itemCount = details.reduce((sum, item) => sum + item.quantity, 0);

    cartBadge.textContent = String(itemCount);
    cartTotal.textContent = formatCurrency(total);

    if (!details.length) {
      cartItems.innerHTML = '<div class="empty-state">Your cart is empty.</div>';
      return;
    }

    cartItems.innerHTML = details.map((item) => `
      <div class="cart-item">
        <img src="${item.product.image}" alt="${item.product.name}" />
        <div>
          <h3>${item.product.name}</h3>
          <p>${formatCurrency(item.product.price)}</p>
          <div class="quantity-controls">
            <button class="qty-button" data-action="decrease-qty" data-id="${item.product.id}" type="button">-</button>
            <span>${item.quantity}</span>
            <button class="qty-button" data-action="increase-qty" data-id="${item.product.id}" type="button">+</button>
          </div>
        </div>
        <div class="cart-item-actions">
          <strong>${formatCurrency(item.product.price * item.quantity)}</strong>
          <button class="qty-button" data-action="remove-item" data-id="${item.product.id}" type="button">×</button>
        </div>
      </div>
    `).join('');
  }

  function updateCartItem(productId, delta) {
    const cart = getCart();
    const itemIndex = cart.findIndex((item) => item.id === productId);
    if (itemIndex === -1) {
      return;
    }

    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }

    saveCart(cart);
    renderCart();
  }

  function renderHomeInteractions() {
    const productGrid = document.getElementById('productGrid');
    const cartPanel = document.getElementById('cartPanel');
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const productModal = document.getElementById('productModal');
    const productModalBody = document.getElementById('productModalBody');
    const closeProductModal = document.getElementById('closeProductModal');
    const cartItemsContainer = document.getElementById('cartItems');

    productGrid?.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button) {
        return;
      }

      const productId = button.dataset.id;
      const action = button.dataset.action;
      if (!productId) {
        return;
      }

      const product = getProducts().find((entry) => entry.id === productId);
      if (!product) {
        return;
      }

      if (action === 'details') {
        productModalBody.innerHTML = `
          <div class="product-details">
            <img src="${product.image}" alt="${product.name}" />
            <div>
              <p class="eyebrow">${product.category}</p>
              <h2>${product.name}</h2>
              <div class="detail-price">${formatCurrency(product.price)}</div>
              <div class="detail-meta">
                <span>${product.brand}</span>
                <span>${product.color}</span>
                <span>${product.quantity} in stock</span>
              </div>
              <p>${product.description}</p>
              <div class="sizes-list">${product.sizes.map((size) => `<span class="size-badge">${size}</span>`).join('')}</div>
              <button class="btn btn-primary full-width" type="button" data-action="add" data-id="${product.id}">Add to cart</button>
            </div>
          </div>
        `;
        productModal.classList.remove('hidden');
      }

      if (action === 'add') {
        const cart = getCart();
        const existing = cart.find((item) => item.id === productId);
        if (existing) {
          existing.quantity += 1;
        } else {
          cart.push({ id: productId, quantity: 1 });
        }
        saveCart(cart);
        renderCart();
        cartPanel?.classList.add('open');
      }
    });

    productModalBody?.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button || button.dataset.action !== 'add') {
        return;
      }

      const productId = button.dataset.id;
      const cart = getCart();
      const existing = cart.find((item) => item.id === productId);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ id: productId, quantity: 1 });
      }
      saveCart(cart);
      renderCart();
      cartPanel?.classList.add('open');
      productModal?.classList.add('hidden');
    });

    cartToggleBtn?.addEventListener('click', () => {
      cartPanel?.classList.toggle('open');
    });

    closeCartBtn?.addEventListener('click', () => {
      cartPanel?.classList.remove('open');
    });

    closeProductModal?.addEventListener('click', () => {
      productModal?.classList.add('hidden');
    });

    productModal?.addEventListener('click', (event) => {
      if (event.target === productModal) {
        productModal.classList.add('hidden');
      }
    });

    cartItemsContainer?.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button) {
        return;
      }
      const productId = button.dataset.id;
      const action = button.dataset.action;

      if (action === 'increase-qty') {
        updateCartItem(productId, 1);
      }

      if (action === 'decrease-qty') {
        updateCartItem(productId, -1);
      }

      if (action === 'remove-item') {
        const cart = getCart().filter((item) => item.id !== productId);
        saveCart(cart);
        renderCart();
      }
    });
  }

  function showAlert(message, type) {
    const alertBox = document.getElementById('inventoryAlert');
    if (!alertBox) {
      return;
    }

    alertBox.textContent = message;
    alertBox.classList.remove('success', 'error');
    alertBox.classList.add(type === 'success' ? 'success' : 'error');
    alertBox.classList.add('show');
    window.clearTimeout(showAlert.timeoutId);
    showAlert.timeoutId = window.setTimeout(() => {
      alertBox.classList.remove('show');
    }, 2600);
  }

  function renderInventoryStats() {
    const statsContainer = document.getElementById('inventoryStats');
    if (!statsContainer) {
      return;
    }

    const products = getProducts();
    const totalProducts = products.length;
    const totalUnits = products.reduce((sum, product) => sum + product.quantity, 0);
    const lowStockCount = products.filter((product) => product.quantity < 5).length;
    const categories = new Set(products.map((product) => product.category)).size;

    statsContainer.innerHTML = `
      <div class="stat-card">
        <p>Total products</p>
        <strong>${totalProducts}</strong>
      </div>
      <div class="stat-card">
        <p>Units in stock</p>
        <strong>${totalUnits}</strong>
      </div>
      <div class="stat-card">
        <p>Categories</p>
        <strong>${categories}</strong>
      </div>
      <div class="stat-card">
        <p>Low stock</p>
        <strong>${lowStockCount}</strong>
      </div>
    `;
  }

  function renderInventoryTable() {
    const tableBody = document.getElementById('inventoryTableBody');
    const emptyState = document.getElementById('inventoryEmptyState');
    const searchInput = document.getElementById('inventorySearch');
    const categoryFilter = document.getElementById('inventoryCategoryFilter');
    const sortSelect = document.getElementById('inventorySort');

    if (!tableBody || !categoryFilter || !sortSelect) {
      return;
    }

    const products = getProducts();
    const categories = [...new Set(products.map((product) => product.category))].sort();
    categoryFilter.innerHTML = '<option value="all">All categories</option>' + categories.map((category) => `<option value="${category}">${category}</option>`).join('');

    const applyFilters = () => {
      const searchTerm = searchInput?.value.trim().toLowerCase() || '';
      const selectedCategory = categoryFilter.value;
      const selectedSort = sortSelect.value;

      let filtered = products.filter((product) => {
        const matchesSearch = !searchTerm || `${product.id} ${product.name} ${product.brand}`.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });

      if (selectedSort === 'price-asc') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (selectedSort === 'price-desc') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      } else if (selectedSort === 'stock-desc') {
        filtered = filtered.sort((a, b) => b.quantity - a.quantity);
      } else {
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (!filtered.length) {
        tableBody.innerHTML = '';
        emptyState?.classList.remove('hidden');
        return;
      }

      emptyState?.classList.add('hidden');
      tableBody.innerHTML = filtered.map((product) => `
        <tr>
          <td><img src="${product.image}" alt="${product.name}" /></td>
          <td>${product.id}</td>
          <td>
            <strong>${product.name}</strong>
            ${product.quantity < 5 ? '<div class="stock-pill low-stock">Low stock</div>' : ''}
          </td>
          <td>${product.brand}</td>
          <td>${product.category}</td>
          <td>${formatCurrency(product.price)}</td>
          <td>${product.quantity}</td>
          <td>
            <div class="inventory-actions">
              <button type="button" class="edit" data-action="edit" data-id="${product.id}">Edit</button>
              <button type="button" class="delete" data-action="delete" data-id="${product.id}">Delete</button>
            </div>
          </td>
        </tr>
      `).join('');
    };

    searchInput?.addEventListener('input', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    sortSelect.addEventListener('change', applyFilters);

    applyFilters();
  }

  function openProductModal(mode, product = null) {
    const modal = document.getElementById('productModal');
    if (!modal) {
      return;
    }

    const title = document.getElementById('productModalTitle');
    const form = document.getElementById('shoeForm');
    const productIdField = document.getElementById('productId');
    const brandField = document.getElementById('brand');
    const nameField = document.getElementById('shoeName');
    const categoryField = document.getElementById('category');
    const priceField = document.getElementById('price');
    const quantityField = document.getElementById('inventory');
    const sizesField = document.getElementById('sizes');
    const colorField = document.getElementById('color');
    const imageUrlField = document.getElementById('imageUrl');
    const descriptionField = document.getElementById('description');
    const errors = document.getElementById('formErrors');

    if (mode === 'edit' && product) {
      title.textContent = 'Edit shoe';
      form.dataset.editingId = product.id;
      productIdField.value = product.id;
      brandField.value = product.brand;
      nameField.value = product.name;
      categoryField.value = product.category;
      priceField.value = product.price;
      quantityField.value = product.quantity;
      sizesField.value = product.sizes.join(', ');
      colorField.value = product.color;
      imageUrlField.value = product.image;
      descriptionField.value = product.description;
    } else {
      title.textContent = 'Add new shoe';
      form.dataset.editingId = '';
      form.reset();
    }

    errors.textContent = '';
    modal.classList.remove('hidden');
  }

  function handleInventoryFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formErrors = document.getElementById('formErrors');
    const fields = {
      id: document.getElementById('productId').value.trim(),
      brand: document.getElementById('brand').value.trim(),
      name: document.getElementById('shoeName').value.trim(),
      category: document.getElementById('category').value.trim(),
      price: Number(document.getElementById('price').value),
      quantity: Number(document.getElementById('inventory').value),
      sizes: document.getElementById('sizes').value.trim(),
      color: document.getElementById('color').value.trim(),
      image: document.getElementById('imageUrl').value.trim(),
      description: document.getElementById('description').value.trim(),
    };

    if (!fields.id || !fields.brand || !fields.name || !fields.category || !fields.color || !fields.image || !fields.description || !fields.sizes || !Number.isFinite(fields.price) || !Number.isFinite(fields.quantity)) {
      formErrors.textContent = 'Please complete all required fields before saving.';
      return;
    }

    if (fields.price <= 0 || fields.quantity < 0) {
      formErrors.textContent = 'Price must be greater than 0 and inventory cannot be negative.';
      return;
    }

    const products = getProducts();
    const editingId = form.dataset.editingId;
    const duplicateId = products.some((product) => product.id.toLowerCase() === fields.id.toLowerCase() && product.id !== editingId);
    if (duplicateId) {
      formErrors.textContent = 'Product ID already exists. Please choose a unique ID.';
      return;
    }

    const productPayload = normalizeProduct({
      id: fields.id,
      brand: fields.brand,
      name: fields.name,
      category: fields.category,
      price: fields.price,
      quantity: fields.quantity,
      sizes: fields.sizes,
      color: fields.color,
      image: fields.image,
      description: fields.description,
    });

    let nextProducts = [...products];
    if (editingId) {
      nextProducts = nextProducts.map((product) => product.id === editingId ? productPayload : product);
      showAlert('Shoe updated successfully.', 'success');
    } else {
      nextProducts.push(productPayload);
      showAlert('New shoe added successfully.', 'success');
    }

    saveProducts(nextProducts);
    renderInventoryStats();
    renderInventoryTable();
    document.getElementById('productModal')?.classList.add('hidden');
    form.reset();
  }

  function handleInventoryActions() {
    const inventoryTable = document.getElementById('inventoryTableBody');
    const addButton = document.getElementById('openAddModalBtn');
    const resetButton = document.getElementById('resetInventoryBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelModalBtn = document.getElementById('cancelModalBtn');
    const modal = document.getElementById('productModal');
    const form = document.getElementById('shoeForm');

    addButton?.addEventListener('click', () => openProductModal('create'));
    resetButton?.addEventListener('click', () => {
      seedDemoInventory();
      renderInventoryStats();
      renderInventoryTable();
      showAlert('Demo inventory restored.', 'success');
    });

    closeModalBtn?.addEventListener('click', () => {
      modal?.classList.add('hidden');
      form?.reset();
    });

    cancelModalBtn?.addEventListener('click', () => {
      modal?.classList.add('hidden');
      form?.reset();
    });

    inventoryTable?.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button) {
        return;
      }

      const productId = button.dataset.id;
      const action = button.dataset.action;
      const products = getProducts();
      const product = products.find((entry) => entry.id === productId);

      if (!product) {
        return;
      }

      if (action === 'edit') {
        openProductModal('edit', product);
      }

      if (action === 'delete') {
        const confirmed = window.confirm(`Remove ${product.name} from inventory?`);
        if (!confirmed) {
          return;
        }

        const nextProducts = products.filter((entry) => entry.id !== productId);
        saveProducts(nextProducts);
        renderInventoryStats();
        renderInventoryTable();
        showAlert(`${product.name} was removed from inventory.`, 'success');
      }
    });

    form?.addEventListener('submit', handleInventoryFormSubmit);
  }

  function renderAnalyticsPage() {
    const statsContainer = document.getElementById('analyticsStats');
    const topProductsTable = document.getElementById('topProductsTable');
    if (!statsContainer || !topProductsTable) {
      return;
    }

    const products = getProducts();
    const categoryTotals = products.reduce((accumulator, product) => {
      accumulator[product.category] = (accumulator[product.category] || 0) + product.price * product.quantity;
      return accumulator;
    }, {});

    const totalInventory = products.reduce((sum, product) => sum + product.quantity, 0);
    const averagePrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;
    const lowStock = products.filter((product) => product.quantity < 5).length;
    const topProduct = [...products].sort((a, b) => b.quantity - a.quantity)[0];

    statsContainer.innerHTML = `
      <div class="stat-card">
        <p>Inventory value</p>
        <strong>${formatCurrency(Object.values(categoryTotals).reduce((sum, value) => sum + value, 0))}</strong>
      </div>
      <div class="stat-card">
        <p>Units available</p>
        <strong>${totalInventory}</strong>
      </div>
      <div class="stat-card">
        <p>Avg. price</p>
        <strong>${formatCurrency(averagePrice)}</strong>
      </div>
      <div class="stat-card">
        <p>Low stock SKUs</p>
        <strong>${lowStock}</strong>
      </div>
    `;

    topProductsTable.innerHTML = [...products].sort((a, b) => b.quantity - a.quantity).slice(0, 6).map((product) => `
      <tr>
        <td>${product.brand}</td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${formatCurrency(product.price)}</td>
        <td>${product.quantity}</td>
      </tr>
    `).join('');

    const revenueLabels = Object.keys(categoryTotals);
    const revenueValues = Object.values(categoryTotals);
    const inventoryValues = Object.keys(categoryTotals).map((category) => {
      const total = products.filter((product) => product.category === category).reduce((sum, product) => sum + product.quantity, 0);
      return total;
    });
    const trendValues = [28, 56, 48, 74, 82, 98, 110];

    new Chart(document.getElementById('categoryRevenueChart'), {
      type: 'bar',
      data: {
        labels: revenueLabels,
        datasets: [{
          label: 'Inventory value',
          data: revenueValues,
          backgroundColor: ['#2d3e32', '#76876b', '#bca995', '#d7c4a4', '#869b90']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, ticks: { callback: (value) => formatCurrency(value) } } }
      }
    });

    new Chart(document.getElementById('inventoryMixChart'), {
      type: 'doughnut',
      data: {
        labels: revenueLabels,
        datasets: [{
          data: inventoryValues,
          backgroundColor: ['#2d3e32', '#76876b', '#bca995', '#d7c4a4', '#869b90']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } }
      }
    });

    new Chart(document.getElementById('salesTrendChart'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Weekly sales index',
          data: trendValues,
          borderColor: '#2d3e32',
          backgroundColor: 'rgba(45, 62, 50, 0.12)',
          fill: true,
          tension: 0.38
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: false }
        }
      }
    });

    if (topProduct) {
      document.title = `Sole & Co. | ${topProduct.name}`;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        seedDemoInventory();
      }
    } catch (error) {
      console.warn('Local storage unavailable. Using demo defaults.', error);
    }

    const page = document.body.dataset.page;

    if (page === 'home') {
      renderHomePage();
      renderCart();
      renderHomeInteractions();
    }

    if (page === 'manage') {
      renderInventoryStats();
      renderInventoryTable();
      handleInventoryActions();
    }

    if (page === 'analytics') {
      renderAnalyticsPage();
    }
  });
})();
