const imagemContainer = document.getElementById("imagem-container");
const imagemHover = imagemContainer.querySelector(".hover");

imagemContainer.addEventListener("mouseenter", () => {
  imagemHover.style.opacity = "1";
});

imagemContainer.addEventListener("mouseleave", () => {
  imagemHover.style.opacity = "0";
});
