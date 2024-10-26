function convertirCalificacion(calificacionNumerica) {
    calificacionNumerica = parseFloat(calificacionNumerica); // Convertimos a número flotante
  
    if (calificacionNumerica >= 9.1 && calificacionNumerica <= 10) {
      return "Excelente";
    } else if (calificacionNumerica >= 8.1 && calificacionNumerica < 9.1) {
      return "Muy bien";
    } else if (calificacionNumerica >= 7.5 && calificacionNumerica < 8.1) {
      return "Bien";
    } else {
      return "No aprobado";
    }
  }
  
  // Obtener la calificación del usuario
  let calificacion = prompt("Ingrese la calificación numérica (0-10):");
  
  // Convertir la calificación a literal y mostrar el resultado
  let calificacionLiteral = convertirCalificacion(calificacion);
  console.log("La calificación literal es:", calificacionLiteral);