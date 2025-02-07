import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function About() {
  const [counterActive, setCounterActive] = useState(false);

  const stats = [
    { num: 30, text: "years of experience" },
    { num: 156, text: "projects completed" },
    { num: 220, text: "engineers" },
    { num: 25, text: "award winning" },
  ];

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

      <ScrollTrigger onEnter={() => setCounterActive(true)} triggerOnce={true}>
        <div className="box-container">
          {stats.map((stat, index) => (
            <div className="box" key={index}>
              <h3>
                {counterActive ? <CountUp start={0} end={stat.num} duration={2} separator="," /> : "0"}+
              </h3>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </ScrollTrigger>
    </section>
  );
}

export default About;
