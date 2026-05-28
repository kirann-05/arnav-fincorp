import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TestimonialCarousel = ({ items }) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animId;
    let scrollPos = container.scrollLeft;

    const step = () => {
      if (!isPaused && container) {
        scrollPos += 0.8; // Increased speed slightly
        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
      }
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  // Clone items for seamless loop
  const displayItems = items ? [...items, ...items] : [];

  return (
    <div
      className="testimonial-track-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="testimonial-track"
        ref={scrollRef}
      >
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
              <div className="testimonial-avatar">
                <img 
                  src={`https://i.pravatar.cc/150?u=${item.name}`} 
                  alt={item.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
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
