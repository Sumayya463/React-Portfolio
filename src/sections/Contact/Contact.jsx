import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h1 className="section-title">Get In Touch</h1>
      <form action="https://formspree.io/f/xbjnrvqv" method="POST" className="contact-form glass-card">
        <div>
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="name" id="name" placeholder="Your Name" required />
        </div>

        <div>
          <label htmlFor="email" hidden>Email</label>
          <input type="email" name="email" id="email" placeholder="Your Email" required />
        </div>

        <div>
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit" className="btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;