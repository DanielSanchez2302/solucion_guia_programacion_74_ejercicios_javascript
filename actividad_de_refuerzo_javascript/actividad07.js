function encontrarMayor(numeros) {
    // Inicializamos la variable para almacenar el mayor número
    let mayor = numeros[0];
  
    // Iteramos sobre cada elemento del arreglo
    for (let i = 1; i < numeros.length; i++) {
      // Si el elemento actual es mayor que el mayor actual, lo actualizamos
      if (numeros[i] > mayor) {
        mayor = numeros[i];
      }
    }
  
    return mayor;
  }
  
  // Función para solicitar los números al usuario y crear el arreglo
  function obtenerNumeros() {
    const numeros = [];
    let numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));
  
    while (numero !== 0) {
      numeros.push(numero);
      numero = parseInt(prompt("Ingrese otro número (ingrese 0 para terminar):"));
    }
  
    return numeros;
  }
  
  // Obtener los números del usuario
  const arregloNumeros = obtenerNumeros();
  
  // Encontrar y mostrar el número mayor
  const numeroMayor = encontrarMayor(arregloNumeros);
  console.log("El número mayor es:", numeroMayor);