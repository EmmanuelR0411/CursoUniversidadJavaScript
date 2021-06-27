let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona.nombre);
// De esta forma podemos acceder a las propiedades de los objetos como si fueran un arreglo
// Solo que en lugar de un indice, ponemos el nombre de la propiedad a la que deseamos acceder
console.log( persona['apellido'] );

//for in, este ciclo for es especial ya que sirve para recorrer cada una de las propiedades de nuestro objeto
for( nombrePropiedad in persona){
    // De esta forma imprimimos el nombre de cada una de las propiedades del objeto persona
    console.log( nombrePropiedad );
    // De esta forma accedemos a los valores de cada una de las propiedades del objeto
    console.log( persona[nombrePropiedad]);
}