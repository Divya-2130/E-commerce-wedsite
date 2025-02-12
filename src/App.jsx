import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_men.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/> {/**shop is the home page so it is the empty path */}
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="mens"/>}/>{/**we where added the properites as the category */}
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="womens"/>}/>
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kids"/>}/>
          <Route path="Product" element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
          </Route> 
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/LoginSignup'element={<LoginSignup/>}/>
        </Routes> 
        <Footer/>     
      </BrowserRouter>
    </div>
  );
}
export default App;

