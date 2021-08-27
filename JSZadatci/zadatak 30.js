/* Učitavati brojeve sve dok zbroj unesenih brojeva ne dosegne 100. Na kraju ispisati koliko je korisnik ukupno unio brojeva. */



var brojac = 0;
var unos = 0;
sum = 0;
while (sum < 100) {
unos = parseInt(prompt("Unesite neki broj:"));
sum +=unos;
brojac++;
}
console.log("Korisnik je unio" + " " + brojac + " " + "brojeva.");
