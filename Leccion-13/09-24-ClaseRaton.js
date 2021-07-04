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

// Creamos un nuevo objeto de tipo Raton
let raton1 = new Raton('USB', 'HP');
// Mostramos en consola el objeto creado
console.log( raton1.toString() );
// Creamos un nuevo objeto de tipo Raton
let raton2 = new Raton('Bluetooth', 'Dell');
// Modificamos la marca mediante el metodo set marca que creamos
raton2.marca = 'HP';
// Mostramos en consola el objeto creado
console.log( raton2.toString() );
