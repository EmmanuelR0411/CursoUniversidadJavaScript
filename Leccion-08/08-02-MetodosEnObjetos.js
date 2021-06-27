let x = 10;
console.log(x.length);

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    // De esta forma se agregan los metodos a los objetos
    //Se declara el nombre del metodo y se le asigna una funcion(de tipo expresion)
    nombreCompleto: function(){
        // Para acceder a los atributos de los objetos debemos utilizar el operador this
        // this apunta al objeto, pero al que se esta ejecutando en este momento
        return this.nombre + ' ' + this.apellido;
    }
}
// Dentro del objeto se accede a sus propiedades con la palabra this
// Fuera del objeto se accede a sus propiedades con el nombre del objeto
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);

// De esta forma accedemos a la nueva propiedad que creamos
console.log(persona.nombreCompleto());

console.log(persona);