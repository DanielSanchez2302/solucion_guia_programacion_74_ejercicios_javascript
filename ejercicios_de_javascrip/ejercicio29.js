function calcularPromedio(calificacion1, calificacion2, calificacion3, calificacion4) {
    let promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;
    return promedio;
  }
  
  
  let calificacion1 = parseFloat(prompt("Ingrese la primera calificación:"));
  let calificacion2 = parseFloat(prompt("Ingrese la segunda calificación:"));
  let calificacion3 = parseFloat(prompt("Ingrese la tercera calificación:"));
  let calificacion4 = parseFloat(prompt("Ingrese la cuarta calificación:"));
  
 
  let resultado = calcularPromedio(calificacion1, calificacion2, calificacion3, calificacion4);
  console.log("El promedio de las calificaciones es:", resultado);