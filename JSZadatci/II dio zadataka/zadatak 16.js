 /* Deklarirati objekt „zgrada“ i property-e adresa, broj zgrade, broj katova, broj stanova. Zatražiti od korisnika da preko prompt funkcije unese vrijednosti property-a te ispisati dodijeljene vrijednosti: ''Živim u zgradi broj'' +broj zgrade+'’ na adresi''+adresa+''koja ima''+broj katova+''katova i ukupno''+broj stanova+''stanova.''  */

 var adresa = prompt("Unesite adresu ?");
 var brojzgrade = prompt("Unesite broj zgrade ?");
 var brojkatova = prompt("Unesite broj katova ?");
 var brojstanova = prompt("Unesite broj stanova ?");


 var zgrada = {

    adresa,
    brojzgrade,
    brojkatova,
    brojstanova


 };
 



for (var prop in zgrada) {

    console.log("Živim u zgradi broj " + zgrada["brojzgrade"] + " na adresi " + zgrada
    
    ["adresa"] + " koja ima " + zgrada["brojkatova"] + " katova i ukupno " + zgrada
    
    ["brojstanova"] + " stanova.");

}




