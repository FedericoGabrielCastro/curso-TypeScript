// Objetos acepta todos los tipos de datos 

let ejemplo: object = {} // el tipo de dato "object" se reemplaza por el tipo de dato que tengan dentro

let persona: {
        // Declarando las variables // 
    nombre: string,
    edad: number,
    direccion: {
        calle: string,
        timbre: boolean
        }
    } = {
        // Contenido del objecto //
    nombre: "Federico",
    edad: 28,
    direccion: {
        calle : "casa",
        timbre: true
    }
}

// Ejecutado en parametros.

console.log (persona.nombre) 
console.log (persona.edad)
console.log (persona.direccion.calle)
console.log (persona.direccion.timbre)