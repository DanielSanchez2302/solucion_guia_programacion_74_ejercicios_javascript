function calcularRaices(a, b, c, X) {
   
    let discriminante = Math.pow(b, 2) - 4 * a * (c - X);
  
    
    if (discriminante < 0) {
      return "La ecuación no tiene raíces reales.";
    } else if (discriminante === 0) {
      
      let raiz = -b / (2 * a);
      return `La ecuación tiene una raíz doble: x = ${raiz}`;
    } else {
      
      let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      return `Las raíces de la ecuación son: x1 = ${raiz1} y x2 = ${raiz2}`;
    }
  }
  
  
  let a = parseFloat(prompt("Ingrese el coeficiente a:"));
  let b = parseFloat(prompt("Ingrese el coeficiente b:"));
  let c = parseFloat(prompt("Ingrese el coeficiente c:"));
  let X = parseFloat(prompt("Ingrese el valor de X:"));
  
 
  let resultado = calcularRaices(a, b, c, X);
  
  
  console.log(resultado);