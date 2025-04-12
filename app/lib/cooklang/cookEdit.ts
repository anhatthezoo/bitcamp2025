import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

//this is for text editor purpsoes idk fddsjafsdal;kjasdf;lj
import { FILE_PATH } from './cokwindow.ts';
import { database } from '../firebase.ts';  

function MyEditor() {
   const [editorState, setEditorState] = React.useState(
      () => 
      get(child(database, FILE_PATH)).then((snapshot) => {
         if (snapshot.exists()) {
            EditorState.createWithContent(snapshot.val());
         } else {
            EditorState.createEmpty();
         }
      }).catch((error) => {
         //if get fails
         //could also pull up an error message
         EditorState.createEmpty();
      });
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

ReactDOM.render(<MyEditor />, document.getElementById('container'));

const MyInput = () => {
  const [value, setValue] = useState('');
  const onChange = (evt) => setValue(evt.target.value);

  return <input value={value} onChange={onChange} />;
};







