/* Napisati funkciju koja će primati visinu u centimetrima kao parametar i koja će vratiti string koji sadrži visinu izraženu u metrima i centimetrima. Pozvati tu funkciju i ispisati rezultat. (Ako je parametar 178, funkcija treba vratiti “1m i 78cm”) . */


function preracunaj_visinu(cm){
var m = parseInt(cm/100);
cm = cm%100;
return "Visoki ste: " + m + " m i " + cm +" cm.";
} console.log(preracunaj_visinu(179));