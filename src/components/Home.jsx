import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    image: 'images/home-slide-1.jpg',
    title: 'we provide best service',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum maxime culpa dicta natus, consectetur consequuntur?',
  },
  {
    image: 'images/home-slide-2.jpg',
    title: 'making dream come to life',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, odio voluptatem accusantium non molestias adipisci!',
  },
  {
    image: 'images/home-slide-3.jpg',
    title: 'from concept to creation',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur aperiam, doloribus eius adipisci ex illum.',
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const intervalRef = useRef(null);

  // Auto-slide start function
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000); // 7 seconds interval
  };

  // Auto-slide stop function
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Manual navigation functions
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Wrap manual change with auto-slide reset
  const handleManualChange = (changeFunc) => {
    stopAutoSlide();
    changeFunc();
    startAutoSlide();
  };

  // Start auto-slide on component load
  useEffect(() => {
    if (hasLoaded) {
      startAutoSlide();
      setCurrentIndex(0);
    }
    return () => stopAutoSlide(); // Cleanup interval on unmount
  }, [hasLoaded]);

  // Ensure auto-slide starts only after component load
  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <section className="home" id="home" style={{ overflow: 'hidden', position: 'relative' }}>
      <div className="swiper home-slider">
        <div
          className="swiper-wrapper"
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex *33.3}%)`,
            width: `${slides.length * 100}%`
          }}
        >
          {slides.map((slide, index) => (
            <section
              key={index}
              className="swiper-slide slide"
              style={{
                background: `url(${slide.image}) `,
                width: `${slide.index*100}%`,
                flexShrink: 1,
                color: '#fff',
              }}
            >
              <div className="content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <a href="#about" className="btn">get started</a>
              </div>
            </section>
          ))}
        </div>

        {/* Navigation buttons */}
        <div
          className="swiper-button-prev"
          onClick={() => handleManualChange(handlePrev)}
          style={{
            position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',color: '#fff', padding: '10px', cursor: 'pointer', borderRadius: '50%'
          }}
        >
        </div>

        <div
          className="swiper-button-next"
          onClick={() => handleManualChange(handleNext)}
          style={{
            position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'red', padding: '10px', cursor: 'pointer', borderRadius: '50%'
          }}
        >
        </div>
      </div>
    </section>
  );
};

export default Home;
