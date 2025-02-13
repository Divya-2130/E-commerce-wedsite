import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart-icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import menu_drop from '../Assets/menudropdown.png'
const Navbar = () => {
  const [menu,setMenu]=useState("shop")
  const {getTotalCartItems} =useContext(ShopContext)
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className="navbar">
        <div className="nav-log">
            <img src={logo} alt="logo" />
            <p>DOWDY</p>
        </div>
        <img className='nav_dropdown' onClick={dropdown_toggle} src= {menu_drop} alt="" />
        <ul ref = {menuRef} className="nav-menu">
            <li  onClick={() =>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li  onClick={() =>{setMenu("mens")}}><Link style={{textDecoration:'none'}}  to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li  onClick={() =>{setMenu("womens")}}><Link style={{textDecoration:'none'}}  to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>  
            <li  onClick={() =>{setMenu("kids")}}><Link style={{textDecoration:'none'}}  to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/LoginSignup'> <button>Login</button></Link>
          <Link to='/Cart'><img src={cart} alt="cart-icon"/></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
