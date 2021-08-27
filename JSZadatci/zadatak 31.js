/*Napravite program koji korisniku omogućuje unošenje brojeva sve dok ne unese broj 0. Program treba ispisati koliko je korisnik upisao pozitivnih, a koliko negativnih brojeva.*/


var brojac = 0;
var unos;
var sum1 = 0;
var sum2 = 0;
while (unos != 0) {
unos = parseInt(prompt("Unesite neki broj:"));
brojac++;
if (unos > 0) {
sum1 = sum1 + 1;
} 
if (unos < 0) {
sum2 = sum2 + 1;
} 
}
console.log("Pozitivnih brojeva" + " " + sum1);
console.log("Negativnih brojeva" + " " + sum2);









