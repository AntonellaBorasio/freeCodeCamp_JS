/* Invierte una cadena

Invierte la cadena proporcionada.

Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.

Tu resultado debe ser una cadena.



function reverseString(str) {
    let arr = ''
    for (let i = str.length -1; i >= 0; i--) {
      arr += str[i]
    }
    return arr;
  }
  
  reverseString("hello"); 
  
  
  */