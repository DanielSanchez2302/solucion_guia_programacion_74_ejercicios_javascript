function calcularInteres(saldoInicial) {
    const tasaInteresBaja = 0.03; // 3%
    const tasaInteresAlta = 0.04; // 4%
    const umbral = 100000; // Saldo mínimo para la tasa alta

    let tasaInteres;
    if (saldoInicial < umbral) {
        tasaInteres = tasaInteresBaja;
    } else {
        tasaInteres = tasaInteresAlta;
    }

    const interesAnual = saldoInicial * tasaInteres;
    const saldoFinal = saldoInicial + interesAnual;

    console.log(`El interés anual es: $${interesAnual.toFixed(2)}`);
    console.log(`El saldo final es: $${saldoFinal.toFixed(2)}`);
}

// Ejemplo de uso:
const saldoInicial = parseFloat(prompt("Ingrese el saldo inicial:"));
calcularInteres(saldoInicial);