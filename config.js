import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDN2IA8tINYxGg_XTGzw3u2-SlFMvsQLmY",
    authDomain: "project71-825e9.firebaseapp.com",
    projectId: "project71-825e9",
    storageBucket: "project71-825e9.appspot.com",
    messagingSenderId: "380072616526",
    appId: "1:380072616526:web:2a12572bb62ababdd1191f"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


