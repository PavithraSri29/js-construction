import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faInfoCircle,
  faSearch,
  faUser,
  faTimes,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Header() {
  // const [isSearchActive, setSearchActive] = useState(false);
  // const [isLoginActive, setLoginActive] = useState(false);
  const [isContactInfoActive, setContactInfoActive] = useState(false);

  // const toggleSearch = () => {
  //   setSearchActive(!isSearchActive);
  //   setLoginActive(false); // Close login form if open
  // };

  // const toggleLogin = () => {
  //   setLoginActive(!isLoginActive);
  //   setSearchActive(false); // Close search form if open
  // };

  const toggleContactInfo = () => {
    setContactInfoActive(!isContactInfoActive);
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
         Constructions<span> pvt ltd</span>
        </a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          {/* <a href="#pricing">pricing</a> */}
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </nav>

        <div className="icons">
          <FontAwesomeIcon icon={faBars} id="menu-btn" className="icon" />
          <FontAwesomeIcon icon={faInfoCircle} id="info-btn" className="icon" onClick={toggleContactInfo} style={{ fontSize: '3rem' }}/>
          {/* <FontAwesomeIcon icon={faSearch} id="search-btn" className="icon" onClick={toggleSearch} />
          <FontAwesomeIcon icon={faUser} id="login-btn" className="icon" onClick={toggleLogin} /> */}
        </div>

        {/* <form action="" className={`search-form ${isSearchActive ? 'active' : ''}`}>
          <input type="search" placeholder="Search here..." id="search-box" />
          <label htmlFor="search-box" className="icon">
            <FontAwesomeIcon icon={faSearch} />
          </label>
        </form>

        <form action="" className={`login-form ${isLoginActive ? 'active' : ''}`}>
          <h3>login form</h3>
          <input type="email" placeholder="Enter your email" className="box" />
          <input type="password" placeholder="Enter your password" className="box" />
          <div className="flex">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">remember me</label>
            <a href="#">forgot password?</a>
          </div>
          <input type="submit" value="login now" className="btn" />
          <p>
            don't have an account <a href="#">create one!</a>
          </p>
        </form> */}
      </header>

      <div className={`contact-info ${isContactInfoActive ? 'active' : ''}`}>
        <div id="close-contact-info" onClick={toggleContactInfo}>
          <FontAwesomeIcon icon={faTimes} className="icon" />
        </div>

        <div className="info">
          <FontAwesomeIcon icon={faPhone} className="icon" style={{ fontSize: '3rem' }}/>
          <h3>phone number</h3>
          <p>+91 9876543210</p>
          <p>+91 9874561230</p>
        </div>

        <div className="info">
          <FontAwesomeIcon icon={faEnvelope} className="icon" style={{ fontSize: '3rem' }}/>
          <h3>email address</h3>
          <p>Constructions@gmail.com</p>
          {/* <p>user2@email.com</p> */}
        </div>

        <div className="info">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" style={{ fontSize: '3rem' }}/>
          <h3>office address</h3>
          <p>No: 36, Kamaraj Street, Anna Nagar, Chennai</p>
        </div>

        <div className="share">
          <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="icon"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="icon"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </>
  );
}

export default Header;
