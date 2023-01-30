import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyAV_wmMkxFPOP7vTpNYvS60AV7BdzwULoY",

    authDomain: "chimex-db.firebaseapp.com",

    projectId: "chimex-db",

    storageBucket: "chimex-db.appspot.com",

    messagingSenderId: "951915853769",

    appId: "1:951915853769:web:9acbc26a576c0ffa225a18",

    measurementId: "G-ZL1X4L3KW0"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;