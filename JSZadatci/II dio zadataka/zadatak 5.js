/* Pomoću funkcije „check_year()“ provjerite je li godina koju je unio korisnik prijestupna ili ne. */

function check_year(godina){
    for(var i=0; i < godina; i+=4) {
    } 
    if(godina == i){
    return "Prijestupna godina";
    }
    else {
    return "Godina nije prijestupna";
    }
    }
    var godina = parseInt(prompt("Molimo unesite godinu, da saznate je li prijestupna godina:"));
    
    var broj = check_year(godina);
    console.log(broj);