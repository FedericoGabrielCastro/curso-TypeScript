// Acepta todo tipo de string

const comillasDoble = "texto"
const comillasSimple = 'texto'
const comillasChuecas = `texto`

// Ejecutado en parametros, se tiene que declarar al lado de la variable el tipo de dato.

let texto1: string // se indica que el tipo de variable es un string
let texto2: string // se indica que el tipo de variable es un string
let texto3: string // se indica que el tipo de variable es un string

function texto( comillasDoble: string, comillasSimple: string, comillasChuecas: string)  {

    texto1 = "texto" // Anteriormente declarada como "string"
    texto2 = 'texto' // Anteriormente declarada como "string"
    texto2 = `texto` // Anteriormente declarada como "string"

    return texto1 + texto2 + texto3 + comillasSimple + comillasDoble + comillasChuecas
}