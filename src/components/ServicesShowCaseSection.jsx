import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Hori = () => {
  const targetRef = useRef(null);

  // Sample data for services
  const services = [
    {
      img: "/images/blog-1.jpg",
      title: "Drone Mapping",
      description: "High-precision drone mapping services for agriculture, construction, and surveying.",
      important: "Includes post-processing and 3D modeling.",
    },
    {
      img:"/images/blog-3.jpg",
      title: "Aerial Photography",
      description: "Capture stunning aerial photos and videos for real estate, events, and advertising.",
      important: "Flexible packages available.",
    },
    {
      img: "/images/blog-4.jpg",
      title: "Agricultural Spraying",
      description: "Efficient crop spraying services for large farmlands using autonomous drones.",
      important: "Eco-friendly and precise.",
    },
    {
      img: "/images/blog-2.jpg",
      title: "Inspection Services",
      description: "Remote inspection services for infrastructure, power lines, and wind turbines.",
      important: "Safe and cost-effective.",
    },
  ];

  // Framer Motion's scroll and transform hooks
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Direct horizontal scroll
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-90%"]);

  return (
    <section className="services-section" ref={targetRef}>
      <div className="container">
        <h1 className="section-title">Our Services</h1>
      </div>

      <div className="content-container">
        <div className="sticky-container">
          <motion.div className="scroll-content" style={{ x }}>
            {services && services.length > 0 ? (
              services.map((item, idx) => (
                <div key={idx} className="service-item">
                  <div className="image-container">
                    <img src={item.img} alt={item.title} className="service-image" />
                  </div>
                  <div className="text-container">
                    <h2 className="service-title">{item.title}</h2>
                    <p className="service-description">
                      {item.description}
                      {item.important && <b>{item.important}</b>}
                    </p>
                    <button className="explore-button">Explore more</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No services available</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hori;
