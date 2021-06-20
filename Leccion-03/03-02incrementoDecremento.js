let a = 3, b = 2;
let z = a+b;

// Incremento
// Pre-incremento (el operador ++ antes de la variable)

z = ++a; // va a aumentar en uno el valor de la variable 
console.log(a);
console.log(z);

// Post-incremento(el operador ++ despues de la variable)
z = b++; //Primero se asigna el valor a la variable z y despues se aumenta el valor de b
console.log(b);
console.log(z);

// Decremento
// Pre-incremento
z = --a;
console.log(a);
console.log(z);

// Post-decremento
z= b--;
console.log(b);
console.log(z);