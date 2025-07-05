import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.section
    id="contact"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h2>Contact</h2>
    <p>Feel free to connect with me — I'd love to hear from you!</p>
    <div className="contact-info">
      <p><strong>Email:</strong> <a href="mailto:weien.li.1201@gmail.com">weien.li.1201@gmail.com</a></p>
      <p><strong>Phone:</strong> <a href="tel:+34600426748">+34600426748</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/weienli1201/" target="_blank" rel="noopener noreferrer">linkedin.com/in/weienli1201/</a></p>
    </div>
  </motion.section>
);

export default Contact;
