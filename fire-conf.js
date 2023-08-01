import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9_Qkk7Ha_W8LJ8HZvJK3wM6LCjbcGMVQ",
  authDomain: "firestore-test-88e8e.firebaseapp.com",
  databaseURL: "https://firestore-test-88e8e-default-rtdb.firebaseio.com",
  projectId: "firestore-test-88e8e",
  storageBucket: "firestore-test-88e8e.appspot.com",
  messagingSenderId: "404950788598",
  appId: "1:404950788598:web:eec391e8b016fb6902bfd7",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
