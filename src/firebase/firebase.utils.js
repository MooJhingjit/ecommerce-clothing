import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDU-bj0Hjj2v9johJ2kssFw0DSwoudql78",
  authDomain: "crwn-db-ab64d.firebaseapp.com",
  databaseURL: "https://crwn-db-ab64d.firebaseio.com",
  projectId: "crwn-db-ab64d",
  storageBucket: "crwn-db-ab64d.appspot.com",
  messagingSenderId: "465987709863",
  appId: "1:465987709863:web:13b1f0eeba075c36fde482",
  measurementId: "G-KKLXN0YFFY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
