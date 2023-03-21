import sumar from "./sumador";
import conversor from "./conversor"

const decimal = document.querySelector("#decimal");
const form = document.querySelector("#form-conversor");
const div = document.querySelector("#div-resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero = Number.parseInt(decimal.value);

  div.innerHTML = "<p>" + numero + " ==> " + conversor(numero) + "</p>";
  form.reset();
});
