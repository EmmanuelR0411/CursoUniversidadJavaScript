let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

persona.tel = '55443322';
persona.tel = '44332211';

console.log( persona );

delete persona.tel;

console.log( persona );

//Concatenar cada valor de cada propiedad
// PAra poder imprimir nuestro objeto, mandadno a llamar cada prpiedad individualmente
console.log( persona.nombre + ', ' + persona.apellido);

//for in
for( nombrePropiedad in persona){
    // Imprimimos todos los valores de todas las propiedades
    console.log( persona[nombrePropiedad]);
}

/* Con el metodo object.values nos devuelve el objeto como arreglo
*Y así accedemos a cada una de las propiedaes de nuestro objeto
*/
let personaArray = Object.values( persona );
console.log( personaArray );

// Aqui mediante el metodo JSON.stringify convertimos el objeto en un string
let personaString = JSON.stringify( persona );
console.log( personaString );//Imprime cada unao de los valores de las propiedaes