// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrMjdcPwObesK-s9n2MEX3ZjHDezW-Y7M",
  authDomain: "netflixgpt-84fff.firebaseapp.com",
  projectId: "netflixgpt-84fff",
  storageBucket: "netflixgpt-84fff.appspot.com",
  messagingSenderId: "66999860385",
  appId: "1:66999860385:web:7e73c185fc330ca0a044e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
