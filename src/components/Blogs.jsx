import React from 'react';
const blogs = [
  {
    id: 1,
    image: '/images/blog-1.jpg',
    title: 'Blog title goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, modi!',
  },
  {
    id: 2,
    image: '/images/blog-2.jpg',
    title: 'Blog title goes here',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor.',
  },
  {
    id: 3,
    image: '/images/blog-3.jpg',
    title: 'Blog title goes here',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptatibus.',
  },
];

function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">Our Blogs</h1>

      <div className="swiper blogs-slider">
        <div className="swiper-wrapper">
          {blogs.map((blog) => (
            <div key={blog.id} className="swiper-slide slide">
              <div className="image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <a href="#" className="btn">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
