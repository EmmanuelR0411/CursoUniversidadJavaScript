let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// De esta forma agregamos dinamicamente nuevas propiedades a un objeto
// nombreObjeto.nombrePropiedad = valor
persona.tel = '55443322';
// Aqui modificamos el valor de la propiedad
persona.tel = '44332211';

console.log( persona );

// De esta forma eliminamos una propiedad existente
// delete nombreObjeto.nombrePropiedad
delete persona.tel;

console.log( persona );