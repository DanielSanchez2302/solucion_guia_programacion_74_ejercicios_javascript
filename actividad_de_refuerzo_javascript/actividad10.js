// Función para generar una pirámide de asteriscos
function generarPiramide(filas) {
    for (let i = 1; i <= filas; i++) {
      // Crear los espacios necesarios
      let espacios = ' '.repeat(filas - i);
      // Crear los asteriscos
      let asteriscos = '*'.repeat(2 * i - 1);
      // Mostrar la fila de la pirámide
      console.log(espacios + asteriscos);
    }
  }
  
  // Solicitar el número de filas para la pirámide por teclado
  let numeroDeFilas = parseInt(prompt("Ingresa el número de filas para la pirámide:"));
  
  // Generar la pirámide
  generarPiramide(numeroDeFilas);
  