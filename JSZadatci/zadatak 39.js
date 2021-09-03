/* Učitavati brojeve u niz sve dok im zbroj ne prijeđe 250. Napraviti novi niz sastavljen od parnih brojeva iz prvog niza. Ispisati novi niz sortiran od najmanjeg prema najvećem. */


var niz = [];
var evens = [];
var odds = "Niste unijeli paran broj!";
brojac=0;
sum=0;

while (sum<250) {

var unos=parseInt(prompt("Unesite brojeve ?"));
niz.push(unos);

sum+=unos;

brojac++;


niz.sort(function(a, b) {
    return a - b;
  });


}

var evenNumbers = function(niz) {
    for (var i = 0; i < niz.length; i++) {

        if ((niz[i] % 2) != 1) {
            evens.push(niz[i]);

        }
        else {
                console.log(odds);
        }
    }

};

evenNumbers(niz);
console.log(evens);