import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";

import { initializeApp } from "firebase/app";

// Include firebase config details
const firebaseConfig = {
  apiKey: "AIzaSyDhRDiwoNdVhN4QjdNLu32OwI2pcwSPkJg",
  authDomain: "the-java-lounge.firebaseapp.com",
  projectId: "the-java-lounge",
  storageBucket: "the-java-lounge.appspot.com",
  messagingSenderId: "895601966294",
  appId: "1:895601966294:web:c31de87af2a74872fb1d77",
};

// add google as the authorization provider
const provider = new GoogleAuthProvider();
// initialize the app with firebase config details
const app = initializeApp(firebaseConfig);
// get the firestore database
const db = getFirestore(app);
// get authorisation details from firebase
const auth = getAuth();
// create an exportable function to sign in with google popup
export const SignInWithGooglePopup = () =>
  // pass in firebase authorisation and goole provider to create a firebase login for google
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // destrcuture the google email and display name
      const { email, displayName } = result.user;
      try {
        // create a user with the login details and store them in the database
        await addDoc(collection(db, "users"), {
          firstName: displayName,
          email: email,
        });
      } catch (e) {
        // catch the error
      }
    })
    .catch((e) => {
      // catch the error
    });
// create an exportable function to sign up with email and password
export const SignUpwithUserCredientials = async (loginDetails) => {
  // destrcuture the email and password
  const { email, password, firstName, lastName } = loginDetails;
  try {
    // pass in firebase authorisation and custom email and password to allow user to sign up manually
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Create user document (entree) for a user with the response uid
    const userDocRef = doc(db, "users", response.user.uid);
    // Get a document snapshot with details about this entree
    const docSnapshot = await getDoc(userDocRef);
    console.log(docSnapshot);
    // Check if the entree exists in firestore
    if (!docSnapshot.exists()) {
      // create a user with the login details and store them in the database
      await addDoc(collection(db, "users"), {
        email: email,
        firstName: firstName,
        lastName: lastName,
      });
    }
  } catch (e) {
    // catch any errors
    switch (e.code) {
      case "auth/invalid-email":
        alert("Invalid email address.");
        break;
      case "auth/email-already-in-use":
        alert("Email address already in use.");
        break;
      default:
        alert("Please check the form fields again.");
        break;
    }
  }
};
// create an exportable function to sign in with email and password
export const SignInWithUserCredientials = async (loginDetails) => {
  // destrcuture the email and password
  const { email, password } = loginDetails;
  // pass in firebase authorisation and custom email and password to allow user to sign in manually
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      alert(error);
    });
};
