function calcularCostoLlamada(duracionMinutos) {
   
    const COSTO_POR_MINUTO = 355;
    
    const TASA_IVA = 0.2;
  
    
    let costoBase = duracionMinutos * COSTO_POR_MINUTO;
  
    
    let iva = costoBase * TASA_IVA;
  
    
    let costoTotal = costoBase + iva;
  
    return costoTotal;
  }
  
  
  let duracion = parseFloat(prompt("Ingrese la duración de la llamada en minutos:"));
  
  
  if (duracion <= 0) {
    console.error("La duración de la llamada debe ser un número positivo.");
  } else {
    
    let costoTotal = calcularCostoLlamada(duracion);
  
   
    console.log("El costo total de la llamada es: $" + costoTotal);
  }