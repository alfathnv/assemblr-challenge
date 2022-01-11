import React from 'react'
import { auth } from "../../firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./index.scss";
import GoogleButton from '../../components/GoogleButton';

function Login() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  return (
    <div>
      <GoogleButton sign_in={signInWithGoogle}/>
    </div>
  )
}

export default Login
