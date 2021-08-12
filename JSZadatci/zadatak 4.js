/* Ako su deklarirane varijable var a = 12, b = 13, c = "12", d = "13"; Napišite što će se ispisati: */

if( a < b ) {
if( b < d ) {
console.log("log 1")
} else {
if( a < d ) {
console.log("log 2");
} else {
console.log("log 3");
}
}
} else {

    if( c > a ) {
console.log("log 4");
} else {
if(b > c) {
console.log("log 5");
} else {
console.log("log 6");
}
}
}

log 2