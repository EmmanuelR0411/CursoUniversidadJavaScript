class Persona{
    constructor(nombre, apellido){
        /* Debido a que los metodos no se pueden llamar igual que las propiedades
        *por eso se acostumbra usar un guion bajo antes del nombre
        *Sin embargo tambien aplica el utilizar propiedades privadas con un # antes del nombre
         */
        this._nombre = nombre; 
        this._apellido = apellido;
    }
    // El metodo get se utiliza para acceder a los valores
    get nombre(){
        return this._nombre;
    }
    // El metodo set se utiliza para modificar
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Juan', 'Perez');
persona1.nombre = 'Juan Carlos';//set nombre('Juan Carlos')
console.log( persona1.nombre );//get nombre