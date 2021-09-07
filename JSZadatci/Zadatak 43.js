/* Učitati niz od 10 brojeva. Ispisati najveći i najmanji član niza, zatim poredati članove niza po veličini - od najvećeg prema najmanjem i ispisati ga, potom od najmanjeg prema najvećem i njega također ispisati. */

var brojac = 0;
var niz = [];
while (brojac < 10) {
var unos = (parseInt(prompt("Unesite neki broj")));
niz.push(unos);
brojac++
function maksimalno(arr) {
  return Math.max.apply(null, arr);
}
function minimalno(arr) {
  return Math.min.apply(null, arr);
}
function mojafunkcija1() {
return niz.sort(function(a, b){return a - b});
}
function mojafunkcija2() {
return niz.sort(function(a, b){return b - a});
}
}
console.log("Najveći broj:" +" "+maksimalno(niz));
console.log("Najmanji broj:" +" "+minimalno(niz));
console.log(mojafunkcija2());
console.log(mojafunkcija1());