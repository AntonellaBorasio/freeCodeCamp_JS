/* Mutaciones

Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.


- Esperimentación con cadenas:

let cad = 'Hola Mundo';
let cadMinus = cad.toLowerCase();
console.log(cadMinus)
console.log(cad)


- Resolución del ejercicio:

function mutation(arr) {
    let cadTarget = arr[0].toLowerCase()
    let cadTest = arr[1].toLowerCase()
    for (let i = 0; i < cadTest.length; i++) {
        if (cadTarget.indexOf(cadTest[i]) < 0) 
        return false;
    }
    return true
}
  
  mutation(["hello", "Hey"]);



Versión 2: .every(), para comparar.

Ver función: https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-every-explained-with-examples/14287

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

*/

