import firebase from "firebase/app";

export const fairebaseConfig = {
  apiKey: "AIzaSyCIGQegOBv_WRcTfpGAv1sCl0_Ljve7aaQ",
  authDomain: "qin-todo-teamh.firebaseapp.com",
  projectId: "qin-todo-teamh",
  storageBucket: "qin-todo-teamh.appspot.com",
  messagingSenderId: "918642719634",
  appId: "1:918642719634:web:cc08d8cfa45dc023c99f4b",
  measurementId: "G-9HXSHJ18GS",
};

if (!firebase.applength) {
  firebase.initializeApp(fairebaseConfig);
}
