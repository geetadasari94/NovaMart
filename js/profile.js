function loadProfile(){


    let user =
    JSON.parse(localStorage.getItem("user"));



    if(!user){

        alert("Please login first");

        window.location.href="login.html";

        return;

    }



    document.getElementById("profile-name").innerHTML =
    user.name;



    document.getElementById("profile-email").innerHTML =
    user.email;



    if(document.getElementById("profile-phone")){

        document.getElementById("profile-phone").innerHTML =
        user.phone || "Not added";

    }


}



// Update Profile

function updateProfile(){


    let user =
    JSON.parse(localStorage.getItem("user"));



    let name =
    document.getElementById("edit-name").value;



    let email =
    document.getElementById("edit-email").value;



    let phone =
    document.getElementById("edit-phone").value;



    user.name = name;

    user.email = email;

    user.phone = phone;



    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );



    alert(
        "Profile updated successfully"
    );



    loadProfile();


}



// Logout User

function logout(){


    localStorage.removeItem("user");


    alert(
        "Logged out successfully"
    );


    window.location.href="login.html";


}



// Display Orders

function displayOrders(){


    let orderBox =
    document.getElementById("orders-container");



    if(!orderBox)
        return;



    let order =
    JSON.parse(localStorage.getItem("order"));



    if(!order){


        orderBox.innerHTML =
        "<h3>No orders found</h3>";

        return;

    }



    orderBox.innerHTML = `


        <div class="order-card">


            <h3>
            Order Details
            </h3>


            <p>
            Customer: ${order.customer}
            </p>


            <p>
            Address: ${order.address}
            </p>


            <p>
            Date: ${order.date}
            </p>


            <h4>
            Products:
            </h4>


            ${order.products.map(item => `

                <p>
                ${item.name} -
                Quantity: ${item.quantity}
                </p>

            `).join("")}


        </div>


    `;


}



// Run Functions

loadProfile();

displayOrders();