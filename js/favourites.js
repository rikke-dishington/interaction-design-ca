import { getExistingFavs } from "./utils/favFunctions.js";

const favourites = getExistingFavs();

const productContainer = document.querySelector(".product-container");

if (favourites.length === 0) {
  productContainer.innerHTML = "Your cart is currently empty!";
}

favourites.forEach((favourite) => {
  productContainer.innerHTML += `<div class="product">
                                  <img src="${favourite.image}"></img>
                                  <div>
                                    <h2>${favourite.name}</h2>
                                    <h3>${favourite.price}</h3>
                                  </div>
                                  <i class="fa fa-heart"</i>
                                </div>`;
});

const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const streetName = document.querySelector("#streetName");
const streetNameError = document.querySelector("#streetNameError");
const streetNumber = document.querySelector("#streetNumber");
const streetNumberError = document.querySelector("#streetNumberError");
const country = document.querySelector("#country");
const countryError = document.querySelector("#countryError");
const cardHolderName = document.querySelector("#cardHolderName");
const cardHolderNameError = document.querySelector("#cardHolderNameError");
const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLength(streetName.value, 0) === true) {
    streetNameError.style.display = "none";
  } else {
    streetNameError.style.display = "block";
  }

  if (checkLength(streetNumber.value, 0) === true) {
    streetNumberError.style.display = "none";
  } else {
    streetNumberError.style.display = "block";
  }

  if (checkLength(country.value, 0) === true) {
    countryError.style.display = "none";
  } else {
    countryError.style.display = "block";
  }

  if (checkLength(cardHolderName.value, 0) === true) {
    cardHolderNameError.style.display = "none";
  } else {
    cardHolderNameError.style.display = "block";
  }

  if (checkLength(cardNumber.value, 0) === true) {
    cardNumberError.style.display = "none";
  } else {
    cardNumberError.style.display = "block";
  }

  if (checkLength(cvv.value, 0) === true) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
