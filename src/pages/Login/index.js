import React from 'react'
import GoogleButton from '../../components/GoogleButton';
import { signInWithGoogle } from '../../google-auth';
import { useNavigate } from 'react-router-dom';
import "./index.scss";

function Login() {
  const navigate = useNavigate()

  return (
    <div className='login-wrapper'>
      <div className='title-image'>
        <img src='https://uploads-ssl.webflow.com/5b7529a016d8f2576dc56a91/5f1a3ab94962de0eb3c51d4a_logotype-01.svg' alt='assemblr logo'></img>
        <h1>CHALLENGE.</h1>
      </div>
      <GoogleButton sign_in={() => signInWithGoogle(navigate)}/>
    </div>
  )
}

export default Login
