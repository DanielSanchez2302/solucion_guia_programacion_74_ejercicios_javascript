function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
  
  
  let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
  let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
  
  
  let area = calcularAreaRectangulo(base, altura);
  console.log("El área del rectángulo es:", area);