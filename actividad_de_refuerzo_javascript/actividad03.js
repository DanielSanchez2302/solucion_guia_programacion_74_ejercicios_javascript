function encontrarMayor() {
    // Pedimos al usuario que ingrese los dos números
    const numero1 = parseInt(prompt("Ingrese el primer número:"));
    const numero2 = parseInt(prompt("Ingrese el segundo número:"));

    // Validamos si los valores ingresados son números
    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Por favor, ingrese solo números.");
        return;
    }

    // Comparamos los números y retornamos el mayor
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

// Llamamos a la función y mostramos el resultado
const mayor = encontrarMayor();
console.log("El número mayor es:", mayor);