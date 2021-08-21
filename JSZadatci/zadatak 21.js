/*Zatražiti od korisnika unos nekog stringa. Ispisati koliko ima suglasnika u tom stringu. Ispisati prva 3 slova unesenog stringa.*/

var text = (prompt("UNESI NEKI TEXT"));
var x = text.match(/[B,C,Č,Ć,D,DŽ,Đ,F,G,H,J,K,L,LJ,M,N,NJ,P,R,S,Š,T,V,Z,Ž]/gi);
var y = x.length; 
var z = text.slice(0, 3);
console.log(y);
console.log(z);