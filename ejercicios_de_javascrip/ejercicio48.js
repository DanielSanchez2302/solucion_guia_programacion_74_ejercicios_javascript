
const PI = 3.14159;


let figura = prompt("¿Qué figura geométrica desea calcular? (Triángulo: T, Círculo: C):");


figura = figura.toUpperCase();


if (figura === 'T') {
 
  const base = parseFloat(prompt("Ingrese la base del triángulo:"));
  const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
  const areaTriangulo = (base * altura) / 2;
  console.log("El área del triángulo es:", areaTriangulo);
} else if (figura === 'C') {
  
  const radio = parseFloat(prompt("Ingrese el radio del círculo:"));
  const areaCirculo = PI * radio * radio;
  console.log("El área del círculo es:", areaCirculo);
} else {
  console.log("Opción inválida. Por favor, ingrese T para triángulo o C para círculo.");
}