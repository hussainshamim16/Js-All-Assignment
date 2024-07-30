import {
    auth,
    getAuth,
    createUserWithEmailAndPassword
} from "./signup.js"
const signup = async () => {


    // const email = document.querySelector('#email');
    // const password = document.querySelector('#password');
    // console.log("click", email.value, password.value)

    //     try {
    //         const email = document.querySelector('#email');
    //         const password = document.querySelector('#password');
    //         console.log("click", email.value, password.value)

    //         const userData = {
    //             Email: email.value,
    //             Password: password.value
    //         }

    //         const response = await createUserWithEmailAndPassword(
    //             auth,
    //              email.value,
    //               password.value
    //         );
    //         const uid = response.user.uid
    //    console.log(response, "response");
    //         alert("sucsess ")
    //     } catch (error) {
    //         console.log("error", error.message)
    //         alert("error")
    //     }

    // try {
    //     const email = document.querySelector('#email');
    // const password = document.querySelector('#password');
    // console.log("click", email.value, password.value)

    //     // db obj
    //     const userObj = {
    //       Email: email.value,
    //       Password: password.value
    //     };
    //     console.log("userObj", userObj);
    //     // firstly user signup
    //     const response = await createUserWithEmailAndPassword(
    //       auth,
    //       email.value,
    //       password.value
    //     );
    //     const uid = response.user.uid;

    //     // const userResponse = await setDoc(doc(db, "users", uid), userObj);
    //     alert("user successfully signup")
    //     window.location.href = "./login.html"
    //     // console.log("userResponse", userResponse);
    //     // console.log(response, "response");
    //   } catch (error) {
    //     console.log("error", error.message);
    //     alert(error.message);
    //   }

    try {
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        console.log("result ",email.value,password.value);

        const data = {
          
            Email:email.value,
            Password:password.value
        }

        console.log("data",data)
        const response = await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value  
        );

        const uid = response.user.uid;
        alert("sign up sucsses");
        console.log("response",response)

    } catch (error) {
        console.log("error",error.message)
        alert("error");
    }
};





window.signup = signup;