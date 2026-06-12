import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCarousel = ({ items }) => {
  const displayItems = items ? [...items, ...items] : [];

  return (
    <div className="testimonial-track-container">
      <div className="testimonial-track testimonial-track--marquee">
        {displayItems.map((item, i) => (
          <motion.div
            key={i}
            className="testimonial-card glass-strong"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-quote">{item.quote}</p>
            <div className="testimonial-author">
              <div>
                <div className="testimonial-name">{item.name}</div>
                <div className="testimonial-location">{item.location}</div>
              </div>
              <span className="testimonial-type">{item.type}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
