//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    /* 
    *Aqui, gracias a la combinacion de this con la palabra reservada
    *new es que se crea la propiedad a el nuevo objeto
    */
    // this.nombrePropiedad = nombreParametro    
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}


// Aqui es cuando creamos nuevos objetos, mandando a llamar al metodo contructor (Persona)
// Con new se reserva espacio en memoria 
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
// Ahora padre es el nuevo objeto que creamos
console.log( padre );

// Creacion de otro objeto nuevo
/* Cada que se usa la palabra new se crea un nuevo objeto en memoria y cada uno tiene sus 
propios valores
 */
let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre );

// Modificamos el valor de nombre del objeto padre
// No se modifica el objeto madre
padre.nombre = 'Carlos';

// Cada objeto es independiente y cada uno tiene sus propios valores pero mismas caracteristicas
// Gracias a que se reutiliza el contructor Persona
console.log( padre );
console.log( madre );