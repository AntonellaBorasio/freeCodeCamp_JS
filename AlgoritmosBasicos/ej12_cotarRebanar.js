/* Cortar y rebanar

Tienes dos arreglos y un índice.

Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

Comienza insertando elementos en el índice n del segundo arreglo.

Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función.



function frankenSplice(arr1, arr2, n) {
  let arrNuevo = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    arrNuevo.splice(n, 0, arr1[i]);
    n++
  }
  return arrNuevo;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);



Versión 2: con propagación

function frankenSplice(arr1, arr2, n) {
    let arrNuevo = arr2.slice();
    arrNuevo.splice(n, 0, ...arr1);
return arrNuevo;



Versión 3: abreviando

function frankenSplice(arr1, arr2, n) {
return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];


*/
