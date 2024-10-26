function invertirFrase(frase) {
    
    const caracteres = frase.split('');
  
    
    const caracteresInvertidos = caracteres.reverse();
  
    
    const fraseInvertida = caracteresInvertidos.join('');
  
    return fraseInvertida;
  }
  
  
  const fraseOriginal = prompt("Ingrese una frase:");
  
  
  const fraseInvertida = invertirFrase(fraseOriginal);
  
  
  console.log("La frase invertida es:", fraseInvertida);