let iconCart = document.querySelector(".icon-cart");
let body = document.querySelector("body");
let listProductHTML = document.querySelector(".listProduct");

let listProducts = [];

const initApp = () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      listProducts = data;
    });
  console.log(listProducts);
};
console.log(listProducts);
