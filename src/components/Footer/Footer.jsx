import React from 'react'
import "./footer.css"
import youtube_icon from '../../assets/youtube_icon.png'
import twiter_icon from '../../assets/twiter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twiter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div><br />
      <div>
        <ul>
          <li>Audio description</li>
          <li>Help center</li>
          <li>Gift cards</li>
          <li>Media center</li>
          <li>Investor relations</li>
          <li>Jobs</li>
          <li>Terms and conditions</li>
          <li>Privacey</li>
          <li>Legal notices</li>
          <li>Cookie</li>
          <li>Priferences</li>
          <li>Contact us</li>
        </ul>
        <p className='copyright-text'>1997-2024 Netflix Inc.</p>
      </div>
    </div>
  )
}

export default Footer