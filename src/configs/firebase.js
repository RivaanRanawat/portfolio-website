import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBJNM8vZgVJ08847AK1C5RVj3rKv2gg2v4",
    authDomain: "portfolio-website-91263.firebaseapp.com",
    projectId: "portfolio-website-91263",
    storageBucket: "portfolio-website-91263.appspot.com",
    messagingSenderId: "866954889200",
    appId: "1:866954889200:web:40e1f38e9e44199458ff35"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export default firebase;