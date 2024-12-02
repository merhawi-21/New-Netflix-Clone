import React, { useEffect, useState } from 'react'
import "./player.css"
import back_arow_icon from '../../assets/back_arow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  
  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTk3MDMzMGNiNGRjZjExN2MwODk1ZjNiODYwYjk0YSIsIm5iZiI6MTczMTQxMDc4OC4zODIwNTcyLCJzdWIiOiI2NzMzMzFhNjE2MjM4NWI2MjM0ODU2NDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GEcA4qF14JLHZrt0Mf-OXrTPWwsy3s4_0f26QCoB7Wg'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
  },[])
  
  
  return (
    <div className='player'>
      <img src={back_arow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`http://www.youtube.com/embed/${apiData.key}`}title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>   
  )
}

export default Player