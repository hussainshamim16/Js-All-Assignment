 
 
 
 
 
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAa7vWwxo3TbvQXj5KRlitAyMPbuLs2Exw",
   authDomain: "signup-signin-hs.firebaseapp.com",
   projectId: "signup-signin-hs",
   storageBucket: "signup-signin-hs.appspot.com",
   messagingSenderId: "527260808941",
   appId: "1:527260808941:web:b4efe98e836bc1c29b7ee4"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export{
    getAuth,
     createUserWithEmailAndPassword ,
     auth
}