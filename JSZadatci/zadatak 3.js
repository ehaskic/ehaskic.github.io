/* Unesite 3 broja. Ukoliko su svi veći od 10, ispišite njihov zbroj. U suprotnom ispitajte koji je od njih najveći pa ga pomnožite sa samim sobom te nakon toga ispišite njihov zbroj.  */


var a = parseInt(prompt("Unesite prvi broj?"),10);
var b = parseInt(prompt("Unesite drugi broj="),10);
var c = parseInt(prompt("Unesite treći broj?"),10);

var  rezult;

if (a>10 && b>10 && c>10) {

rezult= a + b + c;


} 

else  if (a>b && a>c) {

    rezult=a*a;

}

else if (b>a && b>c) {

    rezult=b*b;
}

else if (c>a && c>a) {

    rezult=c*c;
}

else {

    rezult=a+b+c;
}

