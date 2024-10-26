function calcularCostoTotalCursos(cantidadCursos) {
    const costoCursoNormal = 2000000;
    const costoCursoDescuento = 1200000;
  
    if (cantidadCursos < 6) {
      return cantidadCursos * costoCursoNormal;
    } else {
      return cantidadCursos * costoCursoDescuento;
    }
  }
  
  // Solicitar al usuario la cantidad de cursos
  const cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos:"));
  
  // Calcular y mostrar el costo total
  const costoTotal = calcularCostoTotalCursos(cantidadCursos);
  console.log("El costo total de los cursos es: $" + costoTotal);