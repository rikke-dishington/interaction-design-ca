import { getExistingFavs } from "./utils/favFunctions.js";

const favourites = getExistingFavs();

const productContainer = document.querySelector(".product-container");

if (favourites.length === 0) {
  productContainer.innerHTML = "No favourites yet";
}

favourites.forEach((favourite) => {
  productContainer.innerHTML += `<div class="product">
                                 <img src="${favourite.image}"></img>
                                    <h2>${favourite.name}</h2>
                                    <h3>${favourite.price}</h3>
                                    <i class="fa fa-heart"</i>
                                </div>`;
});
