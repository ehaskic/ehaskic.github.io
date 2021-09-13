/* Napisati funkciju koja će vraćati tiražu za prodani broj ploča. Ako je ploča prodana u više od 100 000 primjeraka, treba vratiti 'srebrena', preko 200 000 'zlatna' i preko 500 000 'platinasta'. Funkcija prima broj prodanih primjeraka.  */


function tiraza(broj) {

var srebrena="Srebrena";
var zlatna="Zlatna";
var platinasta="Planinasta";

if (broj>=100000 && broj<200000 ) {


    return srebrena;

}

else if (broj>=200000 && broj<500000) {

   
    return zlatna;

}

else if (broj>=500000) {

    
    return platinasta;
}

else {

    console.log("Unijeli ste pogrešan podatak!");
}


}

tiraza(200000);