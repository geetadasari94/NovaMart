/* ==========================================
   ShopEase Main Script
========================================== */

// ---------- Product List ----------

let displayProducts = [];

if (typeof products !== "undefined") {
    displayProducts = [...products];
}

// ---------- Display Products ----------

function loadProducts(list = displayProducts) {

    const container = document.getElementById("productContainer");

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<h2>No Products Found</h2>";
        return;
    }

    list.forEach(product => {

        container.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-content">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <h4>₹${product.price}</h4>

                <p>⭐ ${product.rating}</p>

                <button onclick="viewProduct(${product.id})">

                    View Details

                </button>

                <br><br>

                <button onclick="addToCart(${product.id})">

                    Add To Cart

                </button>

            </div>

        </div>

        `;

    });

}

// ---------- View Product ----------

function viewProduct(id){

    localStorage.setItem("selectedProduct", id);

    window.location.href = "product.html";

}

// ---------- Search ----------

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

const keyword = this.value.toLowerCase();

const filtered = displayProducts.filter(product =>

product.name.toLowerCase().includes(keyword) ||

product.category.toLowerCase().includes(keyword)

);

loadProducts(filtered);

});

}

// ---------- Category Filter ----------

function filterProducts(category){

if(category==="All"){

loadProducts(displayProducts);

return;

}

const filtered = displayProducts.filter(product=>product.category===category);

loadProducts(filtered);

}

// ---------- Cart Count ----------

function updateCartCount(){

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const count = document.getElementById("cartCount");

if(count){

count.innerHTML = cart.length;

}

}

// ---------- Scroll To Top ----------

window.addEventListener("scroll",function(){

const btn=document.getElementById("topBtn");

if(!btn) return;

if(window.scrollY>300){

btn.style.display="block";

}else{

btn.style.display="none";

}

});

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// ---------- Newsletter ----------

const newsletter=document.getElementById("newsletterForm");

if(newsletter){

newsletter.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for subscribing!");

newsletter.reset();

});

}

// ---------- Contact Form ----------

const contact=document.getElementById("contactForm");

if(contact){

contact.addEventListener("submit",function(e){

e.preventDefault();

alert("Message Sent Successfully!");

contact.reset();

});

}

// ---------- Load Page ----------

window.onload=function(){

loadProducts();

updateCartCount();

}