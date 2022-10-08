import products from "./data/products.js";

const detailContainer = document.querySelector(".jacket-details");

/* getting ID from url address in location to choose product */
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const product = products.find((id) => id == id);
console.log(product);

function createHtml(details) {
  detailContainer.innerHTML = `
                                <div>${details.description}</div>
                                <div>${details.price}</div>`;
}

createHtml();
