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

/* Metodo que se encuentra fuera de ambas clases, es independiente, a este etodo le pasamos un 
paramatro y mediante el accede a obtenerDetalles(), dpendiendo del parametro que se le pase accedera
a la clase padre o a la clase hija. A esto se le conoce como polimorfismo, ya que una sola linea de 
codigo puede ejecutar el metodo de la clase padre o de la clase hija
polimorfismo = multiples formas */
function imprimir(tipo){
    console.log( tipo.obtenerDetalles() );
}

let empleado1 = new Empleado('Juan', 3000);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');

imprimir( empleado1 ); //Aqui manda a llamar al metodo de la clase padre
imprimir( gerente1 );//Aqui manda a llamar al metodo sobreescrito de la clase hija