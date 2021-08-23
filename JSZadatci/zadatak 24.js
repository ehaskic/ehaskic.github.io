var a = 2, b = 20, c = ”6”;
for( var i = a; i < b; i += 4 ){
if( i === c ){
console.log( i + " = " + c );
}
if( b % i === 0 ){
console.log( i );
}
else{
console.log( i + 1 );
}
}