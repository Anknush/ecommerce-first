import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAu1nnybmJm2NDUa18U29oyPhRTCNFqeeE",
  authDomain: "ecommerce-app-fe971.firebaseapp.com",
  projectId: "ecommerce-app-fe971",
  storageBucket: "ecommerce-app-fe971.appspot.com",
  messagingSenderId: "1019083570256",
  appId: "1:1019083570256:web:62c2e86d3db6dff8d0e555",
  measurementId: "G-48WQ2J7DZ5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
