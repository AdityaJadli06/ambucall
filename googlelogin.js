// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9HFAKmE8J1UcsdDf6mfvKSeTDccdqwkg",
  authDomain: "ambcall-14461.firebaseapp.com",
  projectId: "ambcall-14461",
  storageBucket: "ambcall-14461.firebasestorage.app",
  messagingSenderId: "978623448666",
  appId: "1:978623448666:web:790d5f07ee0fb01c74fa63",
  measurementId: "G-D0GN8R96HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googlelogin = document.getElementById("gsi");
if (googlelogin) {
  googlelogin.addEventListener("click", () => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => signInWithPopup(auth, provider))
      .then((result) => {
        const user = result.user;
        // Redirect or show welcome UI
        window.location.href = "booking.html";
      })
      .catch((error) => {
        console.error("Error during Google Sign-In:", error);
      });
  });
}
