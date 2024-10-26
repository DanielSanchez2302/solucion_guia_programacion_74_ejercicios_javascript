function calcularImpuesto() {
    let renta = parseFloat(prompt("Introduce tu renta anual:"));
    let porcentaje;

    if (renta > 60000) {
        porcentaje = 45;
    } else if (renta > 35000) {
        porcentaje = 20;
    } else if (renta > 20000) {
        porcentaje = 10;
    } else if (renta >= 10000) {
        porcentaje = 5;
    } else {
        porcentaje = 0;
    }

    console.log(`El tipo impositivo es del ${porcentaje}%.`);
}

calcularImpuesto();
