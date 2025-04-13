import { db } from '../firebase.ts';
import { doc, getDoc } from 'firebase/firestore';

//get the ID somehow idfk tAT

function pageLoad() {
   const docRef = doc(db, "recipeVersions", ID);
   const docSnap = await getDoc(docRef);

   if (docSnap.exists()) {
      const newFile = docSnap.data().cooklang;
      parsingCook(newFile);
   } else {
      console.log("Invalid File");
   }
}

//when file update, update output
//const cooklangFile = child(database, FILE_PATH).val();
//onValue(cooklangFile, (snapshot) => {
//  const data = snapshot.val();
//  const newFile = ref(database, FILE_PATH);
//  parsingCook(cooklangFile);
//});
