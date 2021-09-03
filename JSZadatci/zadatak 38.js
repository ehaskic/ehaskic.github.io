/* Učitavati brojeve u niz sve dok im zbroj ne prijeđe 150. Napraviti novi niz sastavljen od neparnih brojeva iz prvog niza. Ispisati novi niz sortiran od najvećeg prema najmanjem. */

var niz = [];
var evens = [];
var odds = "Niste unijeli neparan broj!";
brojac=0;
sum=0;

while (sum<150) {

var unos=parseInt(prompt("Unesite brojeve ?"));
niz.push(unos);

sum+=unos;

brojac++;


niz.sort(function(a, b) {
    return b - a;
  });


}

var evenNumbers = function(niz) {
    for (var i = 0; i < niz.length; i++) {

        if ((niz[i] % 2) != 0) {
            evens.push(niz[i]);

        }
        else {
                console.log(odds);
        }
    }

};

evenNumbers(niz);
console.log(evens);



