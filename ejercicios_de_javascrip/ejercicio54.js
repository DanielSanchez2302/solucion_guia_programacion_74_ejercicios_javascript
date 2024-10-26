// Pedimos al usuario que ingrese los dos números
const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Verificamos si el primer número es mayor que el segundo
if (numero1 > numero2) {
    // Si es mayor, realizamos la resta y mostramos el resultado
    const resultado = numero1 - numero2;
    console.log("La resta es: " + resultado);
} else {
    // Si no es mayor, mostramos un mensaje de error
    console.log("No se puede restar un número menor de otro mayor.");
}