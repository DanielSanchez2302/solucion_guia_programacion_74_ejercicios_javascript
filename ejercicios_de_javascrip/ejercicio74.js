let entrada;

// Bucle que se ejecuta mientras el usuario no escriba "salir"
do {
    // Pedir al usuario que ingrese un texto
    entrada = prompt("Escribe algo (escribe 'salir' para terminar):");

    // Mostrar en la consola el eco de lo que el usuario ha ingresado, excepto cuando sea "salir"
    if (entrada !== "salir") {
        console.log(`Eco: ${entrada}`);
    }
} while (entrada !== "salir"); // El bucle continúa hasta que se ingrese "salir"

// Mensaje final cuando el usuario sale
console.log("Has terminado el programa.");
