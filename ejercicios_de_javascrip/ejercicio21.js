const PI = 3.14159;

function calcularVolumenElipsoide(a, b, c) {
  
  let volumen = (4 / 3) * PI * a * b * c;
  return volumen;
}


let a = parseFloat(prompt("Ingrese el semieje mayor (a):"));
let b = parseFloat(prompt("Ingrese el semieje medio (b):"));
let c = parseFloat(prompt("Ingrese el semieje menor (c):"));


let volumen = calcularVolumenElipsoide(a, b, c);


console.log("El volumen del elipsoide es:", volumen);