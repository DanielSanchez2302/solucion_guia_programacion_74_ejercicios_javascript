// Pedimos al usuario que ingrese los valores de temperatura y presión
const temperatura = parseFloat(prompt("Ingrese la temperatura:"));
const presion = parseFloat(prompt("Ingrese la presión:"));

// Condicional para determinar si se muestra "Alarma" o "Normal"
if (presion > 200 || temperatura > 100) {
  console.log("Alarma");
} else {
  console.log("Normal");
}