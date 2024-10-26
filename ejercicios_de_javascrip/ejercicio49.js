
const lado = parseFloat(prompt("Ingrese la longitud de un lado del cuadrado (debe ser positiva):"));


if (lado > 0) {
  
  const area = lado * lado;
  console.log("El área del cuadrado es:", area);
} else {
  console.log("La longitud del lado debe ser un número positivo.");
}