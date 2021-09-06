/* Deklarirati niz koji se sastoji od 5 riječi. Ispisati koja je najduža i najkraća riječ iz niza.*/

const a = ["lasgft", "fsd","oa","bus","korona"];


const findWords = (a) => {
    return a.reduce((acc, val) => {
       const { length: len } = val;
       if(len > acc['longest']['length']){
          acc['longest'] = val;
       }else if(len < acc['shortest']['length']){
          acc['shortest'] = val;
       };
       return acc;
    }, {
       longest: a[0],
       shortest: a[0]
    });
 };
 console.log(findWords(a));



