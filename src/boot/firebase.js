// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// PUT YOUR OWN FIREBASE CONFIGURATION HERE
  const firebaseConfig = {

    apiKey: "AIzaSyDFI_FhULyB3LunR8rzmh-VEDwii0Fy_4Y",

    authDomain: "esuscatin.firebaseapp.com",
    databaseURL: "https://esuscatin-default-rtdb.firebaseio.com/",

    projectId: "esuscatin",

    storageBucket: "esuscatin.appspot.com", 

    messagingSenderId: "145168956629",

    appId: "1:145168956629:web:badd33bc1034fe8735765c",

    measurementId: "G-JL0JC69D1J"

  };
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
