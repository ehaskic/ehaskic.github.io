/*Zatražiti unos dvoznamenkastog broja. Ispisati s kojim je brojevima od 1 do 10 djeljiv. Ako nije dvoznamenkast, samo treba ispisati odgovarajuću poruku.*/

var a =parseInt(prompt("Unesite dvocifren broj"), 10);

if (a>9 && a<100) {

    for (i=0; i<a; i++)

    {

        if (a%i==0 && i<=10) {

            console.log(i);
        }

    }

}

else {

console.log("Unijeli ste pogrešan broj");


}