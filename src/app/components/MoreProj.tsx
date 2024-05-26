import React from 'react';
import ted from './ted.png';
import astro from './astro.png';


const MoreProj = () => {
  return (
    <div className="random">
      <h2 className="wow">some more of my work!</h2> 
      <div className="projects">
      <div className="project-card">
          <img src={astro.src} alt="AstroLand" className="project-image" />
          <div className="project-hover">
            <h2 className="project-title">AstroLand</h2>
            <p className="project-description">A 2D tile-based world exploration engine with random world generation.</p>
            <div className="project-tech">
              <span className="tech-tag">Java</span>
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={ted.src} alt="Ted Sage" className="project-image" />
          <div className="project-hover">
            <h2 className="project-title">TedSage</h2>
            <p className="project-description">An innovative project that helps with XYZ.</p>
            <div className="project-tech">
          
              <span className="tech-tag">React</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">ChakraUI</span> 
              
             
              <span className="tech-tag">GraphQL</span>
              <span className="tech-tag">ChatGPT API</span>
              <span className="tech-tag">Pinecone</span>
            </div>
          </div>
        </div> 
        

      </div>
      
    </div>
  );
};

export default MoreProj;