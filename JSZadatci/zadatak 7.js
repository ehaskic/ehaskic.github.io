/* Zatražiti od korisnika da unese svoje ime, prezime i broj godina. Ukoliko je korisnik mlađi od 20, ispišite: Ime + prezime + '', veoma ste mladi!''. Ukoliko je korisnik mlađi od 30, ispišite: Ime + prezime + '', mladi ste!''. Ukoliko je korisnik između 30 i 45, ispišite: Ime + prezime + '', u najboljim ste godinama! ''. Starije osobe nemojte komentirati. */


var ime = (prompt("unesi ime"));
var prezime = (prompt("unesi prezime"));
var godina = parseInt(prompt("unesi broj godina"), 10);

if (godina < 20) {
console.log(ime + " " + prezime + " " + "veoma ste mladi!");
}
else if (godina < 30) {
console.log(ime + " " + prezime + " " + "mladi ste!");
}
else if (godina >= 30 && godina <= 45) {
console.log(ime + " " + prezime + " " + "u najboljim ste godinama!");
}
else {
console.log(ime + " " + prezime);
}