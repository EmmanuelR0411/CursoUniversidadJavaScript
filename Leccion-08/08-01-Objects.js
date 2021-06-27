let x = 10;
console.log(x.length);

/* Declaramos un objeto
Los objetos contienen propiedades y metodos, 
esto es lo que los diferencia de los tipos de datos
primitivos
*/
let persona = {
    // Estas son las propiedades del objeto, los cuales puden ser de cualquier tipo de valor
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
}

// De esta forma podemos acceder a los atributos(es lo mismo que propiedades) que declaramos en nuestro objeto
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
// nombreDeLaVariable.propiedad, de esta forma accedemos a cada propiedad individualmente
console.log(persona);
// Así imprimimos todo el objeto