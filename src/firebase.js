import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCwPky_PKWfIbNRUrsk00HR-BTLLwId_N0",
  authDomain: "todo-app-cp-ee258.firebaseapp.com",
  databaseURL: "https://todo-app-cp-ee258.firebaseio.com",
  projectId: "todo-app-cp-ee258",
  storageBucket: "todo-app-cp-ee258.appspot.com",
  messagingSenderId: "310598213365",
  appId: "1:310598213365:web:65cb8b023087b685f9efbc",
  measurementId: "G-7EN750GGQY",
});

const db = firebaseApp.firestore();

export default db;