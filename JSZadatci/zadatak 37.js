/* Ako imate deklariran niz: var array = [15, 123, 678, 23, 797, 905, 769, 567, 67], ispišite prvi, srednji i zadnji element niza. (kod mora raditi za bilo koji niz, neovisno o broju elemenata). */


var array = [15, 123, 678, 23, 797, 905, 769, 567, 67]

function izracun () {

let prva = array[0];
let druga =array[array.length-1];
let srednji = array[Math.round((array.length - 1) / 2)];

console.log("Prvi element je:" + prva);
console.log("Srednji element je:"+ srednji);
console.log("Zadnji element je:" + druga);

}

izracun();