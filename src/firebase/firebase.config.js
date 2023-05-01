// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD25ofYZoZCI4SJ5PpterCk5TV8LRzmkIY",
  authDomain: "china-chef-recipe-house.firebaseapp.com",
  projectId: "china-chef-recipe-house",
  storageBucket: "china-chef-recipe-house.appspot.com",
  messagingSenderId: "30864136237",
  appId: "1:30864136237:web:fda0ae83a3da9d664500a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;