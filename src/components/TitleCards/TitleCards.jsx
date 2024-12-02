//import React, {useEffect, useRef} from 'react';
import React, { useEffect, useState } from 'react'
import "./titleCards.css"
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {

const [apiData,setApiData] = useState([]);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTk3MDMzMGNiNGRjZjExN2MwODk1ZjNiODYwYjk0YSIsIm5iZiI6MTczMTQwOTI0MS4zMjA4ODE2LCJzdWIiOiI2NzMzMzFhNjE2MjM4NWI2MjM0ODU2NDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ek8Bv3JvVDaBEM_qP1APy1NJ5F1dcaA-xJx6alMY6Ew'
  }
};

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  },[])



  return (
    <div className='title-Cards'>
      <h2>{title?title: "Popular on Netflix"}</h2>
      <div className="card_list" >
        {apiData.map((card, index)=>{
           return <Link to={`/player/${card.id}`} className="card" key={index} >
            <img src={`https://image.tmdb.org/t/p/w500` +card.poster_path} alt="" />
            <p>{card.original_title}</p>
           </Link>
        })} 
      </div>
    </div>
  )
}

export default TitleCards