// Función para eliminar las vocales de una cadena
function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, ''); // Reemplaza las vocales por una cadena vacía
  }
  
  // Solicitar la entrada de la cadena por teclado
  let entrada = prompt("Ingresa una cadena de texto:");
  
  // Eliminar las vocales de la cadena ingresada
  let cadenaSinVocales = eliminarVocales(entrada);
  
  console.log("Cadena sin vocales: " + cadenaSinVocales);
  