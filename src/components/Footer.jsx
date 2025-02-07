import React from 'react';

function Footer() {
  return (
    <section className="footer">
      <div className="links">
        <a className="btn" href="#home">home</a>
        <a className="btn" href="#about">about</a>
        <a className="btn" href="#services">services</a>
        <a className="btn" href="#projects">projects</a>
        {/* <a className="btn" href="#pricing">pricing</a> */}
        <a className="btn" href="#contact">contact</a>
        <a className="btn" href="#blogs">blogs</a>
      </div>
      <div className="credit">&copy; <span>2023 construction.com</span> | all rights reserved</div>
    </section>
  );
}

export default Footer;
