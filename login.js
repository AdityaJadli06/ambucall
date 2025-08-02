<<<<<<< HEAD
// Import necessary Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase config
=======
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

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

// Handle form submission
const submit = document.getElementById("upsubmit_btn");
submit.addEventListener("click", async function(event) {
=======
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("upsubmit_btn").addEventListener("click", async (event) => {
>>>>>>> 58a6da993c2ec4995d358e0f8c2d41267197745e
  event.preventDefault();

  const email = document.getElementById('upemail').value;
  const password = document.getElementById('uppassword').value;
  const statusMessage = document.getElementById('statusMessage');

<<<<<<< HEAD
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
    window.location.href = "booking.html"; // Redirect to booking page
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
=======
  try {
    await setPersistence(auth, browserLocalPersistence);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    localStorage.setItem("userEmail", user.email);
    document.getElementById("authSection").style.display = "none";
    document.getElementById("welcomeSection").style.display = "block";
    document.getElementById("bookingSection").style.display = "block";
    document.getElementById("userName").textContent = user.email;
  } catch (error) {
    statusMessage.textContent = "Invalid credentials. Please try again.";
    statusMessage.style.color = "red";
  }
});
>>>>>>> 58a6da993c2ec4995d358e0f8c2d41267197745e
