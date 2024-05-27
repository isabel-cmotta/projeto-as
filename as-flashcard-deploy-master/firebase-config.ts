// Importe o SDK do Firebase
import firebase from 'firebase/app';
import 'firebase/analytics'; // Se você estiver usando o Firebase Analytics
import 'firebase/auth';
import 'firebase/firestore'; // Se você estiver usando o Firestore

// Configurações do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCcud-Tz7ZL4h3VdUJhkEsH_WTQk45vFRA",
  authDomain: "as-flashcard-deploy.firebaseapp.com",
  projectId: "as-flashcard-deploy",
  storageBucket: "as-flashcard-deploy.appspot.com",
  messagingSenderId: "945420984122",
  appId: "1:945420984122:web:a9e584855bdef3ae9d3a03",
  measurementId:"G-T055CK4JKH" 
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Exporte o Firebase para que você possa usá-lo em outros lugares no seu código
export default firebase;
