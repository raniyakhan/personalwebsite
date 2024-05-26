// components/Photos.tsx

import React from 'react';

const Photos: React.FC = () => {
  return (
    <div id="photos" className="photos-section">
      <h2 className="section-title">Photos</h2>
      <div className="photos-grid">
        {/* Add your image elements here */}
        <img src="https://via.placeholder.com/150" alt="Placeholder" className="photo" />
        <img src="https://via.placeholder.com/150" alt="Placeholder" className="photo" />
        <img src="https://via.placeholder.com/150" alt="Placeholder" className="photo" />
        <img src="https://via.placeholder.com/150" alt="Placeholder" className="photo" />
        {/* You can add more images as needed */}
      </div>
    </div>
  );
};

export default Photos;
