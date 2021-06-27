let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de call para usar el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto('Lic.', '44332288') );

/* Al utilizar call podemos pasar argumentos, en este caso toma los valores de persona2
y los valores que estamos pasando argumentos  */
console.log( persona1.nombreCompleto.call( persona2, 'Ing', '5544332211' ) );