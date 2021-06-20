for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue;//ir a la siguiente iteracion, por lo que no ejecuta el console
    }
    console.log(contador);
}