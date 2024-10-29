import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut nesciunt eaque soluta! Fugit, enim voluptates! Ab nam id saepe! Sed velit fugit ipsum facere omnis eum quo ea maxime?",
      img: "images/pic-1.png",
      name: "John Doe",
      rating: 5
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis unde inventore fugit atque quia, eum adipisci neque natus explicabo deserunt perferendis soluta aut dolorem placeat accusamus quas quidem odit?",
      img: "images/pic-2.png",
      name: "John Doe",
      rating: 5
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maiores natus, explicabo tempore voluptatum, nihil minus vitae dolores, expedita velit dicta dolorem temporibus voluptatem. Ullam impedit voluptate quo ad fugiat?",
      img: "images/pic-3.png",
      name: "John Doe",
      rating: 5
    }
  ];

  return (
    <section className="reviews">
      <h1 className="heading">clients reviews</h1>
      <div className="reviews-slider swiper">
        <div className="swiper-wrapper">
          {reviews.map((review, index) => (
            <div key={index} className="swiper-slide slide">
              <p>{review.text}</p>
              <div className="user">
                <img src={review.img} alt={`Review by ${review.name}`} />
                <div className="info">
                  <h3>{review.name}</h3>
                  <div className="stars">
                    {Array(review.rating).fill().map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
