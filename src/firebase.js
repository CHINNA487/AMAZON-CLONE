// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC_qKouBEuftTQ-ZvhefcyYKAjZ65uuqjI",
    authDomain: "clone-727ea.firebaseapp.com",
    projectId: "clone-727ea",
    storageBucket: "clone-727ea.appspot.com",
    messagingSenderId: "888728474684",
    appId: "1:888728474684:web:852df12c0fdd7b35775f39",
    measurementId: "G-079F87QDL8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
