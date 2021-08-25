/*Pomoću while petlje omogućite korisniku da unese točno 8 brojeva. Pomoću console.log funkcije ispišite četvrti unešeni broj te zbroj prvog i petog unesenog broja. */


var brojac=0;
var unos=0;
var sum=0;


while (brojac<8) {

    unos=parseInt(prompt("unesite osam brojeva:"), 10);

    brojac++;

    if (brojac===4) {

        console.log(unos);
    }

    if (brojac===1) {

        sum+=unos;

    }

    if (brojac===5) {

        sum+=unos;
    } 



} 

console.log(sum);