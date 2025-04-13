import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

import { FILE_PATH } from './cokwindow.ts';
import { db } from '../firebase.ts';  
import { doc, updateDoc, getDoc, exists } from 'firebase/firestore'

//this is for text editor purpsoes idk fddsjafsdal;kjasdf;lj
export default function MyEditor() {
   const [editorState, setEditorState] = React.useState(
      () => {
         const docRef = doc(db, "recipeVersions", ID);
         const docSnap = await getDoc(docRef);

         if (docSnap.exists()){
            EditorState.createWithContent(docSnap.data().cooklang);
         } else {
            EditorState.createEmpty();
         }
      }

      // if (FILE_PATH == null) {
//         EditorState.createEmpty();
  //    } else {
    //     const prommy = get
      //   EditorState.createWithContent(
        //    createFromText(
          //     get()));
    //  }
  );

   return <Editor editorState={editorState} onChange={setEditorState} />;
}
const MyInput = () => {
  const [value, setValue] = useState('');
  const onChange = (evt) => setValue(evt.target.value);

  return <input value={value} onChange={onChange} />;
};

function save(cookFile, user, newID) {
   const fileRef = doc(db, "recipeVersions", ID);

   await setDoc(fileRef, {
      cooklang: cookFile,
      id: newID,
      date: serverTimestamp(),
      modifiedBy: user
   });

}







