
const precioLibro = 10000;
const precioCuaderno = 7550;
const precioLapiz = 5550;


const cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros vendidos:"));
const cantidadCuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos vendidos:"));
const cantidadLapices = parseInt(prompt("Ingrese la cantidad de lapiceros vendidos:"));


const subtotalLibros = cantidadLibros * precioLibro;
const subtotalCuadernos = cantidadCuadernos * precioCuaderno;
const subtotalLapices = cantidadLapices * precioLapiz;


const totalVenta = subtotalLibros + subtotalCuadernos + subtotalLapices;


console.log("El monto total de la venta es: $" + totalVenta);