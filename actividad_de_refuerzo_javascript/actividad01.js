// Función para comparar dos números ingresados por el usuario
function compararNumeros() {
    // Solicitar los dos números al usuario
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    
    // Comparar los números y mostrar el mayor en una alerta
    const mayor = (num1 > num2) ? num1 : num2;
    alert(`El número mayor es: ${mayor}`);
}

// Llamar a la función para que el usuario ingrese los números
compararNumeros();
