let reloj = () => {
    // Con new Date() obetenemos la fecha actual
    let fecha = new Date();
    // Estos metodos ya vienen establecidos al usar Date(), aqui solo los estamos llamando
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

/* Esta funcion (setInterval) recibe como parametro una funcion callback y los milisegundos, a 
diferencia de la funcion setTimeout, setInterval no espera cierto tiempo para llamar a la funcion
sino que llama a la funcion cada que pasa el tiempo establecido (la llama varias veces) */
setInterval(reloj, 1000);//1 seg
// Aqui mandamos a llamar de manera asincrona a la funcion reloj