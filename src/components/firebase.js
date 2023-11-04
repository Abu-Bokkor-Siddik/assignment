// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkpq5phx62X6B_mROeYqBxt83P_3WFgTQ",
  authDomain: "groupestudy-aa61a.firebaseapp.com",
  projectId: "groupestudy-aa61a",
  storageBucket: "groupestudy-aa61a.appspot.com",
  messagingSenderId: "534325901146",
  appId: "1:534325901146:web:bc4a8f6d1a71dcc156e563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth