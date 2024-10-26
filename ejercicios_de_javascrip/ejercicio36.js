function calcularHarina(cacao) {
    
    const proporcionHarinaCacao = 100 / 10;
  
    
    const harina = cacao * proporcionHarinaCacao;
  
    return harina;
  }
  
  
  const cacaoDeseado = parseFloat(prompt("Ingrese la cantidad de cacao en gramos:"));
  
 
  const harinaNecesaria = calcularHarina(cacaoDeseado);
  
  
  console.log("Necesitarás", harinaNecesaria, "gramos de harina.");