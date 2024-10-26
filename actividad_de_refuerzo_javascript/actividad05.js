function contarSilabas(palabra) {
    // Eliminar signos de puntuación y convertir a minúsculas
    palabra = palabra.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
    // Reglas básicas de silabación (simplificadas)
    const vocales = 'aeiou';
    let contadorSilabas = 0;
    let vocalAnterior = false;
  
    for (let i = 0; i < palabra.length; i++) {
      if (vocales.includes(palabra[i])) {
        if (!vocalAnterior) {
          contadorSilabas++;
        }
        vocalAnterior = true;
      } else {
        vocalAnterior = false;
      }
    }
  
    return contadorSilabas;
  }
  
  // Obtener la palabra del usuario
  const palabra = prompt("Ingrese una palabra:");
  
  // Calcular y mostrar el número de sílabas
  const numSilabas = contarSilabas(palabra);
  console.log("La palabra '" + palabra + "' tiene " + numSilabas + " sílabas.");