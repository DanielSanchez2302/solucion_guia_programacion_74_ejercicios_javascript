// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) return false; // Los números menores o iguales a 1 no son primos
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Si encuentra un divisor, no es primo
        }
    }
    return true;
}

// Solicitar al usuario que ingrese un número entero
const numero = parseInt(prompt("Ingresa un número entero:"));

// Verificar si el número es primo y mostrar el resultado
if (esPrimo(numero)) {
    console.log(`${numero} es un número primo.`);
} else {
    console.log(`${numero} no es un número primo.`);
}
