function calcularVelocidad(distanciaEnMetros, tiempoEnSegundos) {
    
    let velocidad = distanciaEnMetros / tiempoEnSegundos;
    return velocidad;
  }
  
  
  let distanciaEnKilometros = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros:"));
  let tiempoEnMinutos = parseFloat(prompt("Ingrese el tiempo empleado en minutos:"));
  
  
  let distanciaEnMetros = distanciaEnKilometros * 1000;
  let tiempoEnSegundos = tiempoEnMinutos * 60;
  
  
  let velocidad = calcularVelocidad(distanciaEnMetros, tiempoEnSegundos);
  
 
  console.log("La velocidad del proyectil es:", velocidad, "metros por segundo.");