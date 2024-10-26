function kmhAMs(velocidadKmh) {
    
    const FACTOR_CONVERSION = 5/18;
    
    
    let velocidadMs = velocidadKmh * FACTOR_CONVERSION;
    
    return velocidadMs;
  }
  
  
  let velocidadKmh = parseFloat(prompt("Ingrese la velocidad en kilómetros por hora:"));
  
  
  if (velocidadKmh <= 0) {
    console.error("La velocidad debe ser un número positivo.");
  } else {
    
    let velocidadMs = kmhAMs(velocidadKmh);
    
    
    console.log("La velocidad en metros por segundo es:", velocidadMs);
  }