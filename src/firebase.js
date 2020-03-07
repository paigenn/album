import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDYVwCHEw5yGKSVnZvjeUeHjl3qbsJPI1E",
  authDomain: "album-d70a9.firebaseapp.com",
  databaseURL: "https://album-d70a9.firebaseio.com",
  projectId: "album-d70a9",
  storageBucket: "album-d70a9.appspot.com",
  messagingSenderId: "736524771429",
  appId: "1:736524771429:web:b0cb3e87b293b01d18a68c",
  measurementId: "G-PQ8LYZWLGW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
