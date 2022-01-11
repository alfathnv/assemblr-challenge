import React from 'react';
import "./index.scss";

function GoogleButton({sign_in}) {
  return (
    <div onClick={sign_in} className="google-btn">
      <div className="google-icon-wrapper">
        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt='google'/>
      </div>
      <p className="btn-text"><b>Sign in with google</b></p>
    </div>
  )
}

export default GoogleButton
