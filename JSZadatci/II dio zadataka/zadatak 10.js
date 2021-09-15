/* Napisati funkciju koja će proslijeđenu rečenicu ispisati unatrag, ali i zamijeniti mala i velika slova. Funkciju pozvati u glavnom programu. */


let citat = prompt("Upisat neki citat");
function recenica(q) {
let a = q.split('');
let slova = a.map(function(el){
if(el === el.toLowerCase()) {
return el = el.toUpperCase();
}else {
return el = el.toLowerCase();
}
}).reverse().join('');
console.log(slova);
}

recenica(citat);





