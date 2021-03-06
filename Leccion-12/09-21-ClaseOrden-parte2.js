class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }
    
    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}  `;
    }
}

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    } 

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        // Si el largo de nuestro arreglo es menor al maximo de productos se agrega
        if( this._productos.length < Orden.MAX_PRODUCTOS){
            // Agregamos un nuevo elemento utilizando el metodo push
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }
        // si no, manda un mensaje
        else{
            console.log('No se pueden agregar más productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        // Ciclo for para iterar un arreglo, sintaxis
        for(let producto of this._productos){
            // Sumamos el precio de cada producto creado y lo almacenamos en una nueva variable
            totalVenta += producto.precio;//totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }

    // Este metodo imprime cada uno de los elementos de la orden 
    mostrarOrden(){
        let productosOrden = '';
        // Ciclo for para iterar un arreglo, sintaxis
        for( let producto of this._productos){
            // Cada objeto de tipo producto se agreaga a la variable que se declaro arriba
            productosOrden +=  producto.toString() + ' ';
        }

        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden} `);
    }

}



let producto1 = new Producto('Pantalón', 200);
let producto2 = new Producto('Camisa', 100);
