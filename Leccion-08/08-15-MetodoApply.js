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

//Uso de apply para usar el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto('Lic', '66887711') );

/* Si se necesitan pasar parametros, a diferencia del metodo call, en aply se necesitan 
pasar como arreglos y no se pueden pasar individualmente como en call
Estos dos metodos solo se diferenian en la forma en que pasan los argumentos */
let arreglo = ['Ing','55443322'];
console.log( persona1.nombreCompleto.apply( persona2, arreglo) );