import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading">about us</h1>

      <div className="row">
        <div className="video">
          <video src="images/about-vid.mp4" loop muted autoPlay></video>
        </div>

        <div className="content">
          <h3>We will provide you the best work which you dreamt for!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus in nemo minima voluptatem id,
            nobis sunt asperiores itaque blanditiis.
          </p>
          <a href="#services" className="btn">read more</a>
        </div>
      </div>

      <div className="box-container">
        <div className="box">
          <h3>30+</h3>
          <p>years of experience</p>
        </div>

        <div className="box">
          <h3>156+</h3>
          <p>projects completed</p>
        </div>

        <div className="box">
          <h3>220+</h3>
          <p>engineers</p>
        </div>

        <div className="box">
          <h3>25+</h3>
          <p>award winning</p>
        </div>
      </div>
    </section>
  );
}

export default About;
