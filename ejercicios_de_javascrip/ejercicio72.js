// Solicitar al usuario que ingrese una palabra
const palabra = prompt("Ingresa una palabra:");

// Mostrar cada letra empezando por la última
for (let i = palabra.length - 1; i >= 0; i--) {
    console.log(palabra[i]);
}
