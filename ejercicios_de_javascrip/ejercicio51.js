let totalPagos = 0; // Inicializamos el total de pagos a cero

while (true) {
  const consumo = parseFloat(prompt("Ingrese el consumo del cliente (o 0 para terminar):"));

  // Condición para salir del bucle si el usuario ingresa 0
  if (consumo === 0) {
    break;
  }

  // Validamos que el consumo sea un número positivo
  if (consumo > 0) {
    let pago = consumo;

    // Aplicamos el descuento si el consumo supera los $130.000
    if (consumo > 130000) {
      const descuento = consumo * 0.15;
      pago -= descuento;
      console.log("Se aplicó un descuento de $" + descuento.toFixed(2));
    }

    totalPagos += pago;
    console.log("Pago realizado: $" + pago.toFixed(2));
  } else {
    console.log("El consumo debe ser un número positivo.");
  }
}

console.log("El total de pagos es: $" + totalPagos.toFixed(2));