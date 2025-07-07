
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const forgetForm = document.querySelector(".forget-form");
const wrapper = document.querySelector(".wrapper");
const banner = document.getElementById("banner");
const formTitle = document.getElementById("formTitle");

function setTitle(title) {
  formTitle.style.opacity = 0;
  setTimeout(() => {
    formTitle.textContent = title;
    formTitle.style.opacity = 1;
  }, 200);
}

function loginFunction() {
  // wrapper.style.display = "block";
  // banner.style.display = "none";
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  forgetForm.classList.remove("active");
  setTitle("Login");
 
}
function loginFunction() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.add("visible");
  // banner.style.display = "none";
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  forgetForm.classList.remove("active");
  setTitle("Login");
   wrapper.style.left='50%';
  wrapper.style.top='50%';
  wrapper.style.transform='translate(-50%, -50%)';
}


function registerFunction() {
  // wrapper.style.display = "block";
  // banner.style.display = "none";
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
  forgetForm.classList.remove("active");
  setTitle("Register");
   wrapper.style.left='50%';
  wrapper.style.top='50%';
  wrapper.style.transform='translate(-50%, -50%)';
}

function forgetFunction() {
  // wrapper.style.display = "block";
  // banner.style.display = "none";
  loginForm.classList.remove("active");
  registerForm.classList.remove("active");
  forgetForm.classList.add("active");
  setTitle("Forget Password");
   wrapper.style.left='50%';
  wrapper.style.top='50%';
  wrapper.style.transform='translate(-50%, -50%)';
}

function crossFunction() {
  wrapper.style.display = "none";
  banner.style.display = "block";
}
const cartModal = document.getElementById("cartModal");

function toggleCart() {
  const banner = document.getElementById("banner");
  const wrapper = document.querySelector(".wrapper");

  const isActive = cartModal.classList.contains("active");

  cartModal.classList.toggle("active");
  banner.style.display = isActive ? "block" : "none";
  wrapper.style.display = "none";
}
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.getElementById("cartItems");

function saveCartToLocal() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(image, name) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ image, name, quantity: 1 });
  }
  saveCartToLocal();
  alert("Added to cart");
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  saveCartToLocal();
  renderCartItems();
}

function changeQuantity(name, delta) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(name);
    } else {
      saveCartToLocal();
      renderCartItems();
    }
  }
}

function renderCartItems() {
  cartItemsContainer.innerHTML = '';
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>(Your cart is currently empty)</p>';
    return;
  }
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <span>${item.name}</span>
      <div class="quantity-controls">
        <button onclick="changeQuantity('${item.name}', -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity('${item.name}', 1)">+</button>
      </div>
      <button class="remove-btn" onclick="removeFromCart('${item.name}')">X</button>
    `;
    cartItemsContainer.appendChild(div);
  });
}

function toggleCart() {
  const banner = document.getElementById("banner");
  const wrapper = document.querySelector(".wrapper");
  const isActive = cartModal.classList.contains("active");
  cartModal.classList.toggle("active");
  banner.style.display = isActive ? "block" : "none";
  wrapper.style.display = "none";
  if (!isActive) renderCartItems();
}
function syncCartToServer(userId) {
  fetch('/api/save-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, cart })
  })
  .then(response => response.json())
  .then(data => console.log('Cart saved on server:', data))
  .catch(err => console.error('Server sync error:', err));
}

// 


function crossFunction() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.remove("visible");
  banner.style.display = "block";
   wrapper.style.left='500%';
  wrapper.style.top='500%';
  wrapper.style.transform='translate(-50%, -50%)';
}
function toggleCart() {
  const isActive = cartModal.classList.contains("active");
  cartModal.classList.toggle("active");
  // banner.style.display = isActive ? "block" : "none";
  wrapper.classList.remove("visible");
  if (!isActive) renderCartItems();
   wrapper.style.left='500%';
  wrapper.style.top='500%';
  wrapper.style.transform='translate(-50%, -50%)';
}
// Search Bar Toggle Logic
function toggleSearchBar() {
  const box = document.getElementById("searchBox");
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}

function performSearch() {
  const query = document.querySelector(".search-input").value;
  if (query.trim()) {
    alert("Searching for: " + query); // Replace with real logic if needed
  }
}
// SIGNUP
function signup(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Signup successful!");
    })
    .catch(error => {
      alert(error.message);
    });
}

// LOGIN
function login(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Login successful!");
    })
    .catch(error => {
      alert(error.message);
    });
}

