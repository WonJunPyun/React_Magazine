import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDM9OUimwhcd8jg6u5rcfCbn3Fcf5Pezuo",
  authDomain: "react-magazine-623ac.firebaseapp.com",
  projectId: "react-magazine-623ac",
  storageBucket: "react-magazine-623ac.appspot.com",
  messagingSenderId: "534111717350",
  appId: "1:534111717350:web:2dd7e3904558732b813827",
  measurementId: "G-JQ2282R5XB"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export { auth, apiKey, firestore, storage, realtime };
