function validarNumeroFlotante(numero) {
    
    const regex = /^-?\d+(\.\d+)?(e[+-]?\d+)?$/;
  
    
    return regex.test(numero);
  }
  
  
  let numeroIngresado = prompt("Ingrese un número en punto flotante:");
  
  
  if (validarNumeroFlotante(numeroIngresado)) {
    console.log("El número ingresado es válido.");
  } else {
    console.log("El número ingresado no es válido.");
  }