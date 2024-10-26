function elegirPizza() {
    let esVegetariana = prompt("¿Quieres una pizza vegetariana? (S/N):").toUpperCase();
    let ingredientesBase = "Mozzarella, Tomate, salsa, cosas de la casa";
    let ingredienteExtra;

    if (esVegetariana === "S") {
        ingredienteExtra = prompt("Elige un ingrediente: Pimiento o Tofu:").toLowerCase();
        console.log(`Tu pizza vegetariana lleva: ${ingredientesBase}, ${ingredienteExtra}`);
    } else {
        ingredienteExtra = prompt("Elige un ingrediente: Pepperoni, Jamón o Salmón:").toLowerCase();
        console.log(`Tu pizza no vegetariana lleva: ${ingredientesBase}, ${ingredienteExtra}`);
    }
}

elegirPizza();
