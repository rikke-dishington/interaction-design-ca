import { getExistingFavs } from "./utils/favFunctions.js";
import products from "./data/products.js";

const productContainer = document.querySelector(".product-container");

const favourites = getExistingFavs();

products.forEach((product) => {
  let cssClass = "fa-solid";

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
                                    <a href="jacket-details.html?id=${product.id}"><img src="${product.image}"></img></a>
                                    <a href="jacket-details.html?id=${product.id}"><h2>${product.name}</h2></a>
                                    <a href="jacket-details.html?id=${product.id}"><h3>${product.price}</h3></a>
                                    <i class="${cssClass} fa-shopping-bag" data-image="${product.image}" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}"></i>
                                    </div>`;
});

const favButton = document.querySelectorAll(".product i");

favButton.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick() {
  this.classList.toggle("fa");
  this.classList.toggle("fa-solid");

  const id = this.dataset.id;
  const name = this.dataset.name;
  const price = this.dataset.price;
  const image = this.dataset.image;

  const currentFavs = getExistingFavs();

  const productExists = currentFavs.find(function (fav) {
    return fav.id === id;
  });

  if (productExists === undefined) {
    const product = { id: id, name: name, price: price, image: image };
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
