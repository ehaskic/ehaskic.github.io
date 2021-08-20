/*Zatražiti unos dvoznamenkastog broja. Ispisati sve njegove djelitelje. Ako nije dvoznamenkast, samo treba ispisati odgovarajuću poruku.*/

var a = parseInt(prompt("Unesite dvoznamenkasti broj"));


     if (a>9 && a<100) {

    for(i=0; i<=a; i++) {

        if (a%i==0) {

    console.log(i);

    }
}
}

else {

    console.log("Unijeli ste pogrešan broj");

}