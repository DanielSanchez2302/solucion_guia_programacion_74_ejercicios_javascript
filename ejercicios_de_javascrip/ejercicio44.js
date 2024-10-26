const texto = '"Esto es una cadena" con "comillas internas" y \"caracteres escapados\"';
const regex = /"(?:\\.|[^"])*"/g;
const coincidencias = texto.match(regex);

console.log(coincidencias);