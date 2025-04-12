import { database } from '../firebase.ts'
import { ref, onValue } from 'firebase/database'

//export const FILE_PATH = 

//when file update, update output
const cooklangFile = ref(database, FILE_PATH);
onValue(cooklangFile, (snapshot) => {
  const data = snapshot.val();
  const newFile = ref(database, FILE_PATH);
  parsingCook(cooklangFile);
});
