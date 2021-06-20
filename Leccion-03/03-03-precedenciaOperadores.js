let a = 3, b = 2, c = 1, d = 4;

// Las expresiones se evaluan de izquierda a derecha 
let z = a * b + c / d;
console.log(z); 

// La multiplicacion tiene prioridad
z = c + a * b / d;
console.log(z); 
