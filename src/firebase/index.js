import firebase from 'firebase/app';
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCDwM38mFYOrcVeq6eXq7W8BnUeNoosT3M",
    authDomain: "ieti-project.firebaseapp.com",
    databaseURL: "https://ieti-project.firebaseio.com",
    projectId: "ieti-project",
    storageBucket: "ieti-project.appspot.com",
    messagingSenderId: "822229817193",
    appId: "1:822229817193:web:20db7daf0f2cbeba3b0ff8"
  };

  firebase.initializeApp(firebaseConfig)
  const storage = firebase.storage();

  export {storage,firebase as default};
