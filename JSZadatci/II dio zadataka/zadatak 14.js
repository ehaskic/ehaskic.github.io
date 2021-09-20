/* Napisati funkciju koja će kao parametar primiti broj koševa i vraćati poziciju ako je u top 5 strijelca u NBA ligi. Ako je broj veći od: 

a) 31419, vratiti 5,
b) 32292, vratiti 4,
c) 32482, vratiti 3,
d) 36928, vratiti 2,
e) 38387, vratiti 1. 



Napisati drugu funkciju koja će primiti ime igrača i broj koševa. Funkcija treba ispisati ime igrača i koliko je koševa postigao u karijeri te pomoću funkcije iz prvog zadatka provjeriti nalazi li se njegov broj koševa u top 5 strijelaca u NBA ligi te ispisati koju je poziciju zauzeo ako jest.*/





function kosevi(suma) {
    if (suma > 38387) {return 1;}
    else if (suma > 36928) {return 2;}
    else if (suma > 32482) {return 3;}
    else if (suma > 32292) {return 4;}
    else if (suma > 31419) {return 5;}
    else {return 6;}
    }
    function podaci(ime, broj) {
    ime = prompt("Upisati ime igrača: ");
    broj = parseInt(prompt("Upisati broj koseva: "));
    if (kosevi(broj) <= 5) {
    return ime+" "+"je postigao "+broj+" "+"koševa"+" "+"pozicija broj "+kosevi(broj);
    }
    else {
    return ime +" nije među prvih pet košarkaša";
    }
    }
    podaci();







