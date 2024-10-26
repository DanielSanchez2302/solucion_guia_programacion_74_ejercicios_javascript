function calcularPrecioConDescuento(precioOriginal) {
    
    const DESCUENTO = 0.1;
  
    
    const descuento = precioOriginal * DESCUENTO;
  
    
    const precioFinal = precioOriginal - descuento;
  
    return precioFinal;
  }
  
  
  let precioOriginal = parseFloat(prompt("Ingrese el precio original del medicamento:"));
  
  
  if (precioOriginal <= 0) {
    console.error("El precio debe ser un número positivo.");
  } else {
    
    let precioFinal = calcularPrecioConDescuento(precioOriginal);
  
    
    console.log("El precio final del medicamento con el descuento es: $" + precioFinal);
  }