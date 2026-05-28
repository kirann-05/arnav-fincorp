import React from 'react';
import { motion } from 'framer-motion';

// Curated portraits of Indian / Tier-2-3 Bharat residents — paired by index to testimonial items
// Mix of verified Unsplash Indian portraits + randomuser.me Indian-nationality portraits (stable, no rate limit)
const TESTIMONIAL_PORTRAITS = [
  'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=faces&q=80', // Aarti Sharma — woman in saree
  'https://images.unsplash.com/photo-1542178243-bc20204b769f?w=300&h=300&fit=crop&crop=faces&q=80',  // Rajesh Patel — Indian gentleman
  'https://randomuser.me/api/portraits/women/65.jpg', // Sunita Devi
  'https://randomuser.me/api/portraits/men/52.jpg',   // Vikram Singh
  'https://randomuser.me/api/portraits/women/79.jpg', // Meera Nair
];

const TestimonialCarousel = ({ items }) => {
  const itemsWithPortraits = items
    ? items.map((it, idx) => ({ ...it, portrait: TESTIMONIAL_PORTRAITS[idx % TESTIMONIAL_PORTRAITS.length] }))
    : [];
  // Clone for seamless infinite marquee
  const displayItems = [...itemsWithPortraits, ...itemsWithPortraits];

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
              <div className="testimonial-avatar">
                <img
                  src={item.portrait}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
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
