function calcularPromedioFinal(parcial1, parcial2, parcial3, examenFinal, trabajoFinal) {
    
    let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
  
   
    let promedioFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);
  
    return promedioFinal;
  }
  
  
  let parcial1 = parseFloat(prompt("Ingrese la calificación del primer parcial:"));
  let parcial2 = parseFloat(prompt("Ingrese la calificación del segundo parcial:"));
  let parcial3 = parseFloat(prompt("Ingrese la calificación del tercer parcial:"));
  let examenFinal = parseFloat(prompt("Ingrese la calificación del examen final:"));
  let trabajoFinal = parseFloat(prompt("Ingrese la calificación del trabajo final:"));
  
  
  let resultado = calcularPromedioFinal(parcial1, parcial2, parcial3, examenFinal, trabajoFinal);
  console.log("El promedio final es:", resultado);