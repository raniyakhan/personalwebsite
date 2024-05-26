import React from 'react';
import techData from './techData';

const Capabilities = () => {
  return (
    <div className="capabilities">
      {techData.map((tech, index) => (
        <div className="tech-tag" key={index}>
          <img src={tech.image} alt={tech.name} className="tech-image" />
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Capabilities;
