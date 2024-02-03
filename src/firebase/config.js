import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDenbQ0hItYgmGhaVrn-wqs_cN7Lqi5_SU",
    authDomain: "fir-53fc9.firebaseapp.com",
    projectId: "fir-53fc9",
    storageBucket: "fir-53fc9.appspot.com",
    messagingSenderId: "933871383473",
    appId: "1:933871383473:web:27767f3935df412aaa0390",
    measurementId: "G-XZWZ1JBW13"
  };


  export default firebase.initializeApp(firebaseConfig)