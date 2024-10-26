// Función para convertir un número del 0 al 5 a su representación textual
function convertirNumeroATexto(numero) {
    const numerosTexto = [
      "cero",  // 0
      "uno",   // 1
      "dos",   // 2
      "tres",  // 3
      "cuatro",// 4
      "cinco"  // 5
    ];
  
    // Verificar si el número está dentro del rango permitido
    if (numero >= 0 && numero <= 5) {
      return numerosTexto[numero]; // Retornar la representación textual
    } else {
      return "Número fuera de rango. Por favor, ingresa un número entre 0 y 5.";
    }
  }
  
  // Solicitar la entrada de un número por teclado
  let entrada = prompt("Ingresa un número entre 0 y 5:");
  
  // Convertir la entrada a un número entero
  let numeroIngresado = parseInt(entrada);
  
  // Obtener la representación textual del número
  let resultado = convertirNumeroATexto(numeroIngresado);
  
  // Mostrar el resultado
  console.log("La representación textual es: " + resultado);
  