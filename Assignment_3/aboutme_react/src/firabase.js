import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, child, push, update } from "firebase/database"
import csvData from './metrics.csv';

const firebaseConfig = {
  apiKey: "AIzaSyBFY06C-XKczoueFfzDjUgREzX2cj406ww",
  authDomain: "reactplatform-50568.firebaseapp.com",
  databaseURL: "https://reactplatform-50568-default-rtdb.firebaseio.com",
  projectId: "reactplatform-50568",
  storageBucket: "reactplatform-50568.appspot.com",
  messagingSenderId: "690216822555",
  appId: "1:690216822555:web:bb66deef550031f29255be",
  measurementId: "G-6W6H98L8WJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

function writeToDB(data) {
    const database = getDatabase();
    set(ref(database, 'metrics/'), {
      presence_time: data[1],
      scroll_height: data[2],
      current_scroll: data[3]
      
    });
}

writeToDB();



