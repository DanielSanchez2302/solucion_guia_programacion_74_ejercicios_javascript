function calcularEstadisticasNotas(notas) {
    let notaMaxima = 0;
    let notaMinima = 100;
    let cantidadNotasMaximas = 0;
    let cantidadA = 0;
    let cantidadB = 0;
    let cantidadC = 0;
    let cantidadD = 0;

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        if (nota > notaMaxima) {
            notaMaxima = nota;
            cantidadNotasMaximas = 1; // Reiniciamos el contador cada vez que encontramos una nueva nota máxima
        } else if (nota === notaMaxima) {
            cantidadNotasMaximas++;
        } else if (nota >= 90) {
            cantidadA++;
        } else if (nota >= 80) {
            cantidadB++;
        } else if (nota >= 70) {
            cantidadC++;
        } else if (nota >= 60) {
            cantidadD++;
        } else {
            notaMinima = nota;
        }
    }

    console.log("La nota más alta es:", notaMaxima);
    console.log("La nota más baja es:", notaMinima);
    console.log("Cantidad de alumnos con nota máxima:", cantidadNotasMaximas);
    console.log("Cantidad de alumnos con nota 'A':", cantidadA);
    console.log("Cantidad de alumnos con nota 'B':", cantidadB);
    console.log("Cantidad de alumnos con nota 'C':", cantidadC);
    console.log("Cantidad de alumnos con nota 'D':", cantidadD);
}

// Ingresar la cantidad de notas
const cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas:"));

// Crear un arreglo para almacenar las notas
const notas = [];

// Llenar el arreglo con las notas ingresadas por el usuario
for (let i = 0; i < cantidadNotas; i++) {
    const nota = parseInt(prompt("Ingrese la nota " + (i + 1) + ":"));
    notas.push(nota);
}

// Calcular las estadísticas
calcularEstadisticasNotas(notas);