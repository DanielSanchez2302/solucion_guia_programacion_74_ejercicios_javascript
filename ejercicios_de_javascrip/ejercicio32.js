
function calcularPrecioConDescuento(precioOriginal, descuento) {
    const descuentoEnPesos = precioOriginal * (descuento / 100);
    const precioFinal = precioOriginal - descuentoEnPesos;
    return precioFinal;
  }
  
  
  const precioProducto1 = parseFloat(prompt("Ingrese el precio del primer producto:"));
  const precioProducto2 = parseFloat(prompt("Ingrese el precio del segundo producto:"));
  const precioProducto3 = parseFloat(prompt("Ingrese el precio del tercer producto:"));
  const precioProducto4 = parseFloat(prompt("Ingrese el precio del cuarto producto:"));
  const precioProducto5 = parseFloat(prompt("Ingrese el precio del quinto producto:"));
  
  
  const precioFinalProducto1 = calcularPrecioConDescuento(precioProducto1, 5);
  const precioFinalProducto2 = calcularPrecioConDescuento(precioProducto2, 5);
  const precioFinalProducto3 = calcularPrecioConDescuento(precioProducto3, 2);
  const precioFinalProducto4 = calcularPrecioConDescuento(precioProducto4, 2);
  const precioFinalProducto5 = precioProducto5; 
  
  
  const totalCompra = precioFinalProducto1 + precioFinalProducto2 + precioFinalProducto3 + precioFinalProducto4 + precioFinalProducto5;
  
  
  console.log("Precio final del producto 1:", precioFinalProducto1);
  console.log("Precio final del producto 2:", precioFinalProducto2);
  console.log("Precio final del producto 3:", precioFinalProducto3);
  console.log("Precio final del producto 4:", precioFinalProducto4);
  console.log("Precio final del producto 5:", precioFinalProducto5);
  console.log("Total de la compra:", totalCompra);