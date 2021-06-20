//Tipos primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
}

//Paso por valor
cambiarValor(x);//10
console.log(x);
//console.log(a);


// Creamos un objeto (la buena practica es definirlo como constante)
// La variable persona almacena una referencia a un objeto (a diferencia de x que almacena un valor)
const persona = {
    // Propiedadeds del objeto (atributos)
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    // nombre de la variable que apunta a cierto objeto "." nombre del atributo a modificar
    // De esta forma se cambian los valores ya que ambos apuntan a la misma referencia (objeto)
    p1.nombre = 'Carlos';
    // LA variable p1 apunta al objeto que se creo en memoria en lineas anteriores
    p1.apellido = 'Lara';
}

//Paso por referencia (hace referencia al objeto)
cambiarValorObjeto( persona );
console.log( persona );

// Paso por valor no modifica el valor de la variable original y paso por referencia si lo hace