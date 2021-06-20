let contador = 0;
/*
while( contador < 3 ){
    console.log(contador);
    contador++;
}
*/

/*
*Se inicia con la palabra reservada do, este ciclo ejecuta como minimo una vez el codigo
*despues verifica si la condicion se cumple (con while), si es así vuelve a entrar al ciclo
*de lo contrario sale de el
*/
do{
    console.log(contador);
    contador++;
}while(contador < 3);

console.log("Fin ciclo do while");