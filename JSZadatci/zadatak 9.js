/* Zatražiti od korisnika da unese 3 ocjene. Ukoliko je jedna od njih 1, ispišite ''Niste zadovoljili''. U suprotnom, zbrojite sve 3 ocjene i izračunajte prosjek. Ukoliko je prosjek manji od 2.5, ispišite ''Dovoljan 2'', za prosjek između 2.5 i 3.5 ispišite ''Dobar 3'', za prosjek između 3.5 i 4.5 ispišite ''Vrlo dobar 4'', za prosjek iznad 4.5 ispišite ''Odličan 5''. */


var ocjena1 = parseInt(prompt("UNESITE PRVU OCJENU"), 10);
var ocjena2 = parseInt(prompt("UNESITE DRUGU OCJENU"), 10);
var ocjena3 = parseInt(prompt("UNESITE TREĆU OCJENU"), 10);
var prosjek = (ocjena1 + ocjena2 + ocjena3)/3;

if (ocjena1 == 1 || ocjena2 == 1 || ocjena3 == 1) {
console.log("Niste zadovoljili");
}
else if (prosjek < 2.5) {
console.log("Dovoljan 2");
}
else if (prosjek >= 2.5 && prosjek < 3.5) {
console.log("Dobar 3");
}
else if (prosjek >= 3.5 && prosjek < 4.5) {
console.log("Vrlo dobar 4");
}
else if (prosjek >= 4.5 && prosjek <= 5) {
console.log("Odličan 5");
}
else {
console.log("Unijeli ste pogrešne ocjene");
}