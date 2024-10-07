function createCard(product) {
  const card = document.createElement("li");
  card.classList.add("album-card");

  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.title;
  card.appendChild(img);

  const albumInfo = document.createElement("div");
  albumInfo.classList.add("album-info");

  const albumDetails = document.createElement("p");
  albumDetails.innerText = `${product.band} • ${product.year}`;
  albumInfo.appendChild(albumDetails);

  const albumTitle = document.createElement("h3");
  albumTitle.innerText = product.title;
  albumInfo.appendChild(albumTitle);

  const albumPrice = document.createElement("span");
  albumPrice.innerText = `R$ ${product.price.toFixed(2)}`;
  albumInfo.appendChild(albumPrice);

  const buyButton = document.createElement("button");
  buyButton.innerText = "Comprar";
  albumInfo.appendChild(buyButton);

  card.appendChild(albumInfo);

  return card;
}

function renderCategoryButtons(categoriesArray) {
  const genreList = document.querySelector(".genre-list");

  categoriesArray.forEach((category) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = category;
    li.appendChild(button);
    genreList.appendChild(li);
  });
}

function filterProductsByCategory(categoryIndex, productsArray) {
  if (categoryIndex === 0) {
    return productsArray;
  } else {
    return productsArray.filter((product) => product.category === categoryIndex);
  }
}

function filterProductsByPrice(maxPrice, productsArray) {
  return productsArray.filter((product) => product.price <= maxPrice);
}

function applyFilters(selectedCategory, maxPrice, productsArray) {
  let filteredArray = filterProductsByCategory(selectedCategory, productsArray);
  filteredArray = filterProductsByPrice(maxPrice, filteredArray);
  return filteredArray;
}

function renderAlbumCard(product) {
  const card = document.createElement("li");
  card.classList.add("album-card");

  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.title;
  card.appendChild(img);

  const albumInfo = document.createElement("div");
  albumInfo.classList.add("album-info");

  const albumDetails = document.createElement("p");
  albumDetails.innerText = `${product.band} • ${product.year}`;
  albumInfo.appendChild(albumDetails);

  const albumTitle = document.createElement("h3");
  albumTitle.innerText = product.title;
  albumInfo.appendChild(albumTitle);

  const albumPrice = document.createElement("span");
  albumPrice.innerText = `R$ ${product.price.toFixed(2)}`;
  albumInfo.appendChild(albumPrice);

  const buyButton = document.createElement("button");
  buyButton.innerText = "Comprar";
  albumInfo.appendChild(buyButton);

  card.appendChild(albumInfo);

  return card;
}

function renderAlbumCards(cardsArray) {
  const albumCardsList = document.querySelector(".album-cards");
  albumCardsList.innerHTML = ""; 

  if (cardsArray.length === 0) {
    const noAlbumsMessage = document.createElement("p");
    noAlbumsMessage.classList.add("no-albums-message");
    noAlbumsMessage.innerText = "Nenhum álbum encontrado.";
    albumCardsList.appendChild(noAlbumsMessage);
  } else {
    cardsArray.forEach((product) => {
      const card = renderAlbumCard(product);
      albumCardsList.appendChild(card);
    });
  }
}

function addEvents(categoriesArray, productsArray) {

  const genreButtons = document.querySelectorAll(".genre-list button");
  const input = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");

  let selectedStyle = "Todos"; 
  let inputValue = parseFloat(input.value);

  genreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      genreButtons.forEach((btn) => {
        btn.classList.remove("clicked");
      });

      button.classList.add("clicked");
      selectedStyle = button.innerText;

      updateFilteredArray();
    });
  });

  input.addEventListener("input", () => {
    inputValue = parseFloat(input.value);
    priceValue.innerText = `Até R$ ${inputValue.toFixed(2)}`;

    updateFilteredArray();
  });

  function updateFilteredArray() {
    const categoryIndex = categoriesArray.indexOf(selectedStyle);
    const filteredArray = applyFilters(categoryIndex, inputValue, productsArray);

    renderAlbumCards(filteredArray);
  }
}

const categories = [
  "Todos",
  "Pop",
  "MPB",
  "Forró",
  "Samba",
  "Baião",
  "Rap",
  "Hip-Hop",
  "Rock",
  "Reggae",
  "Country",
  "Gospel",
];

const products = [
  {
    id: 1,
    title: "Magnetite",
    category: 8,
    price: 89.0,
    img: "./src/assets/img/1.jpg",
    band: "Scalene",
    year: 2017,
  },
  {
    id: 2,
    title: "Acabou o Chorare",
    category: 2,
    price: 66.0,
    img: "./src/assets/img/2.jpg",
    band: "Novos Baianos",
    year: 1972,
  },
  {
    id: 3,
    title: "Nirvana Discografia",
    category: 8,
    price: 50.0,
    img: "./src/assets/img/3.jpg",
    band: "Nirvava",
    year: 1990,
  },
  {
    id: 4,
    title: "Both Sides",
    category: 1,
    price: 22.0,
    img: "./src/assets/img/4.jpg",
    band: "Phil Collins",
    year: 1993,
  },
];

renderCategoryButtons(categories);
addEvents(categories, products);
renderAlbumCards(products);