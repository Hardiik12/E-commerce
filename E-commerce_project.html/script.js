let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {

//get logged in user
  let user = localStorage.getItem("logingUser");

  // If no user is logged in, redirect to login page
  if (!user) {
    alert("Please log in to add items to the cart.");
    window.location.href = "login.html"; // Redirect to login page
    return;
  }


  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added!");
}

function showCart() {
  let box = document.getElementById("cart-items");
  if (!box) return;

  let total = 0;
  box.innerHTML = "";
  for (let i of cart) {
    box.innerHTML += `<p>${i.name} - $${i.price}</p>`;
    total += i.price;
  }
  const totalEl = document.getElementById("total");
  if (totalEl) {
    totalEl.innerText = "Total: $" + total.toFixed(2);
  }
}


  showCart();
    document.getElementById("checkout-btn").onclick = function () {
        alert("Proceeding to checkout!");
    };
    



let Cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added!");
}

// Show items in cart
function showCart() {
    let box = document.getElementById("cart-items");
    if (!box) return;

    let total = 0;
    box.innerHTML = "";

    cart.forEach((item, index) => {
        box.innerHTML += `
                ${item.name} - $${item.price}
                <button onclick="removeFromCart(${index})">Remove</button>
            </p>
        `;
        total += item.price;
    });

    document.getElementById("total").innerText = "Total: $" + total;
}

// Remove item
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}
function clearcart(){
  if(confirm("clear the whole cart")){
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart(); 
  }
}


showCart();

    