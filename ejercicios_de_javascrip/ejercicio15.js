const PI = 3.14159; 

function calcularLongitudCircunferencia(radio) {

  let longitud = 2 * PI * radio;
  return longitud;
}

function calcularAreaCircunferencia(radio) {

  let area = PI * radio * radio;
  return area;
}

let radio = parseFloat(prompt("Ingrese el radio de la circunferencia:"));

let longitud = calcularLongitudCircunferencia(radio);
let area = calcularAreaCircunferencia(radio);


console.log("La longitud de la circunferencia es:", longitud);
console.log("El área de la circunferencia es:", area);