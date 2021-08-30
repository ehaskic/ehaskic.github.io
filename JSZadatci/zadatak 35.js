/*Ako imate rečenicu: “Hello world je najbolja udruga ikada” izbacite sve samoglasnike iz nje i ispišite rečenicu bez njih. To možete spremiti u neku novu varijablu. Potom izbacite sve suglasnike iz iste rečenice te i nju ispišite.*/


/*let malaslova = recenica.toLowerCase();*/



var recenica="Hello world je najbolja udruga ikada";
var samoglasnici=recenica.split(/[aeiou]/gi);
var suglasnici=recenica.split(/[^aeiou]/gi);   

console.log(samoglasnici);
console.log(suglasnici);





