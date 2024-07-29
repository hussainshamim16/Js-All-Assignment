// console.log("hello world")
// import { getFirestore, collection, getDocs, addDoc ,db} from "./firebase.js";

let name = document.getElementById("name");
let email = document.getElementById("email");
let rollNumber = document.getElementById("rollNumber");

// const signup = async () => {
//     console.log("------------------ user information ----------------------");
//     console.log(name.value + '\n' + email.value + '\n' + rollNumber.value);
//     console.log("------------------ user information ----------------------");


// }


// try {
//     const docRef = await addDoc(collection(db, "users"), {
//         name: name.value,
//         email: email.value,
//         rollNumber: rollNumber.value
//     });

//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("Error adding document: ", e);

// }

import {
  getFirestore,
  collection,
  setDoc,
  auth,
  addDoc,
  getDocs,
  db,
  getAuth,
  doc,
  createUserWithEmailAndPassword
} from './firebase.js';


const signup = async () => {
  console.log("------------------ user information ----------------------");
  console.log(name.value + '\n' + email.value + '\n' + rollNumber.value);
  console.log("------------------ user information ----------------------");


  let userData = {
    name: name.value,
    email: email.value,
    rollNumber: rollNumber.value
  }

  const userCollection = collection(db, "user");
  let response = await addDoc(userCollection, userData);
  alert("done")
  console.log("response", response);

  const userResponse = await createUserWithEmailAndPassword(
    auth,
    email.value,
    rollNumber.value
  );

  const userId = userResponse.user.userId;

  const uiRes = await setDoc(doc(db, "user", userId), userData)
  alert("succsess")

  // name.value = ""
  // email.value = ""
  // rollNumber.value = ""

}

window.signup = signup;