import { getExistingFavs } from "./utils/favFunctions.js";
import products from "./data/products.js";

const productContainer = document.querySelector(".product-container");

const favourites = getExistingFavs();

products.forEach((product) => {
  let cssClass = "far";

  // check through favs array
  // does the product id exist in the fav array
  const doesObjectExist = favourites.find(function (fav) {
    console.log(fav);

    return parseInt(fav.id) === product.id;
  });

  console.log(doesObjectExist);

  //if id is in the array, change the style of the element
  if (doesObjectExist) {
    cssClass = "fa";
  }

  productContainer.innerHTML += `<div class="product">
                                    <h4>${product.name}</h4>
                                    <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.name}"></i>
                                    </div>`;
});

const favButton = document.querySelectorAll(".product i");

favButton.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick() {
  this.classList.toggle("fa");
  this.classList.toggle("far");

  const id = this.dataset.id;
  const name = this.dataset.name;

  const currentFavs = getExistingFavs();

  const productExists = currentFavs.find(function (fav) {
    return fav.id === id;
  });

  if (productExists === undefined) {
    const product = { id: id, name: name };
    currentFavs.push(product);
    saveFaves(currentFavs);
  } else {
    const newFavs = currentFavs.filter((fav) => fav.id !== id);
    saveFaves(newFavs);
  }
}

function saveFaves(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}
