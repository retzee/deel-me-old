
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6AmEHQ6uvnbNOSqxhZDVe4jQUHXaPV0k",
  authDomain: "jooms-bit.firebaseapp.com",
  databaseURL: "https://jooms-bit-default-rtdb.firebaseio.com",
  projectId: "jooms-bit",
  storageBucket: "jooms-bit.appspot.com",
  messagingSenderId: "607154181287",
  appId: "1:607154181287:web:77ba204f57e1717246f782",
  measurementId: "G-JBGKYM6D1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);