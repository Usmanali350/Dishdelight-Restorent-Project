import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Styling for the page

export const About = () => {
  return (
    <div className="about-us-container">
      {/* Header Section */}
      <motion.div
        className="about-us-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1>About Us</h1>
        <p>Our mission is to bring you the finest dining experience.</p>
      </motion.div>

      {/* Our Story Section */}
      <motion.div
        className="about-us-story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      >
        <h2>Our Story</h2>
        <p>
          DishDelight was born out of a passion for creating food that brings people together. We strive to create not only great food but also lasting memories with every dish we serve. Our team of chefs handpicks every ingredient, ensuring quality and freshness in every bite.
        </p>
      </motion.div>

      {/* Our Mission Section */}
      <motion.div
        className="about-us-mission"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
      >
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to deliver exceptional food and a unique dining experience that leaves you craving more. Whether you're here for a quick bite or a full-course meal, our aim is to serve food that is both delicious and made with love.
        </p>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className="about-us-why"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
      >
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Fresh and quality ingredients sourced locally.</li>
          <li>Experienced chefs with a passion for cooking.</li>
          <li>Comprehensive menu that caters to every dietary need.</li>
          <li>Affordable prices without compromising on quality.</li>
        </ul>
      </motion.div>

      {/* Footer Section */}
      <div className="about-us-footer">
        <p>&copy; 2024 DishDelight. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
