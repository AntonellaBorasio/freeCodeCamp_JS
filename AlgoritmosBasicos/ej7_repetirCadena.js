/* Repite una cadena repite una cadena

Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices el método incorporado .repeat().


1) Version 1: con bucle while

function repeatStringNumTimes(str, num) {
    let str2 = ''
    if (num <= 0 ) {
        return '';
     } else {
        let i = 0
        while (i < num) {
        str2 += str;
        i++
    }
    return str2;
  }
}



2) Versión 2: con bucle for 

function repeatStringNumTimes(str, num) {
  let str2 = "";

  for (let i = 0; i < num; i++) {
    str2 += str;
  }

  return str2;
}



3) Versión 3: con recursión: 

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

*/