let shop = document.querySelector(".background-color-different");
let body = document.querySelector("body");
let listProductHTML = document.querySelector(".listProduct");

let shopItemsData = [
  {
    id: 1,
    name: "Austronaut",
    price: "169 sek",
    image: "assets/char-1.png",
  },

  {
    id: 2,
    name: "Ninja",
    price: "169 sek",
    image: "assets/char-2.png",
  },

  {
    id: 3,
    name: "Nerd",
    price: "169 sek",
    image: "assets/char-3.png",
  },

  {
    id: 4,
    name: "Snorkle Man",
    price: "169 sek",
    image: "assets/char-4.png",
  },

  {
    id: 5,
    name: "Clown",
    price: "169 sek",
    image: "assets/char-5.png",
  },

  {
    id: 6,
    name: "Police Officer",
    price: "169 sek",
    image: "assets/char-6.png",
  },

  {
    id: 7,
    name: "Photographer",
    price: "169 sek",
    image: "assets/char-7.png",
  },

  {
    id: 8,
    name: "Fairy",
    price: "169 sek",
    image: "assets/char-8.png",
  },

  {
    id: 9,
    name: "Personal Trainer",
    price: "169 sek",
    image: "assets/char-9.png",
  },

  {
    id: 11,
    name: "Doctor",
    price: "169 sek",
    image: "assets/char-11.png",
  },

  {
    id: 12,
    name: "Guitarist",
    price: "169 sek",
    image: "assets/char-12.png",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, image } = x;
      return `<span class="again" id="${id}">
          <img
            src="${image}"
            alt="Picture of a Personal Trainer"
            class="second-img"
          />
          <h2 class="second-h2">${name}</h2>
          <input
            type="button"
            value="Remove from cart"
            class="second-button"
          />
        </span>`;
    })
    .join());
};

