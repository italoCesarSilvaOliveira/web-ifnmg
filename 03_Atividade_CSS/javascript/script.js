var hamburguer = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");
var nav = document.querySelector("nav");

hamburguer.addEventListener("click", function() {
  this.classList.toggle("click");
  navlist.classList.toggle("open");
  nav.classList.toggle("visible");
})