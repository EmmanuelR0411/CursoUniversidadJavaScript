// Forma clasica de trabajar con funciones
let miFuncion = function (){
    console.log('saludos desde mi función');
}

/* Las funciones flecha son funciones anonimas ya que se le asigna una funcion a una variable
no es necesario utilizar la palabra reservada function
las funciones flecha no aplican el concepto de hoisting(que puedan ser llamadas antes de ser definidas) */
const miFuncionFlecha = () => {
    console.log('saludos desde mi función flecha');
}

miFuncionFlecha();




