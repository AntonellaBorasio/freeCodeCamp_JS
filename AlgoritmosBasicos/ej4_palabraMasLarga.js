/* Encuentra la palabra más larga en una cadena

Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número.



function findLongestWordLength(str) {
    let arr = str.split(' ');
    let arrMax = ''
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > arrMax.length) {
        arrMax = arr[i];
      }
    }
    return arrMax.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  */