
function calcularEdad(anioNacimiento) {
    const anioActual = new Date().getFullYear();
    const edad = anioActual - anioNacimiento;
    return edad;
  }
  
  
  const anioNacimiento = parseInt(prompt("Ingrese el año de nacimiento:"));
  
  
  const edad = calcularEdad(anioNacimiento);
  
  
  console.log("La edad de la persona es:", edad, "años.");