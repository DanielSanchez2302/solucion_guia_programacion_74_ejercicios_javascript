const PI = 3.14159; 

function calcularVolumenEsfera(radio) {
 
  let volumen = (4 / 3) * PI * Math.pow(radio, 3);
  return volumen;
}


let radio = parseFloat(prompt("Ingrese el radio de la esfera:"));


let volumen = calcularVolumenEsfera(radio);


console.log("El volumen de la esfera es:", volumen);