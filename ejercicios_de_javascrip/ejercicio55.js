function calcularDescuento(tipoMembresia, precioTotal) {
    let descuento = 0;
  
    switch (tipoMembresia.toUpperCase()) {
      case 'A':
        descuento = 0.1;
        break;
      case 'B':
        descuento = 0.15;
        break;
      case 'C':
        descuento = 0.2;
        break;
      default:
        console.error('Tipo de membresía inválido');
        return;
    }
  
    const montoDescuento = precioTotal * descuento;
    const totalAPagar = precioTotal - montoDescuento;
  
    console.log(`Descuento aplicado: ${descuento * 100}%`);
    console.log(`Monto del descuento: $${montoDescuento.toFixed(2)}`);
    console.log(`Total a pagar: $${totalAPagar.toFixed(2)}`);
  }
  
  // Ejemplo de uso:
  const tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):");
  const precioTotal = parseFloat(prompt("Ingrese el precio total de la compra:"));
  
  calcularDescuento(tipoMembresia, precioTotal);