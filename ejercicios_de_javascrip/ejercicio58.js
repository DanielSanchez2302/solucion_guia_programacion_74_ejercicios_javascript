function obtenerSignoZodiacal(mes) {
    mes = mes.toLowerCase(); // Convertimos el mes a minúsculas para evitar problemas de mayúsculas

    if (mes === "enero") {
        return "Capricornio";
    } else if (mes === "febrero") {
        return "Acuario";
    } else if (mes === "marzo") {
        // Aquí se debe considerar el día para determinar entre Piscis o Aries
        const dia = parseInt(prompt("Ingrese el día del mes de marzo:"));
        if (dia <= 20) {
            return "Piscis";
        } else {
            return "Aries";
        }
    } else if (mes === "abril") {
        // ... y así sucesivamente para los demás meses
    } else {
        return "Mes inválido";
    }
}

// Obtener el mes del usuario
const mesIngresado = prompt("Ingrese el nombre del mes (en minúsculas):");

// Obtener el signo zodiacal y mostrarlo
const signo = obtenerSignoZodiacal(mesIngresado);
console.log("Tu signo zodiacal es:", signo);