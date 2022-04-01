import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",  
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const login = document.getElementById("login");
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
login.addEventListener('click', (e) =>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
})