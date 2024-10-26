// Función para sumar solo los números positivos
function sumarPositivos(numeros) {
    // Convertimos los números a un array y filtramos los positivos
    let suma = numeros
      .filter(num => num > 0)  // Filtrar solo números positivos
      .reduce((acumulador, valorActual) => acumulador + valorActual, 0);  // Sumar los positivos
  
    return suma;
  }
  
  // Solicitar la entrada de los números separados por comas
  let entrada = prompt("Ingresa una serie de números separados por comas (ej: 1, -2, 3, 4):");
  
  // Convertir la entrada en un array de números
  let numeros = entrada.split(',').map(Number);
  
  // Obtener la suma de los números positivos
  let resultado = sumarPositivos(numeros);
  
  console.log("La suma de los números positivos es: " + resultado);
  