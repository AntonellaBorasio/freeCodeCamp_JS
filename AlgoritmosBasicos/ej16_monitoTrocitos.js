/* Monito Trocitos

Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.


-Experimentación con array y slice()

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(0, 2);
let todaysWeather2 = weatherConditions.slice(2, 4);
let result = []
result.push(todaysWeather)
result.push(todaysWeather2)

console.log(todaysWeather);
console.log(todaysWeather2);
console.log(result)



- Resolución del ejercicio:


function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size){
        result.push(arr.slice(i, i + size))
    }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)


Para más info y resoluciones: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-chunky-monkey/16005
*/



