/* Zatražiti od korisnika da unese neki tekst. Proslijediti tekst funkciji koja će provjeriti je li uneseni tekst palindrom. (Palindrom je riječ koja se isto čita i sprijeda i unatrag.)  */

var text = prompt("Molimo Vas da unesete neki tekst ?");


function palindrome(text) {
    var re = /[\W_]/g;
    var lowRegtext = text.toLowerCase().replace(re, '');
    var reversetext = lowRegtext.split('').reverse().join(''); 
    return reversetext === lowRegtext;
  }
  palindrome(text);




