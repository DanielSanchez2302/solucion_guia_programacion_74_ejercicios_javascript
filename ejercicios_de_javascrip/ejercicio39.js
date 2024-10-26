function calcularCostoPintura(area, precioPorMetroCuadrado) {
   
    const costoTotal = area * precioPorMetroCuadrado;
    
    
    return costoTotal;
  }
  
 
  const areaAPintar = parseFloat(prompt("Ingrese el área a pintar en metros cuadrados:"));
  const precioMetroCuadrado = parseFloat(prompt("Ingrese el precio por metro cuadrado:"));
  
  
  const costoTotal = calcularCostoPintura(areaAPintar, precioMetroCuadrado);
  
 
  console.log("El costo total del trabajo de pintura es: $" + costoTotal);