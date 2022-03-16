
  import firebase from "firebase";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBdwCXdThlpTSsVeMTkEwqLfNGP9wV5Jo8",
    authDomain: "disne-ea6d9.firebaseapp.com",
    projectId: "disne-ea6d9",
    storageBucket: "disne-ea6d9.appspot.com",
    messagingSenderId: "434293765501",
    appId: "1:434293765501:web:de868410a6af5dcd31c814",
    measurementId: "G-DLMR5GBLWZ"
  };
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider()
    export {auth, provider}
    export default db;