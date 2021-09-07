/* Učitati niz od 10 brojeva. Ispisati koliko je parnih, a koliko neparnih brojeva u nizu. Zatim ispisati prosječnu vrijednost parnih brojeva. Također ispisati koji zbroj je veći: zbroj parnih brojeva ili zbroj neparnih brojeva. */



var brojac = 0;
var niz = [];
var neparniniz = [];
var parniniz = [];
var sum1 = 0;
var sum2 = 0;

while (brojac < 10) {
var unos = (parseInt(prompt("Unesite neki broj")));
brojac++
if (unos % 2 == 1) {
neparniniz.push(unos);
sum1 += unos;
}
if (unos % 2 == 0) {
parniniz.push(unos);
sum2 += unos;
}
if (sum2 > sum1) {
var a = "Veća je suma parnih brojeva";
}
else if (sum2 < sum1) {
var a = "Veća je suma neparnih brojeva";
}
else {
var a = "Jednaka je suma parnih i neparnih brojeva";
}
}
console.log("Broj parnih brojeva:" +" "+parniniz.length);
console.log("Broj neparnih brojeva:" +" "+neparniniz.length);
console.log("Prosjek parnih brojeva:" +" "+(sum2/parniniz.length));
console.log(a);