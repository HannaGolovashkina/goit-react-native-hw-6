import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBsyFlWp1L_zcgSy2wlSOqpqsVC8ZDUdNs",
  authDomain: "green-grass-382016.firebaseapp.com",
  databaseURL: "https://green-grass-382016-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "green-grass-382016",
  storageBucket: "green-grass-382016.appspot.com",
  messagingSenderId: "867297042468",
  appId: "1:867297042468:web:22e5e9487c452384b5b8b1",
  measurementId: "G-2PCP5Z9BFM"
//     apiKey: "AIzaSyBsyFlWp1L_zcgSy2wlSOqpqsVC8ZDUdNs",
//     authDomain: "green-grass-382016.firebaseapp.com",
//     projectId: "green-grass-382016",
//     storageBucket: "green-grass-382016.appspot.com",
//     messagingSenderId: "867297042468",
//     appId: "1:867297042468:web:22e5e9487c452384b5b8b1",
//     measurementId: "G-2PCP5Z9BFM"
  };  
  
// Initialize Firebas
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);