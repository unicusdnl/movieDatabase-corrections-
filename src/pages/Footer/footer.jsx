import React from "react"
import "./footer.css"
import app from "../../images/apple-app-store--v3.png"
import gplay from "../../images/google-play.png"
import {RiFacebookCircleFill} from "react-icons/ri"
import {AiOutlineTwitter, AiFillInstagram} from "react-icons/ai"


const Footer = () => {
  return (
    <>
      <footer>
    <div className="footer_container">
      <div className='footer_logo'>
      
      </div>
    <ul className='permalinks'>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">TV Listings</a></li>
      <li><a href="#services">Downlaods</a></li>
      <li><a href="#portfolio">Uploads</a></li>
      <li><a href="#contacts">Contact</a></li>
    </ul>

    <div className='footer_socials'>
      <a href="https://www.instagram.com/unicusdesigns_/"><AiFillInstagram/></a>
      <a href="https://www.behance.net/UNICUSDESIGNS"><AiOutlineTwitter/></a>
      <a href="https://www.linkedin.com/in/ebenezer-omani-clottey/"><RiFacebookCircleFill/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy;2022 Movie Database. All rights reserved.</small>
    </div>
    </div>
    </footer>
    </>
  )
}

export default Footer