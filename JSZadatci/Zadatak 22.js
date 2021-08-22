/*Učitati 2 cijela broja, koristeći prompt funkciju i izračunati im zbroj, razliku, umnožak i količnik, ispisati sumu svih parnih brojeva između ta 2 broja, te sumu svih neparnih brojeva između njih, ne uključujući njih. */


var a=parseInt(prompt("unesite prvi cijeli broj"), 10);
var b=parseInt(prompt("unesite drugi cijeli broj"), 10);

var a = parseInt(prompt('Unesite prvi broj:'), 10);
var b = parseInt(prompt('Unesite drugi broj:'), 10);
var c;
var x = 0;
var y = 0;
if (a > b) {
c = b;
b = a;
a = c;
}
for (var i = a+1; i < b; i++) {
if (i%2 === 0) {
x += i;
}
}
for (var i = a+1; i < b; i++) {
if (i%2 === 1) {
y += i;
}
}
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(b/a);
console.log(x);
console.log(y);