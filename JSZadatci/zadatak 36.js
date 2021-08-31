/* Zadan je niz od 10 realnih brojeva: var niz = [ 87, 93, 11, 27, 38, 100, 42, 31, 8, 40 ] Naći broj najbliži nuli te broj najdalji od nule. */

var niz = [87,93,11,27,38,100,42,31,8,40],
min = niz[0],
max = niz[0];
for(var i = 0; i < niz.length; i++) {
if(niz[i] < min) {
min = niz[i];
}
if(niz[i] > max) {
max = niz[i];
}
}
console.log(min);
console.log(max);



