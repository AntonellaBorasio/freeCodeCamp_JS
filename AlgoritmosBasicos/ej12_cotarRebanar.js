/* Cortar y rebanar

Tienes dos arreglos y un índice.

Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

Comienza insertando elementos en el índice n del segundo arreglo.

Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función.




*/
function frankenSplice(arr1, arr2, n) {
    let arrFinal = [];
    arrFinal.push(arr2.slice(0, n));
    arrFinal.push(...arr1);
    arrFinal.push(arr2.slice(arr1.lenght, -1))
    return arrFinal;
  }