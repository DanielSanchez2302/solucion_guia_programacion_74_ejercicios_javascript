function calcularEntrada() {
    let edad = parseInt(prompt("Introduce tu edad:"));
    let precio;

    if (edad < 4) {
        precio = 0;
    } else if (edad <= 18) {
        precio = 5;
    } else {
        precio = 10;
    }

    console.log(`El precio de la entrada es: ${precio}€`);
}

calcularEntrada();
