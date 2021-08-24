var j = 60;
for( var i = 6; i < j; i += 4 ){
if( j % i !== 0 ){
console.log( j );
}
else{
console.log( i );
}
j -= 10;
}