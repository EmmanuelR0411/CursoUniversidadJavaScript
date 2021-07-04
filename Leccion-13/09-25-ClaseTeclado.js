class DispositivoEntrada{

    // Creamos un constructor que recibe dos atributos
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    // Creamos los metodos get y set
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

// Creamos la clase Raton que es una clase hija de dispositivoentrada (para aplicar la herencia)
class Raton extends DispositivoEntrada{
    // Creamos atributo estatico
    static contadorRatones = 0;

    // Creamos un onstructor y recibimos los atributos
    constructor(tipoEntrada, marca){
        // Llamamos al contructor de la clase padre 
        super(tipoEntrada, marca);
        // Asignamos un valor unico por cada objeto que se cree
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    // Agregamos el metodo toString para impriir la informacion de la clase
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
} 

// Creamos la clase Teclado que es hija de DispositivoEntrada
class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    // Creamos el constructor
    constructor(tipoEntrada, marca){
        // Mandamos a llamar a el padre y le pasamos los parametros
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let raton1 = new Raton('USB', 'HP');
console.log( raton1.toString() );
let raton2 = new Raton('Bluetooth', 'Dell');
raton2.marca = 'HP';
console.log( raton2.toString() );

let teclado1 = new Teclado('Bluetooth', 'MSI');
let teclado2 = new Teclado('USB', 'Acer');
console.log( teclado1.toString() );
console.log( teclado2.toString() );