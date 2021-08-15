/*  Zatražiti od korisnika da unese odgovor na pitanje ''Bojite li se zubara?''. Ukoliko je odgovor negativan, ispišite ''Hrabri ste!!'', u suprotnom, ispišite ''I ja!!''. Za ostale odgovore ispisati da je unos nepravilan. Ovaj zadatak riješiti preko switch-case-a. */


var odg = prompt("Bojite li se zubara?");
odg = odg.toLowerCase();
switch (odg) {
case "ne":
console.log("Hrabri ste!");
break;
case "da":
console.log("I ja!!!");
break;
default:
console.log("Unos je pogrešan!");
}