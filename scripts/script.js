const forms = document.getElementsByTagName("form");

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", (e) => e.preventDefault());
}

const btn = document.getElementById("browse-btn");
const menu = document.getElementById("browse-menu");
btn.addEventListener("click", () => menu.classList.toggle("mega-box_flex"));

const cart = document.getElementById("cart-btn");
const cartMenu = document.getElementById("cart-menu-id");
cart.addEventListener("click", () => cartMenu.classList.toggle("show"));
