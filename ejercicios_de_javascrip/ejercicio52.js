const tiposEmpleados = ["planta", "administrativo", "contratado"]; // Arreglo de tipos de empleados válidos
const horasSemanales = 40; // Número máximo de horas regulares a la semana
const tasaHoraExtra = 1.5; // Tasa para las horas extras

function calcularPago(tipoEmpleado, horasTrabajadas) {
  // Validaciones
  if (!tiposEmpleados.includes(tipoEmpleado.toLowerCase())) {
    console.error("Tipo de empleado no válido.");
    return;
  }
  if (horasTrabajadas <= 0 || horasTrabajadas > 12 * 7) {
    console.error("El número de horas trabajadas debe estar entre 1 y 84.");
    return;
  }

  // Calcular pago por hora
  let pagoPorHora;
  switch (tipoEmpleado.toLowerCase()) {
    case "planta":
      pagoPorHora = 20000;
      break;
    case "administrativo":
      pagoPorHora = 10000;
      break;
    // Agregar más casos para otros tipos de empleados
  }

  // Calcular horas extras
  const horasExtras = Math.max(0, horasTrabajadas - horasSemanales);
  const pagoHorasExtras = horasExtras * pagoPorHora * tasaHoraExtra;

  // Calcular pago total (sin incluir impuestos y deducciones)
  const pagoTotal = (horasTrabajadas - horasExtras) * pagoPorHora + pagoHorasExtras;

  // Aquí puedes agregar cálculos de impuestos y deducciones
  // ...

  console.log("El pago total es: $" + pagoTotal.toFixed(2));
}

// Ejemplo de uso
const tipoEmpleado = prompt("Ingrese el tipo de empleado:");
const horasTrabajadas = parseFloat(prompt("Ingrese el total de horas trabajadas:"));

calcularPago(tipoEmpleado, horasTrabajadas);