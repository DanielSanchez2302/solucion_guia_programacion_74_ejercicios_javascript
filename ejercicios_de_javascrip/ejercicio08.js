function calcularRendimiento() {
    let puntos = parseFloat(prompt("Introduce tu puntuación (0.0, 0.4, 0.6 o más):"));
    let nivel, salario;

    if (puntos === 0.0) {
        nivel = "Inaceptable";
    } else if (puntos === 0.4) {
        nivel = "Aceptable";
    } else if (puntos >= 0.6) {
        nivel = "Meritorio";
    } else {
        console.error("Puntuación no válida.");
        return;
    }

    salario = 2400 * puntos;
    console.log(`Nivel: ${nivel}, Salario: ${salario}€`);
}

calcularRendimiento();
