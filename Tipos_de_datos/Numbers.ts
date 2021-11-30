// Acepta todo tipo de numeros

const numeroNegativo = -1
const numberPositivo = 1
const cero = 0 
const decimal = 2.3

// Ejecutado en parametros, se tiene que declarar al lado de la variable el tipo de dato.

let valor1: number // se indica que el tipo de variable es un numero
let valor2: number // se indica que el tipo de variable es un numero

function suma( numeroNegativo: number, numberPositivo: number, cero: number, decimal: number )  {

    valor1 = 1 // Anteriormente declarada como "number"
    valor2 = 2 // Anteriormente declarada como "number"

    return numeroNegativo + numberPositivo + cero  + decimal + valor2 + valor1
}