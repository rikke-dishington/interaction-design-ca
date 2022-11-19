import products from "./data/products.js";

const detailContainer = document.querySelector(".jacket-details");

/* getting ID from url address in location to choose product */
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const product = products.find((id) => id == id);

console.log(product);

function getProduct() {
  detailContainer.innerHTML += `<div class="product-content">
                                  <img src="${product.images}"></img>
                                  <div class="product-details">
                                    <h2>${product.name}</h2>
                                    <h3>${product.prices}</h3>
                                    <p>${product.description}</p>
                                    <button class=cta>Add to cart</button>
                                  </div>
                                </div>`;
}

getProduct();
