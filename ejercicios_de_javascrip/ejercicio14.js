function calcularAreaTriangulo(base, altura) {
    
    let area = (base * altura) / 2;
    return area;
  }
  
  
  let base = parseFloat(prompt("Ingrese la base del triángulo:"));
  let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
  
  
  let resultado = calcularAreaTriangulo(base, altura);
  
  
  console.log("El área del triángulo es:", resultado);