/* Haz que la primera letra de una palabra este en mayúscula
Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.

Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.


function titleCase(str) {
    let arr = str.split(" ");
    let arr2 = [];
    let newWord = ''
    for (let i = 0; i < arr.length; i++) {
        newWord = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
        arr2.push(newWord);
    }
    return arr2.join(' ')
}

titleCase("I'm a little tea pot");


Version 2: loop con for in

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}


Version 3: map

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}


Version 4: expresiones regulares

function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}

*/