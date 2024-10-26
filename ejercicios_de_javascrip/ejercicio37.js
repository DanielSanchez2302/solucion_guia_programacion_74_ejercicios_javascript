
const numeroCajas = parseInt(prompt("Ingrese el número de cajas:"));
const pesoPorCaja = parseInt(prompt("Ingrese el peso de cada caja en kilogramos:"));


const pesoTotal = numeroCajas * pesoPorCaja;


console.log("El camión transporta", pesoTotal, "kilogramos.");