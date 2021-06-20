//Tipos primitivos (los que no tienen ni propiedades ni metodos asociados a ellos)
let x = 10;

// Intenta cambiar el valor de la variable x
function cambiarValor(a){
    a = 20;
}

//Paso por valor 
cambiarValor(x);//10
// x sigue valiendo 10 ya que solo pasa su valor a "a", esto se conoce como paso por valor
console.log(x);

// Al llamar el valor de "a" nos indica que no esta definida ya que esta solo existe dentro de la funcion
//console.log(a);
