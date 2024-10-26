
const totalTapas = parseInt(prompt("Ingrese el total de tapas recolectadas:"));


const parteMartin = totalTapas * (2/3);
const parteJairo = totalTapas * (1/4);


const parteLorena = totalTapas - parteMartin - parteJairo;


console.log("Lorena se queda con", parteLorena, "tapas.");