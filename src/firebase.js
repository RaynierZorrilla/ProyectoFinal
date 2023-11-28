import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA8AuYFADlPH0zC-MULkZIJIPlzSn5UcFo",
    authDomain: "proyecto-chat-593b7.firebaseapp.com",
    projectId: "proyecto-chat-593b7",
    storageBucket: "proyecto-chat-593b7.appspot.com",
    messagingSenderId: "631709778731",
    appId: "1:631709778731:web:da45c87d761c4d7f017b6e"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);