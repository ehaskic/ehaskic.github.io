/*Pomoću prompt-a korisniku postaviti jednostavan matematički izraz (npr: Koliko je 2+2?). U funkciji provjeriti točnost unesenog odgovora. Ako je točan, ispisati poruku i vratiti true. Ako nije točan, vratiti točan rezultat u glavni program, gdje se zatim treba ispisati poruka "Vaš odgovor je netočan, točan odgovor glasi: ...".*/

var a = parseInt(prompt("Koliko je 2+2?"));

function provjera() {

    if (a===4) {

        console.log("Odgovor je tačan!");

        return true;

    }

    else {

        console.log("Odgovor nije tačan! Pravi odgovor je: 4!")
    }

}


provjera();