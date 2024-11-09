import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgw1h48u9K8gQ0UNlKWOha6k9lQAAz1jY",
  authDomain: "portfolio-94554.firebaseapp.com",
  projectId: "portfolio-94554",
  storageBucket: "portfolio-94554.appspot.com",
  messagingSenderId: "12222241172",
  appId: "1:12222241172:web:3c3e4293d675ec71131781"
};

initializeApp(firebaseConfig);


const data = getFirestore()
 export default data