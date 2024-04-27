import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_KEY ,
  authDomain: "clonechat-3e209.firebaseapp.com",
  projectId: "clonechat-3e209",
  storageBucket: "clonechat-3e209.appspot.com",
  messagingSenderId: "335810486620",
  appId: "1:335810486620:web:3d675295a8b879ad0fa199",
  measurementId: "G-1LRNH0953B"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
const fireDB=getFirestore(app)
export{auth,fireDB,provider}

