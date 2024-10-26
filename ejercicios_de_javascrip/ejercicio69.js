function dibujarTriangulo(altura) {
    for (let i = 1; i <= altura; i++) {
      let linea = "";
      for (let j = 1; j <= i; j++) {
        linea += "*";
      }
      console.log(linea);
    }
  }
  
  // Pedir al usuario la altura del triángulo
  const altura = parseInt(prompt("Ingrese la altura del triángulo:"));
  
  // Validar que la altura sea un número entero positivo
  if (isNaN(altura) || altura <= 0) {
    console.error("Por favor, ingrese un número entero positivo.");
  } else {
    // Dibujar el triángulo
    dibujarTriangulo(altura);
  }