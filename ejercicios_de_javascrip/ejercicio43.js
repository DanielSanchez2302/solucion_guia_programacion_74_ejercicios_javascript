
const DOLAR_POR_PESO = 0.00025; 
const EURO_POR_PESO = 0.00023; 


const pesos = parseFloat(prompt("Ingrese la cantidad de pesos a convertir:"));


const dolares = pesos * DOLAR_POR_PESO;
const euros = pesos * EURO_POR_PESO;


console.log(pesos + " pesos equivalen a:");
console.log(dolares.toFixed(2) + " dólares.");
console.log(euros.toFixed(2) + " euros.");