import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDrVHQ37VAJQ01SVSBEzt52EI6uFZukjgc",
    authDomain: "yamu-clothes.firebaseapp.com",
    databaseURL: "https://yamu-clothes.firebaseio.com",
    projectId: "yamu-clothes",
    storageBucket: "",
    messagingSenderId: "322411418940",
    appId: "1:322411418940:web:82359cbd6ae63e8a"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

