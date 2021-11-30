// se utiliza para generar una relacion entre los objetos y funciones

enum Role {
    Medico,
    Anestesista,
    Enfermero
}

// Interface se crea para resumir los parametros 
interface Staff {
    name: string,
    email: string,
    role: Role
}

const medico = {
    name: "nombre",
    email: "a@hotmail.com",
    role: Role.Medico
}

// se indica en la funcion que el parametro es igual a la interface para no ir declarando uno por uno.
const imprimirStaff = (staff: Staff ) => { 
   console.log(staff)
}

imprimirStaff(medico)