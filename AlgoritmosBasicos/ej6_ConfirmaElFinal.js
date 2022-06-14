/*

Confirma el final:

Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

Este desafío puede resolverse con el método .endsWith(), que fue introducido en ES2015. Pero para el propósito de este desafío, nos gustaría que usaras uno de los métodos de subcadena de JavaScript en su lugar.

Pruebas iniciales:

 let cad = 'hola'
 let cadMod = 'la'
 
 let cad2 = cad.slice(cadMod.length, cad.length)

 console.log(cad)
 console.log(cad2)
 console.log(cadMod == cad2) 


Resolución

let cad;

 function confirmEnding(str, target) {
  cad = str.slice(-target.length, str.length)
  return cad === target;
}

confirmEnding('Anto', 'to'); 


Versión 2.0

function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

confirmEnding('Anto', 'to');


*/