
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzzf_XqRdydev2xBxWgMu2SMyzPcrgWE4",
  authDomain: "mern-hotel-938e7.firebaseapp.com",
  projectId: "mern-hotel-938e7",
  storageBucket: "mern-hotel-938e7.appspot.com",
  messagingSenderId: "863205162417",
  appId: "1:863205162417:web:aca40481d3a595993e1190",
  measurementId: "G-4T5MPBYWTW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export {firebase};