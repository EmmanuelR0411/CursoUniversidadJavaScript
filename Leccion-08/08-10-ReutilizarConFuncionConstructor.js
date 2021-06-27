//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    // Esta funcion se creara en todos los objetos que se creen a partir del constructor persona
    // Se declara dentro del contructor para que todos los objetos cuenten con ellos
    this.nombreCompleto = function(){
        // THIS trabaja con los valores del objeto que se este utilizando en ese momento
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
// Aquí mandamos a llamar el metodo en el objeto padre
console.log( padre.nombreCompleto() );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
// Aquí mandamos a llamar el metodo en el objeto madre
console.log( madre.nombreCompleto() );

padre.nombre = 'Carlos';

console.log( padre );
console.log( madre );
