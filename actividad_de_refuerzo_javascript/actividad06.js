function tablaDeMultiplicar5(filas) {
    // Validamos que el número de filas sea positivo
    if (filas <= 0) {
      console.log("El número de filas debe ser mayor que cero.");
      return;
    }
  
    console.log("Tabla de multiplicar del 5:");
    for (let i = 1; i <= filas; i++) {
      if (i !== 5) {
        console.log("5 x " + i + " = " + (5 * i));
      }
    }
  }
  
  // Pedir al usuario el número de filas
  const numFilas = parseInt(prompt("Ingrese el número de filas que desea para la tabla del 5:"));
  
  // Llamar a la función
  tablaDeMultiplicar5(numFilas);