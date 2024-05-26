import React from 'react';
import map from './map.png'

const Where = () => {
    return (
      <div className="where">
        <h2>Where Am I?</h2>
        <div className="location-wrapper">
          <div className="location-text">Berkeley, California</div>
          <div className="map-frame">
            <img 
              src={map.src}
              alt="Map pointing to Berkeley, California" 
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Where;