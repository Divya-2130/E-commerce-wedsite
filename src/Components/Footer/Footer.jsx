import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'       
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>SHOPPING</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>  
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <a href=""><i className="fab fa-facebook-f"></i></a>
            </div>
            <div className="footer-icons-container">
                <a href=""><i className="fab fa-twitter"></i></a>
            </div>
            <div className="footer-icons-container">
                <a href=""><i className="fab fa-instagram"></i></a> 
            </div>       
            <div className="footer-icons-container">
                <a href=""><i class="fa-brands fa-whatsapp"></i></a> 
            </div> 
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer;
