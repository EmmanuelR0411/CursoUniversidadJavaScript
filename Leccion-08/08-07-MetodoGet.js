let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    /* Get nos permite acceder a los valores de nuestras 
    propiedades, de esta forma al llamarla no tenemos 
    que indicar que es una funcion con los ()
    así siplificamos la sintaxis, convirtiendolo en un metodo get 
    GET = OBTENER (PERMITE RECUPERAR INFORMACION DEL OBJETO)
    */
    // get nombreFuncion(){}    
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona.nombreCompleto );