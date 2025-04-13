import { Recipe, Parser, getImageURL } from '@cooklang/cooklang-ts';

export function parsingCook(query){
   //extract all fields from recipe
   const resippy = new Recipe(query);
   const parserRes = new Parser().parse(query);
   const cookware = parserRes.cookwares;
   const ingredients = parserRes.ingredients;
   const metadata = parserRes.metadata;
   const shoppingList = parserRes.shoppingList;
   const steps = parserRes.steps;

   //

   return {
      cookware: cookware,
      ingredients: ingredients,
      metadata: metadata,
      shoppingList: shoppingList,
      steps: steps
   }
}





