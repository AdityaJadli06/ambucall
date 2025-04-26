// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8wQLweHLDqGhR52pmd1QuUceqUBWeIBM",
    authDomain: "driver-login-3aa8b.firebaseapp.com",
    projectId: "driver-login-3aa8b",
    storageBucket: "driver-login-3aa8b.firebasestorage.app",
    messagingSenderId: "313835825411",
    appId: "1:313835825411:web:7dbf5b4103cd0a53f02136",
    measurementId: "G-NB8KM8NHYR"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const submit = document.getElementById("upsubmit_btn");
const statusMessage = document.getElementById('statusMessage');

submit.addEventListener("click", function(event) {
    event.preventDefault();

    const email = document.getElementById('upemail').value;
    const password = document.getElementById('uppassword').value;

    // Simple validation for email and password
    if (!email || !password) {
        statusMessage.textContent = "Please enter both email and password.";
        statusMessage.style.color = "red";
        return;
    }

    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        statusMessage.textContent = "Please enter a valid email address.";
        statusMessage.style.color = "red";
        return;
    }

    // Disable the submit button and show loading message
    submit.disabled = true;
    statusMessage.textContent = "Creating your account... Please wait.";
    statusMessage.style.color = "black";

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        alert("Account created successfully!");
        window.location.href = "driver-dashboard.html"; // Redirect to driver dashboard page
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        // Handle specific errors
        if (errorCode === "auth/email-already-in-use") {
            statusMessage.textContent = "This email is already registered. Please use a different email.";
        } else if (errorCode === "auth/weak-password") {
            statusMessage.textContent = "Password should be at least 6 characters.";
        } else {
            statusMessage.textContent = `Error: ${errorMessage}`;
        }
        
        statusMessage.style.color = "white";
        console.error("Error Code:", errorCode);
        console.error("Error Message:", errorMessage);
    })
    .finally(() => {
        // Re-enable the submit button after the process
        submit.disabled = false;
    });
});
