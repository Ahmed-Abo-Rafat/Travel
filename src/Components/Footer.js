import React from 'react'
import './Footer.css'
import '../App.css'
import {Link} from 'react-router-dom'
import {Button} from './Button'
function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-container'>

            <div>
                <h6 class="title footer-title">Categories</h6>

                <ul class="list footer-list">
                    <li class="list-item">
                        <Link to='/' className='list-link'>Travel</Link>
                    </li>
                    <li class="list-item">
                        <Link to="/" className="list-link">Food</Link>
                    </li>
                    <li class="list-item">
                        <Link to="/" className="list-link">Technology</Link>
                    </li>
                    <li class="list-item">
                        <Link to="/" className="list-link">Health</Link>
                    </li>
                    <li class="list-item">
                        <Link to="/" className="list-link">Nature</Link>
                    </li>
                    <li class="list-item">
                        <Link to="/" className="list-link">Fitnes</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h6 class="title footer-title">Contact Us</h6>

                <ul class="list footer-list">
                    <li class="list-item">
                        <Link to="/" className="list-link">Contact</Link>
                    </li>
                    <li class="list-item">
                        <Link to="/" className="list-link">Support</Link>
                    </li>
                    <li class="list-item">
                        <Link to="/" className="list-link">Destination</Link>
                    </li>
                    <li class="list-item">
                        <Link to="/" className="list-link">Sponsorship</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h6 class="title footer-title">Company</h6>

                <ul class="list footer-list">
                    <li class="list-item">
                        <Link to="/" className="list-link">Contact us</Link>
                    </li>
                    <li class="list-item">
                        <Link to="/" className="list-link">F.A.Q</Link>
                    </li>
                    <li class="list-item">
                        <Link to="/" className="list-link">Careers</Link>
                    </li>
                    <li class="list-item">
                        <Link to="/" className="list-link">Authors</Link>
                    </li>
                    <li class="list-item">
                        <Link to="/" className="list-link">Membership</Link>
                    </li>
                </ul>
            </div>

            <div className='company-data'>
                <Link to='/' className='company-data-logo'>
                    <h2>TRVL <i className='fab fa-typo3' /></h2>
                </Link>
                <p className='company-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure. Harum, animi dolores, nam, ad magni expedita.</p>
                <ul className='list social-media'>
                    <li className='list-item'>
                        <a href='https://www.linkedin.com/in/ahmed-rafat-a489301a2/' target='_blank' class="list-link">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li class="list-item">
                        <a href="https://github.com/Ahmed-Abo-Rafat" target="_blank" class="list-link">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li class="list-item">
                        <a href="https://codepen.io/Ahmed-Abo-Rafat" target="_blank" class="list-link">
                            <i class="fa-brands fa-codepen"></i>
                        </a>
                    </li>
                </ul>
                <span class="copyright-notice">&copy;2022 TRVL. All rights reserved.</span>
            </div>

        </div>
    </footer>
  )
}

export default Footer;
