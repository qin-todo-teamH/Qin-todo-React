import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIGQegOBv_WRcTfpGAv1sCl0_Ljve7aaQ",
  authDomain: "qin-todo-teamh.firebaseapp.com",
  projectId: "qin-todo-teamh",
  storageBucket: "qin-todo-teamh.appspot.com",
  messagingSenderId: "918642719634",
  appId: "1:918642719634:web:cc08d8cfa45dc023c99f4b",
  measurementId: "G-9HXSHJ18GS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
