// Creamos la clase de DispositivoEntrada, la cual sera padre de la clase raton y monitor
class DispositivoEntrada {
    // Creaoms un cosntructor y declaramos todos sus atributos
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    // Creamos todos los geters y seters de la clase
    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada (tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca (marca){
        this._marca = marca;
    }

}

// Creamos la clase Teclado e indicamos que es una clase hija de DispositivosEntrada
class Teclado extends DispositivoEntrada {
    // Declaramos una variable estatica que nos ayudara a generar el id
    static contadorTeclado = 0;

    // Creamos el constructor de la clase
    constructor (tipoEntrada, marca){
        // Mandamos a llamar el contructor de la clase padre mediante la palabra reservada super
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    // Modificamos el metodo toString para que muestre el contenido de la clase
    toString() {
        return `idTeclado: ${this._idTeclado} Tipo entrada: ${this._tipoEntrada} Marca: ${this._marca}`
    }
}

// Creamos la clase Raton e indicamos que es una clase hija de DispositivosEntrada
class Raton extends DispositivoEntrada {

    // Declaramos una variable estatica que nos ayudara a generar el id
    static contadorRaton = 0;

    // Creamos el constructor de la clase
    constructor (tipoEntrada, marca){
        // Mandamos a llamar el contructor de la clase padre mediante la palabra reservada super
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRaton;
    }

    get idRaton(){
        return this._idRaton;
    }

    // Modificamos el metodo toString para que muestre el contenido de la clase
    toString() {
        return `idRaton: ${this._idRaton} Tipo entrada: ${this._tipoEntrada} Marca: ${this._marca}`
    }
}

// Creamos la clase monitor
class Monitor {

    // Declaramos una variable estatica que nos ayudara a generar el id
    static contadorMonitores = 0;

    // Creamos el constructor de la clase
    constructor (marca, tamano){
        this._marca = marca;
        this._tamano = tamano;
        this._idMonitor = ++Monitor.contadorMonitores;
    }

    // Creacion de seters y geters de la clase
    get idMonitor(){
        return this._idMonitor;
    }


    get marca(){
        return this._marca;
    }

    set marca (marca){
        this._marca = marca;
    }

    get tamano(){
        return this._tamano;
    }

    set tamano (tamano){
        this._tamano = tamano;
    }

    // Modificamos el metodo toString para que muestre el contenido de la clase
    toString() {
        return `idMonitor: ${this._idMonitor} Tamaño: ${this._tamano} Marca: ${this._marca}`
    }

}

// Creacion de la clase computadora
class Computadora {

    static contadorComputadora =0;


    constructor(nombre){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = [];
        this._teclado = [];
        this._raton = [];
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    agregarMonitor(monitor) {

        this._monitor.push(monitor);
    }

    agregarTeclado(teclado) {

            this._teclado.push(teclado);
    }

    agregarRaton(raton) {
            this._raton.push(raton);
    }

    toString() {
        // De forma indirecta se manda a llamar el metodo toString de cada objeto
        return `Computadora: ${this._idComputadora}, Nombre: ${this._nombre}
                Monitor:
                ${this._monitor}
                Raton:
                ${this._raton}
                Teclado:
                ${this._teclado}`;
    }
}

// Creacion de la clase orden
class Orden {

    static contadorOrden = 0;

    constructor(){
        this._computadoras = [];
        this._idOrden = ++Orden.contadorOrden;
    }

    get idOrden() {
        return this._idOrden;
    }

    // Creacion del metodo agreagar computadora, nos permitira agreagar nuestras computadoras a la orden
    agregarComputadora(computadora) {
        // Mediante un push agregamos las computadoras al arreglo de la clase
        this._computadoras.push(computadora);
    }

    // Creacion del metodo para mostrar la orden
    mostrarOrden() {
        let productosOrden = '';
        // Mediante el for recorremos todo el arreglo de computadoras y cada que hace una iteracion
        // agrega un nuevo elemento del arreglo a la variable de productosOrden
        for( let producto of this._computadoras){
            productosOrden += '\n' + producto.toString() + '}';
        }

        console.log(`Orden: ${this._idOrden}, Productos: ${productosOrden}`);
    }
}

let teclado1 = new Teclado('Alambrico', 'Super');
console.log(teclado1.toString());

let raton1 = new Raton('Inhalambrico', 'Sony');
console.log(raton1.toString());

let monitor1 = new Monitor('LG','50 pulgadas');
console.log(monitor1.toString());

let computadora1 = new Computadora('Super Computadora');
console.log(computadora1.toString());

computadora1.agregarMonitor(monitor1);
computadora1.agregarRaton(raton1);
computadora1.agregarTeclado(teclado1);
console.log(computadora1.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();

let teclado2 = new Teclado('BlueTooth', 'MSI');
console.log(teclado2.toString());

let raton2 = new Raton('USB', 'HP');
console.log(raton2.toString());

let monitor2 = new Monitor('HP','15 pulgadas');
console.log(monitor2.toString());

let computadora2 = new Computadora('Armada');
console.log(computadora2.toString());

computadora2.agregarMonitor(monitor2);
computadora2.agregarRaton(raton2);
computadora2.agregarTeclado(teclado2);
console.log(computadora1.toString());


orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();