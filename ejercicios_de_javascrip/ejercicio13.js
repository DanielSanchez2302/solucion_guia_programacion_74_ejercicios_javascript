function calcularMedia(num1, num2, num3, num4) {
    
    let suma = num1 + num2 + num3 + num4;
  
    
    let media = suma / 4;
  
  
    return media;
  }
  
  
  let numero1 = parseFloat(prompt("Ingrese el primer número:"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  let numero3 = parseFloat(prompt("Ingrese el tercer número:"));
  let numero4 = parseFloat(prompt("Ingrese el cuarto número:"));
  
  
  let resultado = calcularMedia(numero1, numero2, numero3, numero4);
  
  
  console.log("La media de los números es:", resultado);