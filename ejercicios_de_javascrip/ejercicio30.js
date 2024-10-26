function verificarContraseña(contrasena) {
    
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/;
    
   
  
    if (regex.test(contrasena)) {
      return "La contraseña es segura.";
    } else {
      return "La contraseña no cumple los requisitos de seguridad.";
    }
  }
  
  
  let contraseña = prompt("Ingrese su contraseña:");
  let resultado = verificarContraseña(contraseña);
  console.log(resultado);