import React from 'react';
import ted from './ted.png';
import astro from './astro.png';


const Projects = () => {
  return (
    <div className="random">
      <h2 className="wow">some things i&apos;ve worked on...</h2> 
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

export default Projects;

// import React from 'react';
// import ted from './ted.png'


// const Projects = () => {
//   return (
//     <div className="random">
//       <h2 className="wow">some things i've worked on...</h2> 
//     <div className="projects">
//       <div className="project-card">
//         <img src={ted.src} alt="Ted Sage" className="project-image" />
//         <div className="project-hover">
//           <h2 className="project-description">TedSage</h2>
//           <div className="project-tech">
//             <span className="tech-tag">React</span>
//             <span className="tech-tag">Next.js</span>
//             <span className="tech-tag">CSS</span>
//           </div>
//         </div>
//       </div>
//       <div className="project-card">
//         <img src="path/to/project-image.jpg" alt="Project 2" className="project-image" />
//         <div className="project-hover">
//           <p className="project-description">Project 2 Description</p>
//           <div className="project-tech">
//             <span className="tech-tag">JavaScript</span>
//             <span className="tech-tag">HTML</span>
//             <span className="tech-tag">CSS</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="projects">
//       <div className="project-card">
//         <img src="path/to/project-image.jpg" alt="Project 1" className="project-image" />
//         <div className="project-hover">
//           <p className="project-description">Project 1 Description</p>
//           <div className="project-tech">
//             <span className="tech-tag">React</span>
//             <span className="tech-tag">Next.js</span>
//             <span className="tech-tag">CSS</span>
//           </div>
//         </div>
//       </div>
//       <div className="project-card">
//         <img src="path/to/project-image.jpg" alt="Project 2" className="project-image" />
//         <div className="project-hover">
//           <p className="project-description">Project 2 Description</p>
//           <div className="project-tech">
//             <span className="tech-tag">JavaScript</span>
//             <span className="tech-tag">HTML</span>
//             <span className="tech-tag">CSS</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Projects;


