// Solicitar al usuario que ingrese una frase y una letra
const frase = prompt("Ingresa una frase:");
const letra = prompt("Ingresa una letra para buscar en la frase:");

// Inicializar un contador
let contador = 0;

// Recorrer la frase y contar cuántas veces aparece la letra
for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
        contador++;
    }
    
}
contador();
