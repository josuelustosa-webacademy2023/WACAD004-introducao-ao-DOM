var btn = document.querySelector(".btn");
var img = document.querySelector(".js-hidden");

btn.addEventListener("click", function () {
  img.setAttribute("class", "js-show");
});

img.addEventListener("click", function () {
  img.setAttribute("class", "js-hidden");
});
