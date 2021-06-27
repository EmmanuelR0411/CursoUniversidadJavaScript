//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

/* prototype sirve para declarar nuevas propiedades  fuera de la funcion constructor, el cual
lo agregara directamente a ese constructor y posteriormente se crearan de igual forma en todos
los objetos que se creen a partir de ese constructor
Podemos modificar tanto atributos como metodos  
**Todos los objetos toman el mismo valor que se le da  al usar el prototype
*/
Persona.prototype.tel = '44332211';

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
// Modifiamos el valor original para el objeto padre
padre.tel = '11223344';
console.log( padre.tel );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
// Modifiamos el valor original para el objeto madre
madre.tel = '66889900';
console.log( madre.tel );

