/* Unijeti cijeli broj preko prompt funkcije. Nakon toga preko for petlje zbrojiti sve brojeve od 1 do unesenog broja, te ispisati rezultat. */

var broj = parseInt(prompt("Unesite broj"));
var suma = 0;
for(var i = 1; i < broj ; i++) {
suma += i;
}
console.log(suma);