import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8U7QaNBKxceIkoHw5RDIDXM_M6UiU10o",
  authDomain: "mystick-6c425.firebaseapp.com",
  projectId: "mystick-6c425",
  storageBucket: "mystick-6c425.appspot.com",
  messagingSenderId: "724345294828",
  appId: "1:724345294828:web:8a5f88c681c04cc91ffac9",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
