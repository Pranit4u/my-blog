import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDMIVEJXCYr6EyZyPy-4BNiwZp1-Mfaf-U",
  authDomain: "myblog-3f7ec.firebaseapp.com",
  projectId: "myblog-3f7ec",
  storageBucket: "myblog-3f7ec.appspot.com",
  messagingSenderId: "198432332190",
  appId: "1:198432332190:web:e29c1fa458b12179531e8f"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  