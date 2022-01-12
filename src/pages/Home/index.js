import React, {useState, useEffect} from 'react';
import { ref, get, query, orderByChild } from "firebase/database";
import { db } from "../../firebase-config";
import ReactPaginate from 'react-paginate';
import './index.scss'

function Home() {
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
  
  const [pageNumber, setPageNumber] = useState(0);

  const dataPerPage = 10;
  const pagesVisited = pageNumber * dataPerPage;

  const displayData = data
  .slice(pagesVisited, pagesVisited + dataPerPage)
  .map((movie) =>
        <div className='movie-card' key={movie.toString()}>
          <h2 className='title'>{movie.movie_title}</h2>
          <p className='date'>( {movie.date} )</p>
          <img className='image' src={movie.movie_image} alt={data[0].movie_title} />
          <p className='desc'>{movie.movie_description}</p>
        </div>
      )

  const pageCount = Math.ceil(data.length/dataPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <div className='home-wrapper'>
      
      <h1 className='home-title'>Movie List</h1>
      {displayData}
      <ReactPaginate 
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"previous-btn"}
        nextLinkClassName={"next-btn"}
        disabledClassName={"pagination-disable"}
        activeClassName={"pagination-active"}
      />
    </div>
  )
}

export default Home
