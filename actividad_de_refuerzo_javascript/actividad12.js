// Función para sumar dos números y devolver el resultado en binario
function sumarEnBinario(num1, num2) {
    let suma = num1 + num2;
    return suma.toString(2); // Convertir la suma a binario
  }
  
  // Solicitar la entrada de los dos números por teclado
  let numero1 = parseInt(prompt("Ingresa el primer número:"));
  let numero2 = parseInt(prompt("Ingresa el segundo número:"));
  
  // Obtener la suma en binario
  let resultadoBinario = sumarEnBinario(numero1, numero2);
  
  console.log("La suma en binario es: " + resultadoBinario);
  