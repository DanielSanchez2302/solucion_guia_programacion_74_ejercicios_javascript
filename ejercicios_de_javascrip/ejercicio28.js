function calcularSueldo(nombre, horasTrabajadas, pagoPorHora) {
    let sueldoTotal = horasTrabajadas * pagoPorHora;
    console.log("El sueldo de " + nombre + " es: $" + sueldoTotal);
  }
  
  
  let nombre = prompt("Ingrese el nombre del empleado:");
  let horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas:"));
  let pagoPorHora = parseFloat(prompt("Ingrese el pago por hora:"));
  
  
  calcularSueldo(nombre, horasTrabajadas, pagoPorHora);