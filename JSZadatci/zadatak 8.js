/* Zatražiti od korisnika da unese ime i broj godina. Ponovite to 3 puta. Ukoliko postoje 2 osobe istih godina, ispišite njihova imena. U suprotnom provjerite postoje li 2 osobe istog imena, ako postoje, ispišite njihovo ime te zbroj godina. Ukoliko nijedno nije zadovoljeno, ispišite da nema imenjaka ni vršnjaka! */

var ime1 = (prompt("UPIŠI IME"));
var godina1 = parseInt(prompt("UPIŠI BROJ GODINA"), 10);
var ime2 = (prompt("UPIŠI DRUGO IME"));
var godina2 = parseInt(prompt("UPIŠI BROJ GODINA"), 10);
var ime3 = (prompt("UPIŠI TREĆE IME"));
var godina3 = parseInt(prompt("UPIŠI BROJ GODINA"), 10);
var sum1 = godina1 + godina2 + godina3;
var sum2 = godina1 + godina2;
var sum3 = godina1 + godina3;
var sum4 = godina2 + godina3;


 if (godina1 == godina2 == godina3) {
console.log(ime1 +" "+ ime2 +" "+ ime3);
} 
else if (godina1 == godina2) {
console.log(ime1+" "+ime2);
}
 else if (godina1 == godina3) {
console.log(ime1 +" "+ ime3);
} 
else if (godina2 == godina3) {
console.log(ime2 +" "+ ime3);
} 
else if (ime1 === ime2 === ime3) {
console.log(ime1 +" "+ sum1);
} 
else if (ime1 === ime2) {
console.log(ime1 +" "+ sum2);
} 
else if (ime1 === ime3) {
console.log(ime1 +" "+ sum3);
} 
else if (ime2 === ime3) {
console.log(ime2 +" "+ (godina2+godina3));
} 
else {
console.log("Nema imenjaka ni vršnjaka!");
}   