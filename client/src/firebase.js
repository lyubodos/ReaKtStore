import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firebase-storage";


// const config = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// }

const config = {
  apiKey: "AIzaSyAk_zfIsb2H685VZDWPw-DqlgACpds_QjA",
  authDomain: "reaktstore-433ae.firebaseapp.com",
  projectId: "reaktstore-433ae",
  storageBucket: "reaktstore-433ae.appspot.com",
  messagingSenderId: "443733208740",
  appId: "1:443733208740:web:609a2252db01ccdf610031"
};

const app = firebase.initializeApp(config);

export const auth = app.auth();

export default app;