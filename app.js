//todas las opciones de colores en un array
const colors = [
  "green",
  "red",
  "yellow",
  "white",
  "violet",
  "salmon",
  "silver",
  "purple",
  "orange",
  "navy",
  "lime",
  "magenta",
  "coral",
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
];

//boton
const btn = document.getElementById("btn");

//span con la clase .color - muestra el texto
const color = document.querySelector(".color");

//funcion - cuando haces click al boton activas la function
btn.addEventListener("click", function () {
  //numero aleatorio entre 0 y tam array (colors);
  const randomNumber = getRandomNumber();

  //cambia de color el background
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);

  //colors.leght = el tamano de array
  //math.floor para q de un numero entero
}

// Math.random() t da un numero ramdon entre 0 y 1 - no llega nunca a 1.
