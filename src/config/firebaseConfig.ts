import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFYneXfH48e_3yVdrjYc90_gntkvozxwM",
  authDomain: "acreage-a71e7.firebaseapp.com",
  projectId: "acreage-a71e7",
  storageBucket: "acreage-a71e7.appspot.com",
  messagingSenderId: "619955743990",
  appId: "1:619955743990:web:89d90a066fb3b91827d0d7"
};

initializeApp(firebaseConfig);
export const db = getFirestore();