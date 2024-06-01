
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-4HI2icL0cbtCB8fda0yWOkfVMPxvLfc",
  authDomain: "culinai.firebaseapp.com",
  projectId: "culinai",
  storageBucket: "culinai.appspot.com",
  messagingSenderId: "142762865316",
  appId: "1:142762865316:web:4ae9685754bbe170446c31",
  measurementId: "G-ERJG5R682D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);