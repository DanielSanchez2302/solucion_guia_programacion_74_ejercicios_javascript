function calcularLongitudPalabra() {
    // Pedimos al usuario que ingrese una palabra
    const palabra = prompt("Ingrese una palabra:");
  
    // Calculamos la longitud de la palabra
    const longitud = palabra.length;
  
    // Determinamos si la palabra es corta o larga
    if (longitud < 5) {
      console.log("La palabra '" + palabra + "' es corta y tiene " + longitud + " caracteres.");
    } else {
      console.log("La palabra '" + palabra + "' es larga y tiene " + longitud + " caracteres.");
    }
  }
  
  // Llamamos a la función para ejecutarla
  calcularLongitudPalabra();