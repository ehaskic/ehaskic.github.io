/* Napisati funkciju koja će izračunati porez na uplaćeni iznos. Stopa poreza za iznose između 100 i 500 je 1%, između 500 i 1000 je 5%, a preko 1000 10%. Funkcija kao parametar prima iznos, a vraća iznos poreza.  */


function izracunaj(iznos) { 

    var porez;

if(iznos >= 100 && iznos < 500) { 
    porez = iznos*0.01; 
    return porez; } 
    
    else if (iznos >=500 && iznos < 1000) {
        
        porez = iznos*0.05;
        
        return porez;

} 

else if  (iznos >= 1000) {
    
    porez = iznos*0.1; 
    
    return porez;

} 

else  { 
    
    return "Porez se ne racuna za iznose manje od 100";

} }

console.log(izracunaj(9000));