/* Boo who (Booleano Quién)

Comprueba si el valor está clasificado como booleano primitivo. Devuelve true o false.

Booleanos primitivos son true y false.


function booWho(bool) {
    if (bool === true || bool === false) {
      return true
    } else {
      return false
    }
  }
  
booWho(null);



Versión 2: con typeof()

function booWho(bool) {
  return typeof bool === "boolean";
}

*/