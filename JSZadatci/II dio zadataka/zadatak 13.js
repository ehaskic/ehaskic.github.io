/* Napisati funkciju „convertToSeconds()“ koja će proslijeđene sate pretvoriti u sekunde. Konverziju vršiti postepeno, i to na način da će se unutar ove funkcije, kreirati funkcija „convertToMinutes()“ koja će prvo poslane sate pretvoriti u minute i nakon toga vratiti u glavnu funkciju koja će završiti konverziju. */


var sati = parseInt(prompt("Unesite sate ?"));
var minute = sati * 60;
var sekunde = minute * 60;


function converToSeconds(minute) {

console.log(sekunde);


    function convertToMinutes(sati) {


   console.log(minute);

    }

} 

converToSeconds();



