// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDQBkNRJ6mQAqNTRPzrR_u40eXZSoGOvSY",
    authDomain: "fbclone-d0e04.firebaseapp.com",
    projectId: "fbclone-d0e04",
    storageBucket: "fbclone-d0e04.appspot.com",
    messagingSenderId: "973181433062",
    appId: "1:973181433062:web:5807901c0ed890e068f727",
    measurementId: "G-79PLDX09DK"
  };

  const app= !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export {db , storage};