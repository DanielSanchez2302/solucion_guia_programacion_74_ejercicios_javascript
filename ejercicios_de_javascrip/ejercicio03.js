function dividirNumeros() {
    try {
        let num1 = parseFloat(prompt("Introduce el dividendo:"));
        let num2 = parseFloat(prompt("Introduce el divisor:"));

        if (num2 === 0) {
            throw new Error("El divisor no puede ser cero.");
        }

        let resultado = num1 / num2;
        console.log(`El resultado es: ${resultado}`);
    } catch (error) {
        console.error("Error: " + error.message);
    }
}

dividirNumeros();
