<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
=======
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

>>>>>>> 58a6da993c2ec4995d358e0f8c2d41267197745e
const firebaseConfig = {
  apiKey: "AIzaSyC9HFAKmE8J1UcsdDf6mfvKSeTDccdqwkg",
  authDomain: "ambcall-14461.firebaseapp.com",
  projectId: "ambcall-14461",
  storageBucket: "ambcall-14461.firebasestorage.app",
  messagingSenderId: "978623448666",
  appId: "1:978623448666:web:790d5f07ee0fb01c74fa63",
  measurementId: "G-D0GN8R96HP"
};

<<<<<<< HEAD
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
        window.location.href = "booking.html"; // Redirect to booking page
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
=======
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("upsubmit_btn").addEventListener("click", async (event) => {
  event.preventDefault();

  const email = document.getElementById('upemail').value;
  const password = document.getElementById('uppassword').value;
  const statusMessage = document.getElementById('statusMessage');

  try {
    await setPersistence(auth, browserLocalPersistence);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    localStorage.setItem("userEmail", user.email);
    document.getElementById("authSection").style.display = "none";
    document.getElementById("welcomeSection").style.display = "block";
    document.getElementById("bookingSection").style.display = "block";
    document.getElementById("userName").textContent = user.email;
  } catch (error) {
    statusMessage.textContent = "Error creating account. Please try again.";
    statusMessage.style.color = "red";
  }
});
>>>>>>> 58a6da993c2ec4995d358e0f8c2d41267197745e
