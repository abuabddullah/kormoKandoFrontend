// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2lZyVf77eOGa9p9dA_MNQPZjWEwHJQs0",
  authDomain: "kormokando-9e4f9.firebaseapp.com",
  projectId: "kormokando-9e4f9",
  storageBucket: "kormokando-9e4f9.appspot.com",
  messagingSenderId: "562872522422",
  appId: "1:562872522422:web:572af5f13e02f995697817",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
