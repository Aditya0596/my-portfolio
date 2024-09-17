import React from 'react';
import './contact.css'; // Rename to contact.css for clarity

const Contact = () => (
  <section id="contact" className="container my-5">
    <h2 className="text-center mb-4">Contact Me</h2>
    <form className="contact-form">
      <div className="form-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Your Name" 
          required 
        />
      </div>
      <div className="form-group mb-3">
        <input 
          type="email" 
          className="form-control" 
          placeholder="Your Email" 
          required 
        />
      </div>
      <div className="form-group mb-3">
        <textarea 
          className="form-control" 
          placeholder="Your Message" 
          rows="5" 
          required 
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="btn btn-primary w-100"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
