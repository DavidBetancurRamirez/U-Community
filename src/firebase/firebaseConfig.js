// Funcion inicia firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// // Base de datos
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// // Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyA6P2jszU3Sspbpl956sVvSZN1e96T1sqg",
//   authDomain: "testing-u-community.firebaseapp.com",
//   projectId: "testing-u-community",
//   storageBucket: "testing-u-community.appspot.com",
//   messagingSenderId: "824362560785",
//   appId: "1:824362560785:web:8e0a8a4fc3eb545a02f0b0"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
const provider  = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export {app, db, auth, provider, analytics};