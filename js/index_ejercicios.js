const d = document;

// Menu Hamburguesa
const $btnMenu = d.querySelector(".btn-menu").addEventListener("click", btnMenu);
const $panel = d.querySelector(".panel");
d.addEventListener("scroll", close);

function btnMenu(e) {
  if ($panel.classList.contains("panel-on")) {
    $panel.classList.remove("panel-on");
  } else {
    $panel.classList.add("panel-on");
  }
}

function close() {
  $panel.classList.remove("panel-on");
}

// Ejercicio 1. Comparar Números
d.getElementById("btn-comparar").addEventListener("click", comparar);

function comparar(e) {
  let numero1 = prompt("Ingresa el primer número aquí");
  let numero2 = prompt("Ingresa el segundo número aquí");

  let number1 = parseFloat(numero1);
  let number2 = parseFloat(numero2);

  if (!numero1) return alert("Debes ingresar números para poder realizar la comparación.");
  if (!numero2) return alert("Debes ingresar números para poder realizar la comparación.");

  if (number1 < number2) return alert(`${number1} es menor que ${number2}`);
  if (number1 > number2) return alert(`${number1} es mayor que ${number2}`);
  if ((number1 = number2)) return alert(`${number1} es igual que ${number2}`);

  e.preventDefault();
}

// Ejercicios 2. Calculadora
const $btnSumar = d.getElementById("btn-sumar").addEventListener("click", sumar);
const $btnRestar = d.getElementById("btn-restar").addEventListener("click", restar);
const $btnMultiplicar = d.getElementById("btn-multiplicar").addEventListener("click", multiplicar);
const $btnDividir = d.getElementById("btn-dividir").addEventListener("click", dividir);

function sumar(e) {
  let numero1 = prompt("Ingresa el primer número aquí");
  let numero2 = prompt("Ingresa el segundo número aquí");

  let number1 = parseFloat(numero1);
  let number2 = parseFloat(numero2);
  let resultado = number1 + number2;

  if (!numero1) return alert("Debes ingresar números para poder realizar la suma.");
  if (!numero2) return alert("Debes ingresar números para poder realizar la suma.");

  if (number1 && number2) return alert(`${number1} + ${number2} es igual a: ${resultado}`);

  e.preventDefault();
}

function restar(e) {
  let numero1 = prompt("Ingresa el primer número aquí");
  let numero2 = prompt("Ingresa el segundo número aquí");

  let number1 = parseFloat(numero1);
  let number2 = parseFloat(numero2);
  let resultado = number1 - number2;

  if (!numero1) return alert("Debes ingresar números para poder realizar la resta.");
  if (!numero2) return alert("Debes ingresar números para poder realizar la resta.");

  if (number1 && number2) return alert(`${number1} - ${number2} es igual a: ${resultado}`);

  e.preventDefault();
}

function multiplicar(e) {
  let numero1 = prompt("Ingresa el primer número aquí");
  let numero2 = prompt("Ingresa el segundo número aquí");

  let number1 = parseFloat(numero1);
  let number2 = parseFloat(numero2);
  let resultado = number1 * number2;

  if (!numero1) return alert("Debes ingresar números para poder realizar la multiplicación.");
  if (!numero2) return alert("Debes ingresar números para poder realizar la multiplicación.");

  if (number1 && number2) return alert(`${number1} x ${number2} es igual a: ${resultado}`);

  e.preventDefault();
}

function dividir(e) {
  let numero1 = prompt("Ingresa el primer número aquí");
  let numero2 = prompt("Ingresa el segundo número aquí");

  let number1 = parseFloat(numero1);
  let number2 = parseFloat(numero2);
  let resultado = number1 / number2;

  if (!numero1) return alert("Debes ingresar números para poder realizar la división.");
  if (!numero2) return alert("Debes ingresar números para poder realizar la división.");

  if (number1 && number2) return alert(`${number1} ÷ ${number2} es igual a: ${resultado}`);

  e.preventDefault();
}
