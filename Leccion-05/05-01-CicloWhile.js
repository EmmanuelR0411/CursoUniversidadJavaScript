let contador = 0;

// Entre parentesis se pone la expresion que se va a revisar, si es verdadera entre enel ciclo

while( contador < 3 ){
    // Las instrucciones dentro del ciclo se ejecutan miestras la condicion sea TRUE
    console.log(contador);
    // Es importante generar una instruccion que permita finalizar el ciclo para no crear un bucle infinito
    contador++;
}
console.log("Fin ciclo while");