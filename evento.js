const divElement = document.getElementsByTagName("div")[0];
const buttonElement = document.getElementsByTagName("button")[0];

divElement.addEventListener("click", () => {
  alert("Hola! Soy el div");
})

buttonElement.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Hola!");
})