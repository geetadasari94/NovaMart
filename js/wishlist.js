// wishlist.js
// Handles adding, removing and displaying wishlist products


// Get Wishlist from Local Storage

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


// Product data (same products used in products.js)

const wishlistProducts = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1999,
        image: "images/headphones.jpg"
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 2499,
        image: "images/watch.jpg"
    },

    {
        id: 3,
        name: "Running Shoes",
        price: 1599,
        image: "images/shoes.jpg"
    },

    {
        id: 4,
        name: "Laptop Backpack",
        price: 999,
        image: "images/bag.jpg"
    },

    {
        id: 5,
        name: "Smartphone",
        price: 14999,
        image: "images/mobile.jpg"
    },

    {
        id: 6,
        name: "Sunglasses",
        price: 799,
        image: "images/glasses.jpg"
    }
];



// Add Product To Wishlist

function addToWishlist(id){


    let exists = wishlist.includes(id);


    if(exists){

        alert("Product already in wishlist");

        return;

    }


    wishlist.push(id);


    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );


    alert("Added to wishlist ❤️");

}



// Display Wishlist Products

let wishlistContainer =
document.getElementById("wishlist-container");



function displayWishlist(){


    if(!wishlistContainer)
        return;


    wishlistContainer.innerHTML = "";


    if(wishlist.length === 0){

        wishlistContainer.innerHTML =
        "<h2>Your wishlist is empty</h2>";

        return;

    }



    wishlist.forEach(id => {


        let product =
        wishlistProducts.find(
            product => product.id === id
        );



        wishlistContainer.innerHTML += `


        <div class="wishlist-card">


            <img src="${product.image}"
            alt="${product.name}">


            <h2>
            ${product.name}
            </h2>


            <h3>
            ₹${product.price}
            </h3>



            <button onclick="removeWishlist(${product.id})">

                Remove

            </button>



            <button onclick="addToCart(${product.id})">

                Add To Cart

            </button>


        </div>


        `;


    });


}



// Remove Product From Wishlist

function removeWishlist(id){


    wishlist =
    wishlist.filter(
        productId => productId !== id
    );


    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );


    displayWishlist();


}



// Move Wishlist Product To Cart

function moveToCart(id){


    addToCart(id);


    removeWishlist(id);


}



// Load Wishlist

displayWishlist();