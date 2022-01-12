import React from 'react'
import './index.scss'

function Detail() {
  return (
    <div className='detail-wrapper'>
      <div className='title-image'>
        <img src='https://uploads-ssl.webflow.com/5b7529a016d8f2576dc56a91/5f1a3ab94962de0eb3c51d4a_logotype-01.svg' alt='assemblr logo'></img>
        <h1>CHALLENGE.</h1>
      </div>
      <div className='desc'>
        <h1>Front End Developer Challenge</h1>
        <h3>Buat project React js sederhana yang didalamnya ada detail sebagai berikut:</h3>
        <p className='number'>1. Ada login system menggunakan Firebase Authentication : Sign in with google</p>
        <p className='number'>2. Ada page listing movie/makanan/apapun bebas pake dummy data kalo bisa ada
            minimum 500 data. Digenerate random aja dan disave di firebase realtime database.
            listnya harus ada imagenya</p>
        <p className='number'>3. Terdapat menu detailnya</p>
        <p className='number'>4. Terdapat pagination ke bawah dan di sorting by date</p>
        <h3>Referensi:</h3>
        <p className='ref'>Firebase Auth : <a href='https://firebase.google.com/docs/auth'>https://firebase.google.com/docs/auth</a></p>
        <p className='ref'>Firebase Realtime Database : <a href='https://firebase.google.com/docs/database'>https://firebase.google.com/docs/database</a></p>
        <p className='ref'>Firebase Hosting : <a href='https://firebase.google.com/docs/hosting'>https://firebase.google.com/docs/hosting</a></p>
      </div>
    </div>
  )
}

export default Detail
