import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebase-config";

const signInWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    navigate('/home');
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
}

const signOutGoogle = (navigate) => {
  signOut(auth).then(() => {
    navigate('/');
    
  }).catch((error) => {
  });
}

export {signInWithGoogle, signOutGoogle}
