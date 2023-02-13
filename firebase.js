// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, GeoPoint, doc, setDoc, Timestamp  } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { userConverter, User } from "./User";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfaUiKVLEyXddhIYMcvjMeRwbDEult--Q",
  authDomain: "backtohue.firebaseapp.com",
  projectId: "backtohue",
  storageBucket: "backtohue.appspot.com",
  messagingSenderId: "381879280532",
  appId: "1:381879280532:web:f1bbcf0ed714fd87506581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();

/**
 * Sample function for signing up a user to Firebase Authentication and storing their info on Firestore DB.
 * (Not finalized)
 * 
 * @param {*} email 
 * @param {*} password 
 */
export async function signUp(email, password) {
    // Create Firebase auth user with email and password
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        // Signed up and Signed in
        const user = userCredential.user;
        // Store username and email in database.
        // { merge: false} is added to make sure setDoc() doesn't overwrite data for a user.
        const newUser = new User({}, new GeoPoint(0,0));
        const ref = doc(db, "users", `${user.uid}`).withConverter(userConverter);
        const docRef = await setDoc(ref, newUser
        , { merge: false }).catch((error) => {
            console.log("Error writing user data to database");
        });
        console.log("User data written successfully");
        // Send authentication email.
        sendEmailVerification(auth.currentUser)
            .catch((error) => {
                console.log(error.message);
            })
    })
    .catch((error) => {
        console.log(error.message + "\n");
    })
}

/**
 * Sample function for signing in a user through Firebase Authentication 
 * (Not finalized)
 * 
 * @param {*} email 
 * @param {*} password 
 */
export async function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('User signed in successfully with email: ' + user.email);
        return true;
    })
    .catch((error) => {
        console.log(error.message + "\n");
        return false;
    });
}