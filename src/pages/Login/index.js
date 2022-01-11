import React from 'react'
import { auth } from "../../firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleButton from '../../components/GoogleButton';
import "./index.scss";

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
    <div className='login-wrapper'>
      <div className='title-image'>
        <img src='https://uploads-ssl.webflow.com/5b7529a016d8f2576dc56a91/5f1a3ab94962de0eb3c51d4a_logotype-01.svg' alt='assemblr logo'></img>
        <h1>CHALLENGE.</h1>
      </div>
      <GoogleButton sign_in={signInWithGoogle}/>
    </div>
  )
}

export default Login
