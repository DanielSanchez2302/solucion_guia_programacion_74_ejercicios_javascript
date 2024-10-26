
function calcularDineroInicial(precioLlaves, cantidadLlaves, precioBomba, cantidadBombas, precioPernos, cantidadPernos, dineroSobrante) {
    
    const gastoLlaves = precioLlaves * cantidadLlaves;
    const gastoBombas = precioBomba * cantidadBombas;
    const gastoPernos = precioPernos * cantidadPernos;
    const gastoTotal = gastoLlaves + gastoBombas + gastoPernos;
  
   
    const dineroInicial = gastoTotal + dineroSobrante;
  
    return dineroInicial;
  }
  
  
  const precioLlaves = parseFloat(prompt("Ingrese el precio de un juego de llaves hexagonales:"));
  const cantidadLlaves = 5; 
  const precioBomba = 1168000; 
  const cantidadBombas = 1;
  const precioPernos = 87000; 
  const cantidadPernos = 3; 
  const dineroSobrante = 91000; 
  
  
  const dineroInicial = calcularDineroInicial(precioLlaves, cantidadLlaves, precioBomba, cantidadBombas, precioPernos, cantidadPernos, dineroSobrante);
  console.log("El jefe de obra tenía inicialmente:", dineroInicial, "pesos");