let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de call para usar el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto() );

/* De esta forma podemos utilizar metodos que no estan declarados dentro de un objeto
pero si estan dentro de otro, así aunque un objeto no tenga ese metodo si puede utilizarlo 
(mediante call) pero consus propios valores y no los valores del objeto en el que esta
definido el metodo */
console.log( persona1.nombreCompleto.call( persona2 ) );