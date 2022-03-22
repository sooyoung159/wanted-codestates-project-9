import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import "firebase/storage";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsUOveQGd28EztQu1TlztUWRSj0xo2-EU",
  authDomain: "react-http-6a6f2.firebaseapp.com",
  databaseURL: "https://react-http-6a6f2-default-rtdb.firebaseio.com",
  projectId: "react-http-6a6f2",
  storageBucket: "react-http-6a6f2.appspot.com",
  messagingSenderId: "734323578315",
  appId: "1:734323578315:web:ab784cdccf7b4cffe6924e",
};

firebase.initializeApp(firebaseConfig);

const storage = getStorage();

export { storage, firebase as default };
