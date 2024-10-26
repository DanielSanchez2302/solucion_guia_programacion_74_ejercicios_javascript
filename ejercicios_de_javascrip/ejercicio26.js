function celsiusAFahrenheit(celsius) {
    
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  
  let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
  
  
  if (isNaN(celsius)) {
    console.error("Por favor, ingrese un número válido.");
  } else {
    
    let fahrenheit = celsiusAFahrenheit(celsius);
    console.log(celsius + " grados Celsius equivalen a " + fahrenheit + " grados Fahrenheit.");
  }