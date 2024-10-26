function cuentaAtras(numero) {
    let numeros = [];
    for (let i = numero; i >= 0; i--) {
      numeros.push(i);
    }
    console.log("Cuenta atrás desde " + numero + ": " + numeros.join(", "));
  }
  
  // Pedir al usuario un número
  const numero = parseInt(prompt("Ingrese un número entero positivo:"));
  
  // Validar que el número sea válido
  if (isNaN(numero) || numero <= 0) {
    console.error("Por favor, ingrese un número entero positivo válido.");
  } else {
    // Mostrar la cuenta atrás
    cuentaAtras(numero);
  }