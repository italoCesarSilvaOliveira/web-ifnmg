var hamburguer = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburguer.addEventListener("click", function() {
  this.classList.toggle("click");
  navlist.classList.toggle("open");
})