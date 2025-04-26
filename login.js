import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9HFAKmE8J1UcsdDf6mfvKSeTDccdqwkg",
  authDomain: "ambcall-14461.firebaseapp.com",
  projectId: "ambcall-14461",
  storageBucket: "ambcall-14461.firebasestorage.app",
  messagingSenderId: "978623448666",
  appId: "1:978623448666:web:790d5f07ee0fb01c74fa63",
  measurementId: "G-D0GN8R96HP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("upsubmit_btn").addEventListener("click", async (event) => {
  event.preventDefault();

  const email = document.getElementById('upemail').value;
  const password = document.getElementById('uppassword').value;
  const statusMessage = document.getElementById('statusMessage');

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