import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
 
const firebaseConfig = {
  apiKey: "AIzaSyDoDP-tTVZAX4eFdsPgpqGzNqpJXI0tv3Y",
  authDomain: "john-movie-app.firebaseapp.com",
  projectId: "john-movie-app",
  storageBucket: "john-movie-app.appspot.com",
  messagingSenderId: "1021117009847",
  appId: "1:1021117009847:web:9974092b01a289ab346232"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export {db, auth};