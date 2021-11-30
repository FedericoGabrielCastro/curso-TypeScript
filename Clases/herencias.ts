// heredar datos de otra clase 

class ClaseUno {
    constructor (
        public readonly name: string,
        private readonly model: string,
        protected readonly color: string
    ) {}
}

class ClaseDos extends ClaseUno {  // todo lo que contiene ClaseDos va a ser llevado a ClaseUno.

    // ####### diferentes tipos de visibilidad  #######
    // atributo : public ( llamado desde cualquier lugar )
    // atributo : private ( llamado dentro de la misma clase )
    // atributo : protected ( llamado desde la misma clase y derivados de la clase )

}