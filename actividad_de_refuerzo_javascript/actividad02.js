function determinarParImpar() {
    // Pedimos al usuario que ingrese un número
    const numero = parseInt(prompt("Ingrese un número:"));
  
    // Validamos si el número es un entero
    if (isNaN(numero)) {
      console.log("Por favor, ingrese un número válido.");
      return;
    }
  
    // Determinamos si el número es par o impar
    if (numero % 2 === 0) {
      console.log(numero + " es par.");
    } else {
      console.log(numero + " es impar.");
    }
  }
  
  // Llamamos a la función para ejecutarla
  determinarParImpar();