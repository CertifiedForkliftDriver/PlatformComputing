import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firbase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFY06C-XKczoueFfzDjUgREzX2cj406ww",
  authDomain: "reactplatform-50568.firebaseapp.com",
  projectId: "reactplatform-50568",
  storageBucket: "reactplatform-50568.appspot.com",
  messagingSenderId: "690216822555",
  appId: "1:690216822555:web:bb66deef550031f29255be",
  measurementId: "G-6W6H98L8WJ",
  databaseURL: "https://console.firebase.google.com/u/0/project/reactplatform-50568/database/reactplatform-50568-default-rtdb/data/~2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);