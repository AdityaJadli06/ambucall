// Import necessary Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase config
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

// Handle form submission
const submit = document.getElementById("upsubmit_btn");
submit.addEventListener("click", async function(event) {
  event.preventDefault();

  const email = document.getElementById('upemail').value;
  const password = document.getElementById('uppassword').value;
  const statusMessage = document.getElementById('statusMessage');

  // Simple email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email || !emailPattern.test(email)) {
    statusMessage.textContent = "Please enter a valid email address.";
    statusMessage.style.color = "red";
    return;
  }

  // Simple password validation
  if (!password || password.trim() === '') {
    statusMessage.textContent = "Please enter your password.";
    statusMessage.style.color = "red";
    return;
  }

  const auth = getAuth();

  try {
    // Attempt sign-in
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    alert("Logging In...");
    window.location.href = 'driver-dashboard.html'; // Redirect to driver dashboard
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    // Handle invalid credentials (either wrong password or no user found)
    if (errorCode === 'auth/invalid-credential' || errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
      statusMessage.textContent = "Invalid credentials. Please try again.";
      statusMessage.style.color = "white";
    } else {
      // Handle other errors
      statusMessage.textContent = `Error: ${errorMessage}`;
      statusMessage.style.color = "red";
    }

    console.error("Full Error:", error.toString());
    console.error("Error Code:", errorCode);
    console.error("Error Message:", errorMessage);
  }
});
