import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">contact us</h1>

      <div className="row">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8059926327383!2d80.20876217484394!3d13.111473587216851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526442f4ee7ccf%3A0x1bf1bc395359bb4b!2sJayaswathy%20Constructions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1730179870162!5m2!1sen!2sin"
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
