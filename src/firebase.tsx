// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2o-_p-r5dUjhjb-xC2urPuS4jmHo6nMQ",
  authDomain: "expense-tracke-pwa.firebaseapp.com",
  projectId: "expense-tracke-pwa",
  storageBucket: "expense-tracke-pwa.appspot.com",
  messagingSenderId: "992864798515",
  appId: "1:992864798515:web:2c63f3f87319ed4db5e046"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;