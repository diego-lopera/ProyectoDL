import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let buttonRegister = document.getElementById("buttonRegister")
let infoModalLogin = new bootstrap.Modal(document.getElementById('infoModalLogin'))
buttonRegister.addEventListener('click',function(event){
    event.preventDefault()

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    let infoText = document.getElementById("modalMessage")
    let form = document.getElementById("registerForm")
    form.reset()
    infoText.textContent= "Registro exitoso"
    infoModalLogin.show()
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    let infoText = document.getElementById("modalMessage")
    infoText.textContent= "Error de registro: "+errorMessage
    infoModalLogin.show()
    // ..
    });

    
})