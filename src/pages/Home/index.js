import React, {useState, useEffect} from 'react';
import { ref, get, child, query, orderByChild, limitToLast } from "firebase/database";
import { signOutGoogle } from '../../google-auth';
import { useNavigate } from 'react-router-dom';
import { db } from "../../firebase-config";
import './index.scss'

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState(() => []);

  useEffect(() => {
    const dbref = query(ref(db, "movieList"), orderByChild("date"))

    get(dbref)
    .then((snapshot) => {
      const movies = [];
      snapshot.forEach(movie => {
        movies.push(movie.val());
      })
      setData(movies);
    })
  }, [data])

  return (
    <div className='home-wrapper'>
      {/* <button onClick={() => signOutGoogle(navigate)}></button> */}
      <h1 className='home-title'>Movie List</h1>
      {data.map((movie) =>
        <div className='movie-card' key={movie.toString()}>
          <h2 className='title'>{movie.movie_title}</h2>
          <p className='date'>( {movie.date} )</p>
          <img className='image' src={movie.movie_image} alt={data[0].movie_title} />
          <p className='desc'>{movie.movie_description}</p>
        </div>
      )}
    </div>
  )
}

export default Home
