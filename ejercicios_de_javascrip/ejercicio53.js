// Tasa de IVA (ajusta según tu región)
const tasaIVA = 0.16;

// Inicializamos variables para almacenar los totales
let subtotal = 0;
let ivaTotal = 0;

// Pedimos al usuario que ingrese el precio de cada producto
for (let i = 1; i <= 5; i++) {
  const precioProducto = parseFloat(prompt("Ingrese el precio del producto " + i + ":"));
  subtotal += precioProducto;
}

// Calculamos el IVA total
ivaTotal = subtotal * tasaIVA;

// Calculamos el total a pagar
const total = subtotal + ivaTotal;

// Mostramos los resultados
console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("IVA: $" + ivaTotal.toFixed(2));
console.log("Total a pagar: $" + total.toFixed(2));