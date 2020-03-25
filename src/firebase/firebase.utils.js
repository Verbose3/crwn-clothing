import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAf28Li9LzE0OBCI-Ka0IpDvVobbNHoWpA",
  authDomain: "crwn-bc.firebaseapp.com",
  databaseURL: "https://crwn-bc.firebaseio.com",
  projectId: "crwn-bc",
  storageBucket: "crwn-bc.appspot.com",
  messagingSenderId: "441996275023",
  appId: "1:441996275023:web:b912d4d2c91940d5abe93a",
  measurementId: "G-J9HB9JN3K0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
