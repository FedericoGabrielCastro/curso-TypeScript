// para lanzar un error se utiliza el throw y devuelve un valor "never"
// la funciones de tipo "never" , nunca llegar a mostrar lo que se encuentre en return

const tirarError = ( mensaje: string) => {
    throw new Error(mensaje)

    return ""
}

// ejemplo 
const tirarErrorNever = ( mensaje: string): never => {
    throw new Error(mensaje)

    // return ""       Al indicar que sea un valor "never" nunca va a llegar al return
}