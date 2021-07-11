// El modo estricto sirve para evitar la mala practica de utilizar variables que no han sido definidas
"use strict";
// Aqui no dejara usar la variable x porque no utilizamos let o var para declararla
x = 10;
console.log(x);

miFuncion();

function miFuncion(){
    "use strict"
    let y = 15;
    console.log(y);
}