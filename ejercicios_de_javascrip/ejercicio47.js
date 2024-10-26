
const numero1 = parseInt(prompt("Ingrese el primer número:"));
const numero2 = parseInt(prompt("Ingrese el segundo número:"));
const numero3 = parseInt(prompt("Ingrese el tercer número:"));


if (numero1 === numero2 && numero2 === numero3) {
  console.log("Los tres números son iguales.");
} else {
  let mayor = Math.max(numero1, numero2, numero3);
  let menor = Math.min(numero1, numero2, numero3);
  console.log("El número mayor es:", mayor);
  console.log("El número menor es:", menor);
}