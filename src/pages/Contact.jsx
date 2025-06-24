import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import "./styles/contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_e71fpif',
      'template_g74yadi',
      form.current,
      'AEU0rj0bZEXWiCcKn'
    )
    .then(() => {
      toast.success("✅ Message sent successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "dark"
      });
      e.target.reset();
    }, () => {
      toast.error("❌ Failed to send message. Try again.", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "dark"
      });
    });
  };

  return (
    <div className="contact-page">
      <h1 className="page-title">Get In Touch</h1>
      <p className="page-desc">Have a project or just want to say hi? Drop me a message.</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
