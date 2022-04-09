import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let buttonRegister = document.getElementById("buttonRegister")
buttonRegister.addEventListener('click',function(event){
    event.preventDefault()

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("Exito en el registro...")
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error de registro...")
    // ..
    });

    
})