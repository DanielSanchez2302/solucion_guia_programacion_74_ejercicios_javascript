function verificarTributacion() {
    let edad = parseInt(prompt("Introduce tu edad:"));
    let ingresos = parseFloat(prompt("Introduce tus ingresos mensuales:"));

    if (edad > 16 && ingresos >= 1000) {
        console.log("Debes tributar.");
    } else {
        console.log("No debes tributar.");
    }
}

verificarTributacion();
