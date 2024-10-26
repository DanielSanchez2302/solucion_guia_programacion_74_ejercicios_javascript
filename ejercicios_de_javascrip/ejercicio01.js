function mostrarSolucion() {
    let edad = prompt("Introduce tu edad:");

    // Validación de números positivos
    if (!isNaN(edad) && edad > 0) {
        if (edad >= 18) {
            console.log("es mayor de edad.");
        } else {
            console.log("es menor de edad.");
        }
    } else {
        console.error("Por favor, introduce un número positivo.");
    }
}


/*function obtenerTipoDeTarjeta(numero) {
    // Expresiones regulares para cada tipo de tarjeta
    const regexVisa = /^4\d{12}(\d{3})?$/; // 13 o 16 dígitos
    const regexMastercard = /^(5[1-5]\d{14}|2(2[2-9]\d{2}|[3-6]\d{3}|7([01]\d{2}|20)))$/; // 16 dígitos
    const regexAmex = /^3[47]\d{13}$/; // 15 dígitos
    const regexDiscover = /^(6011|65|64[4-9]|622[1-9][0-9]{0,2}|622[2-9][0-9]{0,2}|622[1-2][0-9]{0,2})\d{12}$/; // 16 dígitos

    // Comprobar qué tipo de tarjeta es
    if (regexVisa.test(numero)) {
        return "Visa";
    } else if (regexMastercard.test(numero)) {
        return "MasterCard";
    } else if (regexAmex.test(numero)) {
        return "American Express";
    } else if (regexDiscover.test(numero)) {
        return "Discover";
    } else {
        return "Tipo de tarjeta desconocido o inválido.";
    }
}

function solicitarNumero() {
    let numero;

    do {
        // Solicita al usuario ingresar el número de tarjeta
        numero = prompt("Ingresa el número de tu tarjeta de crédito (sin espacios):");

        // Muestra error si el número no es válido
        if (!validarNumero(numero)) {
            console.log("Error: El número debe tener 16 dígitos y ser positivo.");
        }

    } while (!validarNumero(numero));

    const tipoTarjeta = obtenerTipoDeTarjeta(numero);
    console.log("Número válido:", numero);
    console.log("Tipo de tarjeta:", tipoTarjeta);
}

function validarNumero(numero) {
    return /^\d{16}$/.test(numero);
}

// Llamamos a la función para que inicie el proceso
solicitarNumero();*/
