import React from 'react';

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <h1 className="heading">our pricing</h1>
      <div className="box-container">
        <div className="box">
          <h3>basic plan</h3>
          <div className="price"><span>$</span>250<span>/mo</span></div>
          <div className="list">
            <p>Interior design</p>
            <p>Refurbishment</p>
          </div>
          <a href="#" className="btn">choose plan</a>
        </div>
        {/* Add other pricing boxes here */}
      </div>
    </section>
  );
}

export default Pricing;
