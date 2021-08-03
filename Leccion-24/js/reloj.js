/* Funcion flecha */
const mostrarReloj = ()=>{
    /* Creamos un nuevo objeto de tipo fecha, new date() trae la fecha actual (ya esta definido) */
    let fecha = new Date();
    /* Recuperamos la hora del objeto y les damos formato mandandolos a nuestra funcion*/
    let hr = formatoHora(fecha.getHours());
    /* Recuperamos los minutos del objeto y les damos formato mandandolos a nuestra funcion*/
    let min = formatoHora(fecha.getMinutes());
    /* Recuperamos los segundos del objeto y les damos formato mandandolos a nuestra funcion*/
    let seg = formatoHora(fecha.getSeconds());
    /* Recuperamos el elemento HTML y mediante innerHTML sustituimos su contenido y mosramos
    la hora, inuto y segundo */
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;
    /* Arreglo de los meses */
    const meses = ['Ene', 'Feb', 'Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    /* Arreglo de los días de la semana */
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    /* Recuperamos el día de la semana mediante el arreglo de dias y le proporcionamos el indice
    mediante la variable de fecha(getDay regresa un valor numerico, comenzando con domingo = 0) */
    let diaSemana = dias[fecha.getDay()];
    // Recuperamos el día pero en valor numerico
    let dia = fecha.getDate();
    /* Recuperamos los meses (Enero = 0) */
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    /* Recuperamos el lemento de fecha y le agregamos la fechaTexto que creamos */
    document.getElementById('fecha').innerHTML = fechaTexto;

    /* 
    Agreagamos un efecto al reloj digital
    En una llamada (setInterval()) se aplica y en otra no
    Recuperamos el lemento HTNL del contenedor, con classList recuperamos todas las clases que
    se estan aplicando al documento HTML y mediante toggle se agrega y se quita el estilo animar
    de css, ya que si esta aplicado se elimina y si no lo esta se agrega, esto lo hace toggel
    (togel funciona como un apagador) 
    */
    document.getElementById('contenedor').classList.toggle('animar');
}

/* Damos formato a la hora que se muestra */
const formatoHora = (hora)=>{
    if(hora < 10)
    /* Concatenamos un 0 cada que la hora es menor de 10 */
        hora = '0' + hora;
    return hora;    
}

/* setInterval() nos permite ejecutar codigo cada cierto tiempo, mediante esa funcion ejecutamos 
la funcion de mostrarReloj, este se muestra cada segundo (esta en milisegundos),se pone sin parentesis
porque solo se hace referencia a la fucion, no se manda a llamar */
setInterval(mostrarReloj, 1000);