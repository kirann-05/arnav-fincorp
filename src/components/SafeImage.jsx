import React from 'react';

const SafeImage = ({ src, alt, fallback = 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80', className, ...props }) => {
  return (
    <img
      src={src || fallback}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallback;
      }}
      {...props}
    />
  );
};

export default SafeImage;
