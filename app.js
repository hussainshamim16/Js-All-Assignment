


import {
   
   collection,
   getDocs,
   app,
   db,
   addDoc
   
} from "./firebase.js";

const submit = document.getElementById('submit');
submit.addEventListener('click', async () => {

   

   let email = document.getElementById('email').value;
   let pasword = document.getElementById('password').value;
   
   
   if(!email){
      alert("Enter Email !!");
      return;
   }else if(!pasword){
      alert("Enter password !!");
      return;
   }else{
      const data = {
         userEmail :email,
         userPassword :pasword
      }
   
   
      // console.log(data)
      // console.log(getFirestore)
      // console.log(collection)
      // console.log(getDocs)
      // console.log(app)
      // console.log(db)
   
      const collect = collection(db, "user");
      const response = await addDoc(collect,data)
      console.log(response)
      let visible = document.getElementById('visible');
      let cnt = document.getElementById('cnt');
      cnt.className = "hide";
      visible.className = "submit show";
      // console.log(email, pasword)
      // email.value = ''
      // pasword.value = ''
   }
   
})
