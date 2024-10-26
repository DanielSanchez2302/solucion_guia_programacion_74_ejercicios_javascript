// Pedimos al usuario que ingrese su edad
const edad = parseInt(prompt("Ingrese su edad:"));

// Verificamos que la edad sea un número válido
if (isNaN(edad) || edad <= 0) {
  console.error("Por favor, ingrese una edad válida (un número positivo).");
} else {
  // Mostramos todos los años que ha cumplido
  console.log("Has cumplido los siguientes años:");
  for (let i = 1; i <= edad; i++) {
    console.log(i);
  }
}