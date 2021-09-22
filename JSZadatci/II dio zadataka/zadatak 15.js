/* Ispisati sve property-e objekta i njihove vrijednosti:   */

var ob = {
‘naziv’ :’The Wire’,
‘ocjena’ : 9.4,
‘autor’ : ‘David Simon’
};
for(var prop in ob){ console.log("Property: "+prop+" ima vrijednost: " + ob[prop]); }