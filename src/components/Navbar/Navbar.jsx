import React, { useEffect, useRef } from 'react'
import "./navbar.css"
import logo from '../../assets/netflix-logo.png'
import search_icon from '../../assets/search_icon.png'
import bel_icon from '../../assets/bel_icon.png'
import profile_img from '../../assets/profile_img.png'
import dropdown_icon from '../../assets/dropdown_icon.jpeg'
import { logout } from '../../firebase'
const Navbar = () => {

  const navRef= useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >80){
        navRef.current.classList.add("nav-dark")
      }
      else{
        navRef.current.classList.remove("nav-dark")
      }
    })
  },[])

  return (

    <div ref={navRef} className='navbar'>
     <div className="navbar-left">
      <img src={logo} alt="" className='netflix_logo'/>
      <ul>
        <li>Home</li>
        <li>Tv Show</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
     </div>

     <div className="navbar-right">
        <img src={search_icon} alt="" className='icons'/>
        {/* <p>Children</p> */}
        <img src={bel_icon} alt="" className='icons'/>
        <div className='navbar-profile'>
        <img src={profile_img}  alt="" className='profile' />
        <img src={dropdown_icon} alt="" className='dropdown' />
        <h3 onClick={()=>{logout()}}>Sign out</h3>
        </div>
        <div className="dropdown_menu">
            
        </div>
      </div>
     </div>
   
  )
}

export default Navbar