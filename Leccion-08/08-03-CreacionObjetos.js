let x = 10;
console.log(x.length);

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());

console.log(persona);

/* ESta es otra forma de crear un nuevo objetpo
* con la palabra reservada new, definimos que se aparte un espacio en memoria 
*/

let persona2 = new Object(); //Creamos un nuevo objeto
// De esta forma agregamos atributos o metodos, dinamicamente al nuevo objeto
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '55443322';

console.log( persona2.tel );