function verificarContraseña() {
    let contraseñaGuardada = "DANIELSANCHEZO223adso";
    let contraseñaIngresada = prompt("Introduce tu contraseña:");

    // Validación de alfanuméricos
    if (/^[a-z0-9]+$/i.test(contraseñaIngresada)) {
        if (contraseñaGuardada.toLowerCase() === contraseñaIngresada.toLowerCase()) {
            console.log("La contraseña es correcta.");
        } else {
            console.log("La contraseña no coincide.");
        }
    } else {
        console.error("La contraseña solo debe contener caracteres alfanuméricos.");
    }
}

verificarContraseña();
