export default [
  {
    id: 1,
    name: "Rainy Blue",
    price: "2000,-",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum justo tincidunt, fermentum nisl non, varius nisi. Integer vulputate lectus ut elit bibendum finibus. Sed laoreet aliquet lorem dapibus eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan tempor arcu, in iaculis enim lacinia nec. Etiam efficitur finibus nulla, ac placerat nisl aliquet eget.",
    image: "/images/product_blue.png",
  },
  {
    id: 2,
    name: "Rainy Green",
    price: "2000,-",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum justo tincidunt, fermentum nisl non, varius nisi. Integer vulputate lectus ut elit bibendum finibus. Sed laoreet aliquet lorem dapibus eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan tempor arcu, in iaculis enim lacinia nec. Etiam efficitur finibus nulla, ac placerat nisl aliquet eget.",
    image: "/images/product_green.png",
  },
  {
    id: 3,
    name: "Sunny White",
    price: "1750,-",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum justo tincidunt, fermentum nisl non, varius nisi. Integer vulputate lectus ut elit bibendum finibus. Sed laoreet aliquet lorem dapibus eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan tempor arcu, in iaculis enim lacinia nec. Etiam efficitur finibus nulla, ac placerat nisl aliquet eget.",
    image: "/images/product_white.png",
  },
  {
    id: 4,
    name: "Cloudy Grey",
    price: "1500,-",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum justo tincidunt, fermentum nisl non, varius nisi. Integer vulputate lectus ut elit bibendum finibus. Sed laoreet aliquet lorem dapibus eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan tempor arcu, in iaculis enim lacinia nec. Etiam efficitur finibus nulla, ac placerat nisl aliquet eget.",
    image: "/images/product_grey.png",
  },
];

/*

  productContainer.innerHTML = "";

  const product = json.data;

  for (let i = 0; i < product.length; i++) {
    console.log(product[0].images);
    console.log(product[i].name);
    console.log(product[i].prices);
    if (i === 4) {
      break;
    }

    const productImage = product[0].images;
    const productName = product[i].name;
    const productPrice = product[i].prices;
    const productId = product[i].id;

    productContainer.innerHTML += `<div class="products">
                                      <a href="jacket-details.html?id=${product.id}"><img src="${product.images}"></img></a>
                                      <a href="jacket-details.html?id=${product.id}"><h2>${product.name}</h2></a>
                                      <a href="jacket-details.html?id=${product.id}"><h3>${product.prices}</h3></a>
                                      <i class="${cssClass} fa-shopping-bag" data-image="${product.images}" data-id="${product.id}" data-name="${product.name}" data-price="${product.prices}"></i>
                                      </div>`;
  }
}

*/
