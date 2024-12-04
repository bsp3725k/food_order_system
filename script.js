const cardData = [
  {
    "id": 1,
    "name": "Cheeseburger",
    "price": 5.99,
    "imgSrc": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 2,
    "name": "Pizza",
    "price": 8.99,
    "imgSrc": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 3,
    "name": "Tacos",
    "price": 3.99,
    "imgSrc": "https://plus.unsplash.com/premium_photo-1681406994498-e2f24136108c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 4,
    "name": "Sushi",
    "price": 11.99,
    "imgSrc": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 5,
    "name": "Pasta",
    "price": 9.99,
    "imgSrc": "https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 6,
    "name": "Fried Chicken",
    "price": 7.99,
    "imgSrc": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 7,
    "name": "Grilled Sandwich",
    "price": 4.99,
    "imgSrc": "https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 8,
    "name": "Steak",
    "price": 15.99,
    "imgSrc": "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 9,
    "name": "Caesar Salad",
    "price": 6.99,
    "imgSrc": "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 10,
    "name": "Fish and Chips",
    "price": 8.49,
    "imgSrc": "https://images.unsplash.com/photo-1580217593608-61931cefc821?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 11,
    "name": "Ramen",
    "price": 9.49,
    "imgSrc": "https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 12,
    "name": "Burrito",
    "price": 7.49,
    "imgSrc": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 13,
    "name": "Pho",
    "price": 8.99,
    "imgSrc": "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 14,
    "name": "Pad Thai",
    "price": 9.99,
    "imgSrc": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 15,
    "name": "Gyro",
    "price": 6.49,
    "imgSrc": "https://plus.unsplash.com/premium_photo-1681406994498-e2f24136108c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 16,
    "name": "Ice Cream",
    "price": 3.99,
    "imgSrc": "https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 17,
    "name": "Smoothie",
    "price": 4.99,
    "imgSrc": "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": "18",
    "name": "Apple Pie",
    "price": 4.49,
    "imgSrc": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 19,
    "name": "Chocolate Cake",
    "price": 5.49,
    "imgSrc": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 20,
    "name": "Pancakes",
    "price": 4.99,
    "imgSrc": "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 21,
    "name": "Cupcake",
    "price": 2.99,
    "imgSrc": "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 22,
    "name": "Crepes",
    "price": 5.99,
    "imgSrc": "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 23,
    "name": "Club Sandwich",
    "price": 6.99,
    "imgSrc": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 24,
    "name": "Falafel",
    "price": 5.49,
    "imgSrc": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 25,
    "name": "Curry",
    "price": 9.49,
    "imgSrc": "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]
function alet(){
    alert("ThankYou for eating with us today!");
}

const orderBar = document.querySelector(".order_bar");
const menuContainer = document.querySelector(".menu");


function createCards(data) {
  const container = document.querySelector(".menu");

  data.forEach((item) => {
    // Create card element
    const card = document.createElement("div");
    card.classList.add("card");

    // Add image
    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = item.name;
  
    // Add card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h4");
    title.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = `$${item.price.toFixed(2)}`;

    // Append elements to card
    cardBody.appendChild(title);
    cardBody.appendChild(price);
    card.appendChild(img);
    card.appendChild(cardBody);

    // Append card to container
    container.appendChild(card);
    menuContainer.appendChild(card);
  });
  menuContainer.scrollIntoView({ behavior: "smooth", block: "start" });
}
createCards(cardData);

const searchInput = document.querySelector(".Search");
const menuLink = document.querySelector("a[href='#menu']");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredMenu = menuData.filter((item) => item.name.toLowerCase().includes(query));
  createCards(filteredMenu);
});

// Show full menu when 'Menu/secondScreen' link is clicked
menuLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  createCards(menuData); // Display all menu items
});

// Prevent form submission
document.querySelector("form").addEventListener("submit", (e) => e.preventDefault());

// Initial render (optional)
createCards(menuData);

function thankyouFnc(response) {
  // Check if the response contains { paid: true }
  if (response && response.paid === true) {
    alert("Thank you for your payment!");
  } else {
    console.error("Payment status is not valid or not paid.");
  }
}

// Simulate receiving a response from a payment handler or API
const paymentResponse = { paid: true };

// Call the thankyouFnc() function with the payment response
thankyouFnc(paymentResponse);