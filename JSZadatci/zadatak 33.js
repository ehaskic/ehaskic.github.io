/*Preko petlje popunite niz od 10 članova, te ispišite niz.*/


var unos;
var niz =[];
var brojac = 0;
while (brojac < 10) {
var unos = parseInt(prompt("Unesite 10 članova niza:"));
niz.push(unos);
brojac++;

}
console.log(niz);

