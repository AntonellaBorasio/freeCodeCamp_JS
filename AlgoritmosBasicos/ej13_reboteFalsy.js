/* 
Rebote falsy
Quita todos los valores falsos de un arreglo.

Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

Sugerencia: Intenta convertir cada valor a booleano.


function bouncer(arr) {
  let nuevoArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      nuevoArr.push(arr[i])
    }
  }
  return nuevoArr;
}

bouncer([7, "ate", "", false, 9]);



Versión 2: con filter().

Ver https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-filter-filter-explained-with-examples/14289

function bouncer(arr) {
  return arr.filter(Boolean);
}


*/