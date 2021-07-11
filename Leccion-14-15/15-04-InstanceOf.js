class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}
/* instanceof sirve para preguntar si el tipo que se recibe pertenece a cierta clase
variable instanceof Clase
(si la variable es una instancia de) */
function determinarTipo(tipo){
    console.log( tipo.obtenerDetalles() );
    // Se deja el inicio la clase de menor jerarquia, de lo contrario las clases hijas darian
    // verdadero a todo ya que instanceof da true si es una clase hija
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log('Es un tipo Empleado');
        console.log(tipo.departamento);
    }
    // La clase object es la clase padre de todas las clases aqui en Java Script
    else if(tipo instanceof Object){
        console.log('Es un tipo Object');
    }
}

let empleado1 = new Empleado('Juan', 3000);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');

determinarTipo( empleado1 );
determinarTipo( gerente1 );

