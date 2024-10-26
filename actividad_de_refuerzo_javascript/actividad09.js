// Función para validar el PIN
function validarPin(pin) {
    // Expresión regular para validar 4 o 6 dígitos numéricos
    let regex = /^[0-9]{4}$|^[0-9]{6}$/;
    return regex.test(pin);
  }
  
  // Solicitar la entrada del PIN por teclado
  let pinIngresado = prompt("Ingresa tu PIN (de 4 o 6 dígitos):");
  
  // Validar el PIN ingresado y mostrar el resultado
  if (validarPin(pinIngresado)) {
    console.log("El PIN es válido.");
  } else {
    console.log("El PIN no es válido.");
  }
  