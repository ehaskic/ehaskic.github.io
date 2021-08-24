/* Učitati 5 cijelih dvoznamenkastih brojeva. Ukoliko uneseni broj nije dvoznamenkast, odbaciti ga. Zbrojiti zadnje znamenke svakog unesenog broja i ispisati zbroj. */

var suma = 0, unos = 0, brojac = 0;
while(brojac < 5) {
unos = parseInt(prompt("Unesite dvoznamenkasti broj:"));
if(unos > 9 && unos < 100) {
suma += unos%10;
brojac++;
}
}
console.log(suma);