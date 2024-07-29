

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
 import { getFirestore, collection, getDocs,addDoc } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js';
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAu7Wnb2R5gDW8izLb56n_bsARuEhrjACM",
   authDomain: "fire-base-226825.firebaseapp.com",
   projectId: "fire-base-226825",
   storageBucket: "fire-base-226825.appspot.com",
   messagingSenderId: "564718861813",
   appId: "1:564718861813:web:5a23484ce4c01c3343f4bc"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

 export{
  getFirestore,
collection,
getDocs,
app,
addDoc,
db
 }
 