// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKNQYurLrVU7-uVGhNBDtgdtKcWiM_BLU",
  authDomain: "adv-studio.firebaseapp.com",
  projectId: "adv-studio",
  storageBucket: "adv-studio.appspot.com",
  messagingSenderId: "118013853062",
  appId: "1:118013853062:web:58460e18df479f725f0007",
  measurementId: "G-6RN2VNBCH5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
