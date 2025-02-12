import React from 'react'
import './Breadcrum.css'
const Breadcrum = (props) => {
    const {product} =props;
  return (
    <div className='breadcrum'>
      HOME <p>➤</p>SHOP <p>➤</p>{product.category} <p>➤</p>{product.name}
    </div>
  )
}

export default Breadcrum
