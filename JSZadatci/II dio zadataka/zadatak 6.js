/* Napisati funkciju koja će zahtijevati od korisnika da unese 5 brojeva i spremi ih u niz (osigurati da ih ima točno 5). Funkcija „check()“ treba provjeriti sve elemente iz niza i samo parne negativne pomnožiti same sa sobom. U glavnom programu ispisati niz. */


function mojaFunkcija() {
    var brojac = 0;
    var niz = [];
    while (brojac < 5) {
    var unos = parseInt(prompt("Upisati neki broj: "));
    brojac++;
    if (unos % 2 == 0 && unos < 0) {
    niz.push(unos*unos);
    }
    else {
    niz.push(unos);
    }
    }
    return niz;
    }
    mojaFunkcija();
