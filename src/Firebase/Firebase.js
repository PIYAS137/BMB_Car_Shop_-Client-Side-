// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi0eUDPnznfycPteqcs2MqqJML1RcettI",
  authDomain: "bmb-brand-web.firebaseapp.com",
  projectId: "bmb-brand-web",
  storageBucket: "bmb-brand-web.appspot.com",
  messagingSenderId: "708383652465",
  appId: "1:708383652465:web:bef443a9727e08782eb9d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;