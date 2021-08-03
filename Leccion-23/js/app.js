/* Arreglo de objetos de tipo persona */
const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    /* Recorremos el arreglo de persona para mostrar todos los objetos dentro de este */
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    /* Agregamos cada objeto a la lista(ul) */
    document.getElementById('personas').innerHTML = texto;
}

/* Metodo para agregar una  ueva persona */
function agregarPersona(){
    /* Recuperamos el objeto del formulario */
    const forma = document.forms['forma'];
    /* Recuperamos el campo de nombre del objeto del formulario */
    const nombre = forma['nombre'];
    /* Recuperamos el campo de apellido del objeto del formulario */
    const apellido = forma['apellido'];
    /* Hacemos una validacion, solo si ambos inputs no estan vacios se agregara la nueva persona */
    if(nombre.value != '' && apellido.value != ''){
        /* Creamos una persona mediante el constructor que se declaro y la guardamos en la variable
        persona */
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        /* Añadimos la nueva persona al arreglo mediate el push */
        personas.push(persona);
        /* Una vez agregada la nueva persona se vuelve a mostrar todo el arreglo mandando a llamar
        la funcion de mostrarPersonas*/
        mostrarPersonas();
    }
    else{
        console.log('No hay información que agregar');
    }
}