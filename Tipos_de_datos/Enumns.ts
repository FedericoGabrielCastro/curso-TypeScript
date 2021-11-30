// Enumerar tipos de datos fijos en objetos 

enum nombreDeLaVariable {
    estudiante, profesor
}

// modo de utilizar 

let personaTres = {
    nombre: "nombre",
    edad: 28,
    nombreDeLaVariable: nombreDeLaVariable.estudiante
}

// resultado 
console.log(nombreDeLaVariable.estudiante)    // da como resultado 0
console.log(nombreDeLaVariable.profesor)      // da como resultado 1