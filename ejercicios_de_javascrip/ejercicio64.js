function mostrarImparesHasta(numero) {
    let impares = [];
    for (let i = 1; i <= numero; i++) {
      if (i % 2 !== 0) {
        impares.push(i);
      }
    }
    console.log("Los números impares hasta " + numero + " son: " + impares.join(", "));
  }
  
  // Pedir al usuario un número
  const numero = parseInt(prompt("Ingrese un número entero positivo:"));
  
  // Validar que el número sea válido
  if (isNaN(numero) || numero <= 0) {
    console.error("Por favor, ingrese un número entero positivo válido.");
  } else {
    // Mostrar los números impares
    mostrarImparesHasta(numero);
  }