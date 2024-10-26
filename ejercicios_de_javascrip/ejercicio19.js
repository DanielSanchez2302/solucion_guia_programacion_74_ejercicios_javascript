const PI = 3.14159;

function calcularAreaYCilindro(radio, altura) {
 
  let areaLateral = 2 * PI * radio * altura;
  let areaBase = PI * Math.pow(radio, 2);
  let areaTotal = areaLateral + 2 * areaBase;
  let volumen = areaBase * altura;

  
  return {
    areaLateral: areaLateral,
    areaTotal: areaTotal,
    volumen: volumen
  };
}


let radio = parseFloat(prompt("Ingrese el radio del cilindro:"));
let altura = parseFloat(prompt("Ingrese la altura del cilindro:"));


let resultado = calcularAreaYCilindro(radio, altura);


console.log("El área lateral del cilindro es:", resultado.areaLateral);
console.log("El área total del cilindro es:", resultado.areaTotal);
console.log("El volumen del cilindro es:", resultado.volumen);