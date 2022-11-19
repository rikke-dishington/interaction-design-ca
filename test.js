const baseURL =
  "https://rikkedishingtonschool.com/rainy-days/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();

    products.forEach(function (product) {
      productContainer.innerHTML += `<div class="products">
                                    <img src="${product.images[0].src}"></img></a>
                                    <h2>${product.name}</h2></a>
                                    <h3>${product.prices.price}</h3></a>
                                    </div>`;
    });
  } catch (error) {
    console.log(error);
    productContainer.innerHTML = message("error", error);
  }
}
getProducts(baseURL);
