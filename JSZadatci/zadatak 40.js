/* Deklarirati niz koji se sastoji od 5 riječi. Napraviti novi niz koji se sastoji samo od onih riječi iz prvog niza koje imaju više od 2 slova. Ispisati novi niz riječi. */

var a = ["l", "f","o","bus","korona"];
var b=[];

for (i=0; i<a.length; i++) {

    if (a[i].length>2) {
b.push(a[i]);

    }

    else {

        console.log("Nema riječi s dva slova!");
    }



}

console.log(b);