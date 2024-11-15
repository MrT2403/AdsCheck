import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC11bDE22GdFZAK8bKYc7BX96v5b8dVc4s",
  authDomain: "adscheck-fbad8.firebaseapp.com",
  projectId: "adscheck-fbad8",
  storageBucket: "adscheck-fbad8.firebasestorage.app",
  messagingSenderId: "289791371990",
  appId: "1:289791371990:web:6523176aceb96ac75b3777",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
