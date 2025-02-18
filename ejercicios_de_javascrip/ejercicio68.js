// Función para generar la tabla de multiplicar de un número
function tablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  // Pedir al usuario un número
  const numero = parseInt(prompt("Ingrese un número del 1 al 10:"));
  
  // Validar el número
  if (isNaN(numero) || numero < 1 || numero > 10) {
    console.error("Por favor, ingrese un número entero válido entre 1 y 10.");
  } else {
    // Mostrar la tabla de multiplicar
    tablaMultiplicar(numero);
  }