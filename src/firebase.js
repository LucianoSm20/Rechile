  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/storage';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDFXyK0mAxGbKK4iJpNEMoXbMoG9igXnlA",
    authDomain: "rechile-28a41.firebaseapp.com",
    projectId: "rechile-28a41",
    storageBucket: "rechile-28a41.appspot.com",
    messagingSenderId: "24971576518",
    appId: "1:24971576518:web:28aef2513598d2b64d03c7",
    measurementId: "G-8MCCGCVMGS"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
  export const storage = fb.storage();