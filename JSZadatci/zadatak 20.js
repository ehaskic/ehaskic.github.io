/*Zatražiti od korisnika unos nekog stringa. Ispisati koliko ima samoglasnika u tom stringu. Ispisati prvih 5 slova unesenog stringa.*/

var text = (prompt("UNESI NEKI TEXT"));
var x = text.match(/[a, e, i, o, u]/gi);
var y = x.length; 
var z = text.slice(0, 5);
console.log(y);
console.log(z);