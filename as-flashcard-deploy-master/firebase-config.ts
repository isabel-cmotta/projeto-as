// Importe o SDK do Firebase
import firebase from 'firebase/app';
import 'firebase/analytics'; // Se você estiver usando o Firebase Analytics
import 'firebase/auth';
import 'firebase/firestore'; // Se você estiver usando o Firestore

// Configurações do seu projeto Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

export default firebaseConfig;