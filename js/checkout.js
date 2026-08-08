// checkout.js
// Handles checkout page, order summary and order confirmation


// Load Cart Items

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let checkoutItems = document.getElementById("checkout-items");
let checkoutTotal = document.getElementById("checkout-total");



// Display Checkout Products

function displayCheckout(){

    if(!checkoutItems) return;


    checkoutItems.innerHTML = "";


    let total = 0;


    cart.forEach(item => {


        total += item.price * item.quantity;


        checkoutItems.innerHTML += `

        <div class="checkout-product">

            <img src="${item.image}" width="80">

            <div>

                <h3>${item.name}</h3>

                <p>
                Quantity: ${item.quantity}
                </p>

                <p>
                Price: ₹${item.price}
                </p>

            </div>

        </div>

        `;


    });


    checkoutTotal.innerHTML =
    "Total Amount: ₹" + total;


}



// Place Order Function

function placeOrder(){


    let name =
    document.getElementById("name").value;


    let address =
    document.getElementById("address").value;


    let phone =
    document.getElementById("phone").value;



    if(name==="" || address==="" || phone===""){

        alert("Please fill all details");

        return;

    }



    let order = {

        customer:name,

        address:address,

        phone:phone,

        products:cart,

        date:new Date().toLocaleString()

    };



    localStorage.setItem(
        "order",
        JSON.stringify(order)
    );



    // Clear cart after order

    localStorage.removeItem("cart");



    alert(
        "Order placed successfully!"
    );



    window.location.href="success.html";


}



// Run automatically

displayCheckout();