let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    // Con esta funcion recuperamos el idioma
    get lang(){
        // COn toUpperCase podemos convertir una cadena a mayusculas
        return this.idioma.toUpperCase();
    },
    /* El metodo set sirve para poder modificar los valores
    de los atributos de el objeto 
    */
    // entre parentesis va el parametro que se va a recibir 
    set lang( lang ){
        // Aqui declaramos la propiedad que se va a modificar
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona.lang );

// El valor que se proporciona es el que pasa al parametro de lang
// Gracias al '=' JS detecta que se va a modificar el valor y por eso llama al metodo set y no al get
persona.lang = 'en';//se llama el metodo set lang

console.log( persona.lang );//se llama metodo get lang
console.log( persona.idioma );