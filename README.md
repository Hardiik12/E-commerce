# 🛍️ MYShop - Lightweight Static E-Commerce Website

A lightweight, responsive, and interactive static E-Commerce application built using semantic HTML5, custom CSS3, and Vanilla JavaScript. The project demonstrates core front-end concepts such as state persistence using the Web Storage API, session management, dynamic DOM manipulation, and interactive page layouts.

---

## 🚀 Key Features

*   **User Session Management**: Persistent login states across all pages using `localStorage`.
*   **Inactivity Auto-Logout**: For security, users are automatically logged out if no activity (mouse movement or key press) is detected. *(Currently set to a 3-second timeout for testing/demo purposes).*
*   **Dynamic Shopping Cart**:
    *   Add items to the cart from the product listings.
    *   Real-time cart count and total calculation.
    *   Remove individual items or clear the entire cart.
    *   Data persistence using `localStorage`.
*   **Category & Product Navigation**: Discover products by category (Books, Electronics, Fashion, etc.) and view detailed item pages.
*   **Responsive and Styled UI**: Features hover animations, styled layouts, customized buttons, and persistent navigation headers and footers.

---

## 📂 Project Structure

The project files are organized in the root directory:

```
E-commerce/
├── index.html            # Home page containing the welcome banner & inactivity timeout script
├── product.html          # Categories listing page (Books, Electronics, Fashion, Shoes, etc.)
├── product_list.html     # Detailed list of products with "Add to Cart" functionality
├── electronics.html      # Category-specific products listing (Laptops, Smartphones, etc.)
├── cart.html             # Cart details, checkout, and clear actions
├── login.html            # User login screen with simple validation
├── login1.html           # Simplified / alternative login layout
├── script.js             # Shared JavaScript code containing cart logic
├── styles.css            # Base stylesheet containing common layout, nav, button & header styles
├── cart.css              # Custom layout rules specifically for the shopping cart page
├── img/                  # Folder containing product images and category covers
└── README.md             # Project documentation (this file)
```

---

## 🔑 Login Credentials

Since the application is static and does not have a database backend, authentication is hardcoded. **Only the following credentials can be used to log in:**

*   **URL**: Navigate to `login.html`
*   **Username**: `Hardik`
*   **Password**: `12345`


---

## 🛠️ Installation & How to Run

Since the application consists entirely of static assets, it runs directly in the browser with no installation or backend services required.

### Option 1: Direct File Access
1. Clone or download the repository.
2. Open [index.html](file:///Users/hardik/Documents/Web%20project/E-commerce/index.html) directly in any modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: Local Development Server
To avoid potential browser security policies (CORS) regarding local files, run a simple local web server:

**Using Python:**
```bash
# Start a simple HTTP server on port 8000
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Using VS Code:**
Install the **Live Server** extension, open the directory, and click **"Go Live"**.

---

## 🔍 Technical Analysis & Recommendations

Upon analyzing the codebase, here are some key observations and recommendations for improvement:

1.  **Duplicate Declarations in `script.js`**:
    *   *Observation*: [script.js](file:///Users/hardik/Documents/Web%20project/E-commerce/script.js) contains duplicate definitions for variables/functions:
        *   `cart` (lines 1 & 46)
        *   `addToCart()` (lines 3 & 49)
        *   `showCart()` (lines 21 & 56)
    *   *Recommendation*: Clean up the script file to avoid redundant function overrides.
2.  **Duplicate Element IDs**:
    *   *Observation*: In [cart.html](file:///Users/hardik/Documents/Web%20project/E-commerce/cart.html), both the "Proceed to Checkout" and "Clear Cart" buttons use `id="checkout-btn"`.
    *   *Recommendation*: HTML IDs must be unique. Update the "Clear Cart" button to use `id="clear-cart-btn"`.
3.  **Nested HTML Structure**:
    *   *Observation*: In [product_list.html](file:///Users/hardik/Documents/Web%20project/E-commerce/product_list.html), there are nested `<!DOCTYPE html>` and `<html>` tags (lines 1 and 6).
    *   *Recommendation*: Consolidate the structure into a single, valid document layout.
4.  **Inactivity Timeout Interval**:
    *   *Observation*: The inactivity timeout is set to `INACTIVITY_TIME = 3000` (which is 3 seconds). The comment mentions `300 seconds`.
    *   *Recommendation*: Change `3000` to `300000` (5 minutes) if 300 seconds is the target duration.
