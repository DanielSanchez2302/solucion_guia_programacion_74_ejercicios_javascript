
function calcularVolumen(radio, altura) {
    const pi = Math.PI;
    return pi * Math.pow(radio, 2) * altura;
  }
  
 
  function calcularTiempoLlenado(volumen, caudal) {
   
    const volumenEnLitros = volumen * 1000;
  
   
    const tiempoEnSegundos = volumenEnLitros / caudal;
    const tiempoEnMinutos = tiempoEnSegundos / 60;
  
    return tiempoEnMinutos;
  }
  
  
  const radio = parseFloat(prompt("Ingrese el radio del depósito en metros: "));
  const altura = parseFloat(prompt("Ingrese la altura del depósito en metros: "));
  const caudal = parseFloat(prompt("Ingrese el caudal en litros por segundo: "));
  
  
  const volumen = calcularVolumen(radio, altura);
  
  
  const tiempoLlenado = calcularTiempoLlenado(volumen, caudal);
  
  
  console.log("El tiempo estimado para llenar el depósito es:", tiempoLlenado.toFixed(2), "minutos");