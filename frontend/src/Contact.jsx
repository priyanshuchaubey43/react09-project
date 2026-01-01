import React from "react";
import Navbar from "./Navbar";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you! Whether you have feedback, questions, or
            need support — our team is here to help.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send us a message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea
                placeholder="Write your message here..."
                rows="6"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>📍 <strong>Address:</strong> Netflix, New-Delhi India</p>
            <p>📞 <strong>Phone:</strong> +91 98765 *****</p>
            <p>✉️ <strong>Email:</strong> support@netflixclone.com</p>
            <h3>Follow us</h3>
          </div>
        </div>

        {/* Footer */}
        <footer className="contact-footer">
          <p>© 2025 Netflix Clone | Designed with ❤️ for learning and creativity</p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
