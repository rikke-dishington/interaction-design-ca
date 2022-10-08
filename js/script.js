import { getExistingFavs } from "./utils/favFunctions.js";
import products from "./data/products.js";

const productContainer = document.querySelector(".product-container");

const url =
  "https://api.rawg.io/api/games?key=54582cd735a340b89b17702eae51578b";

async function fetchGames() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    resultsContainer.innerHTML = "";

    const games = json.results;

    games.forEach(function (game) {
      resultsContainer.innerHTML += `<a href="details.html?id=${game.id}" class="card">
                                                <div class="image" style="background-image: url(${game.background_image});"></div>
                                                <div class="details">
                                                    <h4 class="name">${game.name}</h4>                                                                                                                                                        
                                                </div>
                                            </a>`;
    });
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchGames();
