import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.png'
import hero_title from '../../assets/hero_title.png'
import play_btn from '../../assets/play_btn.png'
import info_icon from '../../assets/info_icon.png'
import "./home.css"
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>

      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
       <div className="hero-caption">
         {/* <img src={hero_title} alt="" className='caption-img' /> */}
         <p>Movies and Shows You Have To Watch Before They Leave Netflix!</p>
         <div className="hero-btns">
          <button className='btn'> <img src={play_btn} alt="" /> Play</button>
          <button className='btn dark-btn'> <img src={info_icon} alt="" /> My List</button>
         </div>
          <TitleCards/>   
      </div> 
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />  
      <TitleCards title={"Only on Netflix"} category={"popular"}/>  
      <TitleCards title={"Upcoming"} category={"upcoming"}/>  
      <TitleCards title={"Top pics for you"} category={"now_playing"}/>  
      </div>
      <Footer/>
      </div> 
  )
}

export default Home