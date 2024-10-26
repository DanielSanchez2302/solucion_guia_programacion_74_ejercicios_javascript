function seleccionarJugador(nombre, edad, estatura, peso) {
    if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
      console.log(`${nombre} cumple con los requisitos para el equipo.`);
    } else {
      console.log(`${nombre} no cumple con los requisitos.`);
    }
  }
  
  // Ejemplo de uso:
  const nombreJugador = prompt("Ingrese el nombre del jugador:");
  const edadJugador = parseInt(prompt("Ingrese la edad del jugador:"));
  const estaturaJugador = parseFloat(prompt("Ingrese la estatura del jugador (en cm):"));
  const pesoJugador = parseFloat(prompt("Ingrese el peso del jugador (en kg):"));
  
  seleccionarJugador(nombreJugador, edadJugador, estaturaJugador, pesoJugador);