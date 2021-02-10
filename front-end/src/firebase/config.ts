// // Firebase App (the core Firebase SDK) is always required and
// // must be listed before other Firebase SDKs
// import * as firebase from "firebase/app";

// // Add the Firebase services that you want to use
// // We only want to use Firebase Auth here
// import "firebase/auth";

// // Your app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyAFGKybhAiiT5h9H4ZOc8u8Yw3MZNJ3AvQ",
//     authDomain: "test-7c50e.firebaseapp.com",
//     databaseURL: "https://test-7c50e-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "test-7c50e",
//     storageBucket: "test-7c50e.appspot.com",
//     messagingSenderId: "726955478435",
//     appId: "1:726955478435:web:991a65a58452dc3048de16",
//     measurementId: "G-ZSWF52R63R"
//   };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Finally, export it to use it throughout your app
// export default firebase;




import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})


export default firebase