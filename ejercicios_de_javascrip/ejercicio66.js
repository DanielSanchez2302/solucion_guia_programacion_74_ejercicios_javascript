function calcularInversion(capitalInicial, interesAnual, numAnios) {
    let capitalActual = capitalInicial;
    for (let i = 1; i <= numAnios; i++) {
      const intereses = capitalActual * (interesAnual / 100);
      capitalActual += intereses;
      console.log(`Año ${i}: ${capitalActual.toFixed(2)}`);
    }
  }
  
  // Pedir datos al usuario
  const capitalInicial = parseFloat(prompt("Ingrese la cantidad a invertir:"));
  const interesAnual = parseFloat(prompt("Ingrese el interés anual (%):"));
  const numAnios = parseInt(prompt("Ingrese el número de años:"));
  
  // Validar datos
  if (isNaN(capitalInicial) || capitalInicial <= 0) {
    console.error("La cantidad a invertir debe ser un número positivo.");
  } else if (isNaN(interesAnual) || interesAnual < 0) {
    console.error("El interés anual debe ser un número positivo.");
  } else if (isNaN(numAnios) || numAnios <= 0) {
    console.error("El número de años debe ser un número entero positivo.");
  } else {
    // Calcular y mostrar resultados
    calcularInversion(capitalInicial, interesAnual, numAnios);
  }