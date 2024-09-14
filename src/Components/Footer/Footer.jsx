import React from 'react';
import './Footer.css'
import logo from "../Assets/logo.png"
import facebook from "../Assets/footer-icons/facebook.png"
import instagram from "../Assets/footer-icons/instagram.png"
import twitter from "../Assets/footer-icons/twitter.png"
import g from "../Assets/footer-icons/g.png"
import youtube from "../Assets/footer-icons/youtube.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="e-mail">
                <img src={logo} alt=""/>
                <div className="text">
                    <h1>SIGN UP FOR OUR NEWSLETTER</h1>
                    <p>And get Exclusive Deals, Inventory Updates, and News</p>

                </div>

                <div className="social-networks">
                    <div className="input-email">
                        <input type="email" placeholder='Enter email'/>
                        <button>SUBSCRIBE</button>
                    </div>

                        <ul>
                            <li><img src={facebook} alt=""/></li>
                            <li><img src={instagram} alt=""/></li>
                            <li><img src={twitter} alt=""/></li>
                            <li><img src={g} alt=""/></li>
                            <li><img src={youtube} alt=""/></li>
                        </ul>

                </div>

            </div>

            <div className="copyright">
                <hr/>
                <p>Copyright @ 2024 - All Right Reserved.</p>
            </div>

        </div>
    )
}

export default Footer;