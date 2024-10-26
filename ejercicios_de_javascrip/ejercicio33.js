function calcularEdadMadre(fechaNacimientoMadre, fechaNacimientoHijo) {
   
    const fechaMadre = new Date(fechaNacimientoMadre);
    const fechaHijo = new Date(fechaNacimientoHijo);
  
   
    const diferenciaMilisegundos = fechaHijo - fechaMadre;
  
    
    const dias = diferenciaMilisegundos / (1000 * 60 * 60 * 24);
    const anos = dias / 365.25;
  
    return anos;
  }
  
  
  const fechaNacimientoMadre = prompt("Ingrese la fecha de nacimiento de la madre (dd/mm/aaaa):");
  const fechaNacimientoHijo = prompt("Ingrese la fecha de nacimiento del hijo (dd/mm/aaaa):");
  
  
  const edadMadre = calcularEdadMadre(fechaNacimientoMadre, fechaNacimientoHijo);
  console.log("La madre tenía aproximadamente", edadMadre.toFixed(2), "años cuando nació su hijo.");