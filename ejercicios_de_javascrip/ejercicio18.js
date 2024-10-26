function evaluarExpresion(a, b, c) {
    
    let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;
    return resultado;
  }
  
  
  let a = parseFloat(prompt("Ingrese el valor de a:"));
  let b = parseFloat(prompt("Ingrese el valor de b:"));
  let c = parseFloat(prompt("Ingrese el valor de c:"));
  
  
  let resultado = evaluarExpresion(a, b, c);
  
  
  console.log("El resultado de la expresión es:", resultado);