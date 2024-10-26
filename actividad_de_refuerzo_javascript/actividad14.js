// Función para devolver el inverso aditivo de cada número
function inversoAditivo(numeros) {
    return numeros.map(num => -num); // Cambiar el signo de cada número
  }
  
  // Solicitar la entrada de números separados por comas
  let entrada = prompt("Ingresa una serie de números separados por comas (ej: 1, -2, 3, 4):");
  
  // Convertir la entrada en un array de números
  let numeros = entrada.split(',').map(Number);
  
  // Obtener el inverso aditivo de cada número
  let inversos = inversoAditivo(numeros);
  
  console.log("Los inversos aditivos son: " + inversos.join(', '));
  