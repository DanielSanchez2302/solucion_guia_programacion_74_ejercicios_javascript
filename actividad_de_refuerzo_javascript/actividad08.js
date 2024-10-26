// Función para invertir una cadena
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
  }
  
  // Solicitar la entrada de la cadena por teclado
  let entrada = prompt("Ingresa una cadena de texto:");
  
  // Mostrar la cadena invertida
  let cadenaInvertida = invertirCadena(entrada);
  console.log("Cadena invertida: " + cadenaInvertida);
  