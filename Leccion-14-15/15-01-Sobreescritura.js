/* La sobreescritura es cuando una clase hija hereda metodos de la clase padre pero 
 los utiliza de diferente forma (les agrega su propio comportamiento)
 */

//  Creamos la clase padre Empleado
class Empleado{

    // Definimos un constructor que recibe dos atributos
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

// Creamos una clase hija Gerente (la cual hereda cosas de la clase padre Empleado)
// Para eso utilizamos la palabra reservada extends
class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        // Llamamos al constructor de la clase padre
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    
    // Sobreescribimos el metodo de obteneDetalles que se hereda de la clase padre
    // Lo sobreescribimos ya que en esta nueva clase tenemos un nuevo atributo al cual no tiene 
    // acceso la clase padre
    obtenerDetalles(){
        // Con super.obtenerDetalles() mandamos a llamar el metodo de la clase padre
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

let empleado1 = new Empleado('Juan', 3000);
console.log( empleado1.obtenerDetalles() );

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
console.log( gerente1.obtenerDetalles() );
