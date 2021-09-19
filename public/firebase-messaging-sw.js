importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

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

// Retrieve firebase messaging
const messaging = firebase.messaging();