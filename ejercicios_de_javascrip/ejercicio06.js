function clasificarGrupo() {
    let nombre = prompt("Introduce tu nombre:").toUpperCase();
    let sexo = prompt("Introduce tu sexo (M/F):").toUpperCase();

    if ((sexo === "F" && nombre[0] < "M") || (sexo === "M" && nombre[0] > "N")) {
        console.log("Perteneces al grupo A.");
    } else {
        console.log("Perteneces al grupo B.");
    }
}

clasificarGrupo();
