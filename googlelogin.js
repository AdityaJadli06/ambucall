<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, signInWithPopup ,GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
=======
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

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
const auth = getAuth(app);
auth.languageCode='en';
const provider= new GoogleAuthProvider();

const googlelogin=document.getElementById("gsi");
googlelogin.addEventListener("click", function event(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    window.location.href="booking.html";
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})
=======
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

document.getElementById("gsi").addEventListener("click", () => {
  setPersistence(auth, browserLocalPersistence)
    .then(() => {
      return signInWithPopup(auth, provider);
    })
    .then((result) => {
      const user = result.user;
      document.getElementById("authSection").style.display = "none";
      document.getElementById("welcomeSection").style.display = "block";
      document.getElementById("bookingSection").style.display = "block";
      document.getElementById("userName").textContent = user.displayName || "User";
    })
    .catch((error) => {
      console.error("Error during Google Sign-In:", error);
    });
});
>>>>>>> 58a6da993c2ec4995d358e0f8c2d41267197745e
