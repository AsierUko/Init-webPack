// "use strict";
console.log('Arrancada la aplicación compilando CSS y SaSS');

/* CSS */
import './scss/estilos.scss';




console.log('es el hollllaaaaaaaaaaaaaaaaaaaaaaaa');
console.log('es el indexxxxxxxx');
console.log('es el indexxxxxxxx');
console.log('es el sdsda da saa ');
console.log('es el hollllaaaaaaaaaaaaaaaaaaaaaaaa');

let caca = 'mooooooooooooooooojon'

console.log(caca);

// function sumar(a, b){ // a y b son parámetros
//     //
//     console.log(sumar.arguments); // [1, 2]
//     console.log(arguments); // [1, 2]
//     return a+b;
// }
// // 1 y 2 son argumentos
// console.log(sumar(1, 2)); // 3

class miClase {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  muestraX() {
    console.log(this.x);
  }

  sumar(...valores) {
    let suma = 0;
    for(let i in valores) {
      suma += valores[i];
    }
    return suma;
  }
}

const miObj = new miClase(2, 5);
miObj.muestraX();

console.log(miObj.sumar(2, 4, 5, 6));
