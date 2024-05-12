import React from 'react'
import MenuIcon from '../../assets/menu-icon.png'
import FlowerIcon from '../../assets/flower-icon.png'
import SearchIcon from '../../assets/search-icon.png'
import FavIcon from '../../assets/favourite-icon.png'
import ShopIcon from '../../assets/shopping-bag-icon.png'
import ProfileIcon from '../../assets/profile-icon.png'
import './style.css'

const Navbar = () => {
  return (
    <>
      <div className="top-nav">
        <div className="icon-text-container">
          <img src={MenuIcon} alt="menu-icon" className="top-icon" />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="icon-text-container">
          <img src={MenuIcon} alt="menu-icon" className="top-icon" />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="icon-text-container">
          <img src={MenuIcon} alt="menu-icon" className="top-icon" />
          <p>Lorem ipsum dolor</p>
        </div>
      </div>
      <div className="main-bar">
        <img src={FlowerIcon} alt="flower-icon" className="logo-img" />
        <h1>LOGO</h1>
        <div className="nav-icons">
          <img src={SearchIcon} alt="search-icon" />
          <img src={FavIcon} alt="fav-icon" />
          <img src={ShopIcon} alt="shop-icon" />
          <img src={ProfileIcon} alt="profile-icon" />
        </div>
      </div>
      <div className="bottom-tabs-bar">
        <h3>SHOP</h3>
        <h3>SKILLS</h3>
        <h3>STORIES</h3>
        <h3>ABOUT</h3>
        <h3>CONTACT US</h3>
      </div>
      <hr />
    </>
  )
}

export default Navbar
