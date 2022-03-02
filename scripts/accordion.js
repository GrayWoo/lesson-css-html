const arr = document.getElementsByClassName("tab");
const arrLi = document.getElementsByClassName("tabs__h2");

for (let i = 0; i < arr.length; i++) {
  arrLi[i].addEventListener("click", () => arr[i].classList.toggle("hidden"));
}
