// Crearndo classes
// lo primero que ejecuta son los constructores

class NombreDeLaClase {
    atributo : string  // Nombre de la variable + el tipo de variable

    constructor(b: string) {
        this.atributo = b
    }

    // para hacer referencia a la instancia de la clase hay que utilizar "this."
    nombreDelMetodo () {
        console.log(`texto + ${this.atributo}`)
    }

}

// new idicia que el objecto se guarda en la momoria ( llama al constructor )
const nombreVariable = new NombreDeLaClase("texto asignado en el contructor")
nombreVariable.nombreDelMetodo() // se crea una instancia fuera de la clase 

console.log(nombreVariable)


// El constructor se puede resumir de manera mas facil 
   
    // constructor(
    //     private atributo: string
    // )