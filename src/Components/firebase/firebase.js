import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_lfdhWG1G92clfjEtVM_zvcOcuullk1Y",
  authDomain: "samrt-deal.firebaseapp.com",
  projectId: "samrt-deal",
  storageBucket: "samrt-deal.firebasestorage.app",
  messagingSenderId: "1083090701701",
  appId: "1:1083090701701:web:6acc26eac00755f32408ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
