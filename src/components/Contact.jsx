import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">contact us</h1>

      <div className="row">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.583375638294!2d80.19728679531214!3d13.089941945780323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264078822719b%3A0xbda01077b89581e2!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1738926027630!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>

        <form action="">
          <h3>get in touch</h3>
          <input type="text" placeholder="Name" className="box" required />
          <input type="email" placeholder="Email" className="box" required />
          <input type="tel" placeholder="Phone" className="box" required />
          <textarea placeholder="Message" className="box" cols="30" rows="10" required></textarea>
          <input type="submit" value="send message" className="btn" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
