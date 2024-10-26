// Función para generar un número aleatorio entre 1 y 10
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1; // Genera un número entre 1 y 10
  }
  
  // Función para verificar si un número es par o impar
  function esParOImpar(numero) {
    return numero % 2 === 0 ? 'par' : 'impar'; // Verifica si el número es par o impar
  }
  
  // Solicitar la entrada del usuario (no es necesario para la lógica, pero se incluye por requerimiento)
  let entrada = prompt("Presiona OK para generar un número aleatorio entre 1 y 10.");
  
  // Generar un número aleatorio
  let numeroAleatorio = generarNumeroAleatorio();
  
  // Verificar si el número es par o impar
  let resultado = esParOImpar(numeroAleatorio);
  
  // Mostrar el resultado
  console.log("El número generado es: " + numeroAleatorio + " y es " + resultado + ".");
  