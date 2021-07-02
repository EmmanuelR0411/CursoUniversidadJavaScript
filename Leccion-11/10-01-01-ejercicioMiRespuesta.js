class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){

        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;

    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get idPersona(){

        return Persona.contadorPersonas;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString (){

        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;

    }

}

class Empleado extends Persona {


    constructor (nombre, apellido, edad, sueldo){

        super(nombre, apellido, edad);

        this._sueldo = sueldo;

        
    }

    get idEmpleado(){
        return Persona.contadorPersonas;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + ', ' + this._sueldo;

    }

}

class Cliente extends Persona {
    constructor(nombre, apellido, edad, fechaRegistro){
        
        super(nombre, apellido, edad );

        this._fechaRegistro = fechaRegistro;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente (){
        return Persona.contadorPersonas;
    }

    toString(){
        return super.toString() + ' ' + this.fechaRegistro; 
    }
}


let persona1 = new Persona('Pedro', 'Juarez', 22);

console.log(persona1.toString());

let empleado1 = new Empleado('Juan', 'Martinez', 22, 400);
console.log(empleado1.toString());

let cliente1 = new Cliente('Juan', 'Martinez', 22, new Date());
console.log(cliente1.toString());
console.log(cliente1.idCliente);

