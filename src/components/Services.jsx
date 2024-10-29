import React from 'react';

const services = [
  {
    id: 1,
    image: 'images/service-1.png',
    title: 'building construction',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, exercitationem.',
  },
  {
    id: 2,
    image: 'images/service-2.png',
    title: 'house renovation',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, temporibus!',
  },
  {
    id: 3,
    image: 'images/service-3.png',
    title: 'architecture design',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, delectus!',
  },
  {
    id: 4,
    image: 'images/service-4.png',
    title: 'material supply',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quasi.',
  },
  {
    id: 5,
    image: 'images/service-5.png',
    title: 'construction consultant',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, aliquam.',
  },
  {
    id: 6,
    image: 'images/service-6.png',
    title: 'interior design',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, totam!',
  },
  {
    id: 7,
    image: 'images/service-7.png',
    title: 'building maintenance',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ipsa.',
  },
  {
    id: 8,
    image: 'images/service-8.png',
    title: 'building renovation',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ex.',
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <h1 className="heading">our services</h1>
      <div className="box-container">
        {services.map((service) => (
          <div className="box" key={service.id}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
