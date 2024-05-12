import React from 'react'
import InstaIcon from '../../assets/instagram.png'
import LinkedInIcon from '../../assets/linkedin.png'
import gpayIcon from '../../assets/gpay-icon.png'
import cardIcon from '../../assets/card-icon.png'
import paypalIcon from '../../assets/paypal-icon.png'
import amexIcon from '../../assets/amex-icon.png'
import appleIcon from '../../assets/apple-pay.png'
import './style.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-sec">
          <div className="footer-mail-form">
            <h5>BE THE FIRST TO KNOW</h5>
            <p>Sign up for updates from mettã muse.</p>
            <form>
              <input type="email" placeholder="Enter your e-mail..." />
              <input type="button" value="SUBSCRIBE" />
            </form>
          </div>
          <div className="contact-section">
            <h2>CONTACT US</h2>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <br />
            <h2>CURRENCY</h2>
            <p>USD</p>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        <hr />
        <div className="footer2-sec">
          <div className="aboutus-section">
            <h1>mettā muse</h1>
            <p>About us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
          <div>
            <h2>Quick Links</h2>
            <p>Orders & Shipping</p>
            <p>Join/Login as a seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <h2>FOLLOW US</h2>
            <div className="social-icons">
              <img src={InstaIcon} alt="insta-icon" />
              <img src={LinkedInIcon} alt="linkedin-icon" />
            </div>

            <h2>mettā muse Accepts</h2>
            <div className="payment-icons">
              <div>
                <img src={gpayIcon} alt="gpay-icon" />
              </div>
              <div>
                <img src={cardIcon} alt="card-icon" />
              </div>
              <div>
                <img src={paypalIcon} alt="paypal-icon" />
              </div>
              <div>
                <img src={amexIcon} alt="amex-icon" />
              </div>
              <div>
                <img src={appleIcon} alt="apple-icon" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
