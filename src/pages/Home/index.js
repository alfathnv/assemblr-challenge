import React, {useState, useEffect} from 'react';
import { ref, get, query, orderByChild } from "firebase/database";
import { db } from "../../firebase-config";
import ReactPaginate from 'react-paginate';
import DetailPopup from '../../components/DetailPopup'
import './index.scss'

function Home() {
  const [data, setData] = useState(() => []);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPopup, setCurrentPopup] = useState({})
  const [randomData, setRandomData] = useState({})

  useEffect(() => {
    const dbref = query(ref(db, "movieList"), orderByChild("date"));
    const id = Math.floor((Math.random() * 500) + 1);

    get(dbref)
    .then((snapshot) => {
      const movies = [];
      snapshot.forEach(movie => {
        movies.push(movie.val());
      })
      setData(movies);
      setRandomData(movies[id])
    })
  }, [])
  
  const [pageNumber, setPageNumber] = useState(0);

  const dataPerPage = 20;
  const pagesVisited = pageNumber * dataPerPage;

  const handleClick = (movie) => {
    setIsOpen(true)
    setCurrentPopup(movie)
  }

  const displayData = data
  .slice(pagesVisited, pagesVisited + dataPerPage)
  .map((movie) =>
      <div key={movie._id} className='card'>
        <img className='image' onClick={() => handleClick(movie)}  src={movie.url} alt={data[0].movie_title} />
      </div>  
    )

  const pageCount = Math.ceil(data.length/dataPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <div className='home-wrapper'>
      <div className='banner-wrapper'>
        <img src={randomData.url} alt={randomData.title}></img>
        <div className='content'>
          <h1 className='title'>{randomData.title}</h1>
          <p className='desc'>{randomData.description}</p>
        </div>
      </div>
      <h1 className='home-title'>Movie List</h1>
      <div className='content'>
        {displayData}
      </div>
      <div><ReactPaginate 
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"previous-btn"}
        nextLinkClassName={"next-btn"}
        disabledClassName={"pagination-disable"}
        activeClassName={"pagination-active"}
      /></div>
      <div>
        <DetailPopup open={isOpen} onClose={() => setIsOpen(false)} url={currentPopup.url} title={currentPopup.title} desc={currentPopup.description} />
      </div>
    </div>
  )
}

export default Home
