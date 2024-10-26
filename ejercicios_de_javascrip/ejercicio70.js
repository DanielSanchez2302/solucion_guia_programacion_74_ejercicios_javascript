// Contraseña a adivinar
const contraseñaCorrecta = "contraseña123";

// Bucle para solicitar la contraseña hasta que sea correcta
let contraseñaUsuario;
do {
  contraseñaUsuario = prompt("Ingrese la contraseña:");
} while (contraseñaUsuario !== contraseñaCorrecta);

// Mensaje de confirmación
console.log("¡Contraseña correcta!");