const products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        category: "Electronics",
        rating: 4.5,
        image: "images/laptop.jpg",
        description: "Powerful laptop for work, study and entertainment."
    },

    {
        id: 2,
        name: "Smartphone",
        price: 25000,
        category: "Electronics",
        rating: 4.4,
        image: "images/phone.jpg",
        description: "Modern smartphone with excellent performance."
    },

    {
        id: 3,
        name: "Wireless Headphones",
        price: 2500,
        category: "Electronics",
        rating: 4.3,
        image: "images/headphones.jpg",
        description: "Wireless headphones with high quality sound."
    },

    {
        id: 4,
        name: "Smart Watch",
        price: 3500,
        category: "Watches",
        rating: 4.2,
        image: "images/watch.jpg",
        description: "Stylish smartwatch for everyday use."
    },

    {
        id: 5,
        name: "Running Shoes",
        price: 3000,
        category: "Shoes",
        rating: 4.5,
        image: "images/shoes.jpg",
        description: "Comfortable shoes for running and daily use."
    },

    {
        id: 6,
        name: "T-Shirt",
        price: 999,
        category: "Fashion",
        rating: 4.1,
        image: "images/tshirt.jpg",
        description: "Comfortable and stylish cotton T-shirt."
    },

    {
        id: 7,
        name: "Handbag",
        price: 2200,
        category: "Accessories",
        rating: 4.4,
        image: "images/bag.jpg",
        description: "Elegant handbag suitable for everyday use."
    },

    {
        id: 8,
        name: "Digital Camera",
        price: 42000,
        category: "Electronics",
        rating: 4.6,
        image: "images/camera.jpg",
        description: "Capture beautiful photos and videos."
    }
];


// Display products on products.html

const productContainer = document.getElementById("product-container");

if (productContainer) {

    products.forEach(product => {

        productContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <h4>₹${product.price}</h4>

            <button onclick="viewProduct(${product.id})">
                View Product
            </button>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>

        </div>

        `;

    });

}


// Open single product page

function viewProduct(id){

    localStorage.setItem(
        "selectedProduct",
        id
    );

    window.location.href="product.html";

}


// Search products

function searchProducts(){

    let searchValue =
    document.getElementById("search").value.toLowerCase();


    let filteredProducts =
    products.filter(product =>
        product.name.toLowerCase()
        .includes(searchValue)
    );


    productContainer.innerHTML="";


    filteredProducts.forEach(product=>{

        productContainer.innerHTML += `

        <div class="product-card">

        <img src="${product.image}">

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <h4>₹${product.price}</h4>

        <button onclick="addToCart(${product.id})">
        Add To Cart
        </button>

        </div>

        `;

    });

}