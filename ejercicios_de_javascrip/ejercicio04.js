function verificarParidad() {
    let numero = parseInt(prompt("Introduce un número entero:"));

    if (numero % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}

verificarParidad();
