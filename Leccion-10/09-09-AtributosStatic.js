class Persona{

    // Atributo estatico
    /* Este atributo pertenece a la clase y no a ningun objeto */
    static contadorObjetosPersona = 0;

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        /* Para acceder a una variable estatica dentro de la clase se debe de utilizar
        la misma clase y no la palabra this ya que esta variable estatica solo existe en la clase y no en 
        los objetos creados a partir de ella */
        Persona.contadorObjetosPersona++;
        console.log( 'Se incrementa contador:' + Persona.contadorObjetosPersona);
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
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica poliformismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1.toString() );

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.nombreCompleto() );
console.log( empleado1.toString());

//persona1.saludar(); no es posible llamar un método static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log( persona1.contadorObjetosPersona);//Arroja undefine porque la variable no se encuentra en el objeto
//Ya que es estatica solo se encuentra en la clase y no en los objetos

// Para acceder a la variable estatica debemos de hacerlo mediante nuestra clase y no
//mediante un objeto creado a partir de ella
console.log( Persona.contadorObjetosPersona );

// Tambien se puede acceder desde la clase hija
// LAs clases hijas tambien heredan los atributos estaticos
console.log( Empleado.contadorObjetosPersona );