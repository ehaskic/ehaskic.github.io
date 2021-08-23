var j = 80;
for( var i = 8; i < j; i += 2 ){
if( j % i === 0 ){
console.log( i );

}
else{
console.log( j );
}
j -= 10;
}