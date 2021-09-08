/* Jedostavan kalkulator - Zatražiti od korisnika unos dva broja i znaka za operaciju koju želi obaviti nad brojevima (+, -, *, /). Napisati funkciju koja imitira rad jednostavnog kalkulatora: prima dva broja, i znak operacije. Ovisno o znaku, obaviti traženu operaciju. Funkcija vraća rezultat u glavni program, zatim je on ispisuje.  */


var broj1 = parseInt(prompt('Unesite prvi broj:'));
var broj2 = parseInt(prompt('Unesite drugi broj:'));
var znak= (prompt("Unesite radnju +, -, *, / ?"));


function zbroj(broj1, broj2) {

return broj1 + broj2;

}

function razlika(broj1, broj2) {
return broj1 - broj2;


}

function mnozenje(broj1,broj2) {

return broj1*broj2;

}

function dijeljenje(broj1,broj2) {

return broj1/broj2;

}

if (znak==="+") {

    console.log("Zbroj brojeva iznosi:" +""+ zbroj(broj1,broj2));
}

else if (znak==="-") {

    console.log("Razlika brojeva iznosi:"+""+ razlika(broj1,broj2));
}

else if (znak==="*") {

    console.log("Proizvod brojeva iznosi:"+""+ mnozenje(broj1,broj2));
}

else if (znak==="/") {

    console.log("Količnik brojeva iznosi:"+""+dijeljenje(broj1,broj2));
}

else {

    console.log("Unijeli ste pogrešnu operaciju!");
}