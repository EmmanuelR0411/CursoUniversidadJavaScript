class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

/* Para poder heredar de una clase padre, debemos de utilizar la palabra extends y despues
el nombre de la clase de la que se va a heredar 
*class Nombre extends ClasePadre{}
*/
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        // Para llamar constructor de la clase padre debemos usar la palabra super
        // super(parametros)
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );//get nombre

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
// Aqui estamos llamando al metodo get nombre, el cual hereda de la clase padre(Persona)
console.log( empleado1.nombre );
