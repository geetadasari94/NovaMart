// ==============================
// PRODUCTS
// ==============================

const products = [
{
    id:1,
    name:"Wireless Headphones",
    price:2999,
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
},
{
    id:2,
    name:"Smart Watch",
    price:3999,
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
},
{
    id:3,
    name:"Laptop",
    price:54999,
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
},
{
    id:4,
    name:"Backpack",
    price:1499,
    image:"https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400"
},
{
    id:5,
    name:"Running Shoes",
    price:3499,
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
},
{
    id:6,
    name:"Bluetooth Speaker",
    price:2499,
    image:"https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400"
},
{
    id:7,
    name:"Gaming Mouse",
    price:999,
    image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
},
{
    id:8,
    name:"T-Shirt",
    price:799,
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
},
{
    id:9,
    name:"Sneakers",
    price:2899,
    image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400"
},
{
    id:10,
    name:"Smartphone",
    price:18999,
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
},
{
    id:11,
    name:"Camera",
    price:29999,
    image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
},
{
    id:12,
    name:"Hoodie",
    price:1499,
    image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"
}
];

// ==============================
// LOAD CART
// ==============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productContainer = document.getElementById("product-container");
const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");
const cartCount = document.getElementById("cart-count");
const search = document.getElementById("search");

// ==============================
// DISPLAY PRODUCTS
// ==============================

function displayProducts(productArray){

    productContainer.innerHTML="";

    productArray.forEach(product=>{

        productContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">₹${product.price}</p>

                <button onclick="addToCart(${product.id})">
                Add To Cart
                </button>

            </div>

        </div>

        `;

    });

}

// ==============================
// ADD TO CART
// ==============================

function addToCart(id){

    const product = products.find(p=>p.id===id);

    cart.push(product);

    saveCart();

    updateCart();

    alert(product.name + " added to cart!");

}

// ==============================
// UPDATE CART
// ==============================

function updateCart(){

    cartItems.innerHTML="";

    let totalPrice=0;

    cart.forEach((item,index)=>{

        totalPrice += item.price;

        cartItems.innerHTML += `

        <p>

        ${item.name}

        - ₹${item.price}

        <button onclick="removeItem(${index})">

        ❌

        </button>

        </p>

        `;

    });

    total.innerText = totalPrice;

    cartCount.innerText = cart.length;

}

// ==============================
// REMOVE ITEM
// ==============================

function removeItem(index){

    cart.splice(index,1);

    saveCart();

    updateCart();

}

// ==============================
// SAVE LOCAL STORAGE
// ==============================

function saveCart(){

    localStorage.setItem("cart",JSON.stringify(cart));

}

// ==============================
// SEARCH PRODUCTS
// ==============================

search.addEventListener("keyup",()=>{

    const value = search.value.toLowerCase();

    const filtered = products.filter(product=>

        product.name.toLowerCase().includes(value)

    );

    displayProducts(filtered);

});

// ==============================
// INITIAL LOAD
// ==============================

displayProducts(products);

updateCart();