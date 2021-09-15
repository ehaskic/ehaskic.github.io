/* Napisati funkciju koja će za proslijeđeni tekst vraćati koliko ima dvotočki, a koliko razmaka. */


var tekst = prompt("Unesite neki tekst?");


function a(tekst) {

var c = tekst.match(/:/g);
var d = tekst.match(/\s/g);

console.log(c);
console.log(d);


}

a(tekst);