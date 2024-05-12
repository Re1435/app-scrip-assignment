import React from 'react'
import FavIcon from '../../assets/favourite-icon.png'
import './style.css'

const ProductCard = ({ productDetails }) => {
  const { image, title, price } = productDetails
  return (
    <>
      <div className="product-card">
        <img src={image} alt={`${title}`} />
        <div className="product-desc">
          <div>
            <h3>{title}</h3>
          </div>
          <div className="price-desc">
            <p>₹ {price}</p>
            <img src={FavIcon} alt="fav-icon" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
