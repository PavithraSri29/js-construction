import React from 'react';

const ClientLogo = () => {
  const logos = [
    "/images/client-logo-1.png",
    "/images/client-logo-2.png",
    "/images/client-logo-3.png",
    "/images/client-logo-4.png",
    "/images/client-logo-5.png",
    "/images/client-logo-6.png"
  ];

  return (
    <section className="logo-container">
      <div className="swiper logo-slider">
        <div className="swiper-wrapper">
          {logos.map((logo, index) => (
            <div key={index} className="swiper-slide slide">
              <img src={logo} alt={`Client logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogo;
