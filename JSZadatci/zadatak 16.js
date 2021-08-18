/* Zatražiti od korisnika da unese broj. Ukoliko je paran, ispisati sve brojeve unatrag od unesenog do 1, u suprotnom, zbrojiti sve brojeve od 1 do unesenog broja.*/

var a = parseInt(prompt("Unesite neki broj?"), 10);
var b=0;
var sum=0;

if (a%2==0) {

    for (var a; a>b; a--)  {

       console.log(a);
    }


}

else {

for (i=0; i<=a; i++)
sum+=i;
console.log(sum);


};