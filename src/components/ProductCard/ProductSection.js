import React, { useState, useEffect } from 'react'
import LeftIcon from '../../assets/left-arrow.png'
import './style.css'
import ProductCard from './ProductCard'

const ProductSection = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async (url) => {
    try {
      const response = await fetch(url)
      const responseData = await response.json()
      setProducts(responseData)
      console.log(responseData)
    } catch (error) {
      console.error('Failed to fetch products: ', error)
    }
  }

  useEffect(() => {
    fetchProducts('https://fakestoreapi.com/products')
  }, [])

  return (
    <>
      <main>
        <div className="item-filter">
          <h3>3425 Items</h3>
          <div className="filter-bar">
            <img src={LeftIcon} alt="left-arrow" />
            <p>HIDE FILTER</p>
          </div>
          <select>
            <option value="recommended" defaultValue={'RECOMMENDED'}>
              RECOMMENDED
            </option>
            <option value="newest first">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="price">PRICE : HIGH TO LOW</option>
            <option value="price">PRICE : LOW TO HIGH</option>
          </select>
        </div>
        <div className="product-filter-section">
          <div className="filter-section">
            <div className="custom-filter">
              <input type="checkbox" />
              <h3>CUSTOMIZBLE</h3>
            </div>
            <hr />
            <div>
              <select>
                <input type="checkbox" />
                <p>Men</p>

                <input type="checkbox" />
                <p>Women</p>

                <input type="checkbox" />
                <p>Baby & Kids</p>
              </select>
            </div>
          </div>

          <div className="product-section">
            {products.map((item) => (
              <ProductCard key={item.id} productDetails={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductSection
