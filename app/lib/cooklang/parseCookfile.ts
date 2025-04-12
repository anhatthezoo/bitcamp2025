import { Recipe, Parser, getImageURL } from '@cooklang/cooklang-ts';
import { database } from '../firebase.ts'
import { get } from 'firebase/database'

const cooklangFile = ref(database, FILE_PATH);
onValue(cooklangFile, ())

/*
function parsingCook({query}){
   
   //source should be query from database
   const source;

   //console.log(new Recipe(source));


   console.log(new Parser().parse(source).metadata);

   console.log(getImageURL('Mixed Berry Smoothie', {
       step: 1,
       extension: 'png'
   }));
}*/
