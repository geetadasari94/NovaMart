/* ==========================================
   ShopEase Cart JavaScript
========================================== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= ADD TO CART ================= */

function addToCart(id){

    if(typeof products==="undefined"){

        alert("Products not loaded!");

        return;

    }

    const product = products.find(p => p.id == id);

    if(!product){

        alert("Product not found!");

        return;

    }

    const existing = cart.find(item => item.id == id);

    if(existing){

        existing.quantity++;

    }else{

        cart.push({

            ...product,

            quantity:1

        });

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    alert("Product Added To Cart!");

    updateCartCount();

}

/* ================= DISPLAY CART ================= */

function displayCart(){

    const cartItems=document.getElementById("cartItems");

    const totalPrice=document.getElementById("totalPrice");

    const subTotal=document.getElementById("subTotal");

    const emptyCart=document.getElementById("emptyCart");

    if(!cartItems) return;

    cartItems.innerHTML="";

    if(cart.length===0){

        if(emptyCart){

            emptyCart.style.display="block";

        }

        return;

    }

    if(emptyCart){

        emptyCart.style.display="none";

    }

    let total=0;

    cart.forEach(item=>{

        total += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="item-details">

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

                <div class="quantity">

                    <button onclick="decreaseQty(${item.id})">-</button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseQty(${item.id})">+</button>

                </div>

            </div>

            <button class="remove-btn"

            onclick="removeItem(${item.id})">

            Remove

            </button>

        </div>

        `;

    });

    if(subTotal){

        subTotal.innerHTML="₹"+total;

    }

    if(totalPrice){

        totalPrice.innerHTML="₹"+total;

    }

}

/* ================= REMOVE ITEM ================= */

function removeItem(id){

    cart = cart.filter(item=>item.id!=id);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

    updateCartCount();

}

/* ================= INCREASE ================= */

function increaseQty(id){

    const item = cart.find(p=>p.id==id);

    if(item){

        item.quantity++;

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}

/* ================= DECREASE ================= */

function decreaseQty(id){

    const item = cart.find(p=>p.id==id);

    if(!item) return;

    if(item.quantity>1){

        item.quantity--;

    }else{

        removeItem(id);

        return;

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}

/* ================= CLEAR CART ================= */

function clearCart(){

    if(confirm("Are you sure you want to clear cart?")){

        cart=[];

        localStorage.removeItem("cart");

        displayCart();

        updateCartCount();

    }

}

/* ================= CHECKOUT ================= */

function checkout(){

    if(cart.length===0){

        alert("Your cart is empty!");

        return;

    }

    window.location.href="checkout.html";

}

/* ================= CART COUNT ================= */

function updateCartCount(){

    const count=document.getElementById("cartCount");

    if(count){

        count.innerHTML=cart.length;

    }

}

/* ================= PAGE LOAD ================= */

window.onload=function(){

    displayCart();

    updateCartCount();

};