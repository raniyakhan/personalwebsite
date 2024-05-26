// "use client";

// import React from 'react';
// import { Link as ScrollLink } from 'react-scroll';

// const Header: React.FC = () => {
//   return (
//     <div className="header">
//       <div className="nav nav-left">
//         <ScrollLink to="about" smooth={true} duration={500} offset={-100}>ABOUT</ScrollLink>
//         <ScrollLink to="capabilities" smooth={true} duration={500} offset={-100}>TECHNOLOGIES</ScrollLink>
//         <ScrollLink to="work" smooth={true} duration={500} offset={-100}>WORK</ScrollLink>
//       </div>
//       <ScrollLink to="what" id="Raniya" className="name" smooth={true} duration={500}>Raniya Khan</ScrollLink>
//       <div className="nav nav-right">
//         <ScrollLink to="photos" smooth={true} duration={500} offset={-70}>PHOTOS</ScrollLink>
//         <ScrollLink to="projects" smooth={true} duration={700} offset={-70}>PROJECTS</ScrollLink>
//         <ScrollLink to="connect" smooth={true} duration={800}>CONNECT</ScrollLink>
//       </div>
//     </div>
//   );
// };

// export default Header;


"use client";

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <div className="header">
      {/* <ScrollLink to="Raniya" smooth={true} duration={500} offset={-100}>Raniya Khan</ScrollLink> */}
      <div className="nav">
        <ScrollLink to="about" smooth={true} duration={500} offset={-100}>ABOUT</ScrollLink>
        <ScrollLink to="capabilities" smooth={true} duration={500} offset={-100}>TECHNOLOGIES</ScrollLink>
        <ScrollLink to="work" smooth={true} duration={500} offset={-100}>WORK</ScrollLink>
        <ScrollLink to="photos" smooth={true} duration={500} offset={-70}>PHOTOS</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={700} offset={-70}>PROJECTS</ScrollLink>
        <ScrollLink to="connect" smooth={true} duration={800} >CONNECT</ScrollLink>
      </div>
    </div>
  );
};

export default Header;






// "use client";

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// const Header: React.FC = () => {
//   const [typing, setTyping] = useState('');
//   const text = "hii there! i'm";

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setTyping((prev) => {
//         if (index < text.length) {
//           return prev + text[index];
//         }
//         return prev;
//       });
//       index += 1;
//       if (index === text.length) {
//         clearInterval(interval);
//       }
//     }, 100);
//     return () => clearInterval(interval);
//   }, []);

//   const yourStyle: React.CSSProperties = {
//     fontFamily: 'CustomFont', // Use the custom font here
//     // Add other styles as needed
//   };

//   return (
//     <div className="header">
//       <div className="header-content">
//         {/* <div className="hi-container">
//           <div className="hi-placeholder">hi there! i'm</div>
//           <div className="hi">{typing}</div>
//         </div> */}
//         <div style={yourStyle} className="title">Raniya Khan</div>
//       </div>
//       <div className="nav">
//         <Link href="/">About</Link>
//         <Link href="/work">Work</Link>
//         <Link href="/resume" className="resume-button">Resume</Link>
//       </div>
//     </div>
//   );
// };

// export default Header;



// "use client";

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';



// const Header = () => {
//   const [typing, setTyping] = useState('');
//   const text = "hii there! i'm";

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setTyping((prev) => {
//         if (index < text.length) {
//           return prev + text[index];
//         }
//         return prev;
//       });
//       index += 1;
//       if (index === text.length) {
//         clearInterval(interval);
//       }
//     }, 100);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="header">
//       <div className="header-content">
//         {/* <div className="hi-container">
//           <div className="hi-placeholder">hi there! i'm</div>
//           <div className="hi">{typing}</div>
//         </div> */}
//         <div className="title">RANIYA</div>
//       </div>
//       <div className="nav">
//         <Link href="/">Home</Link>
//         <Link href="/work">Work</Link>
//         <Link href="/resume" className="resume-button">Resume</Link>
//       </div>
//     </div>
//   );
// };

// export default Header;





// import React from 'react';
// import Link from 'next/link';

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="header-content">
//         <div className='hi'>hi there! i'm</div>
//         <div className="title">Raniya Khan</div>
//       </div>
//       <div className="nav">
//         <Link href="/">Home</Link>
//         <Link href="/work">Work</Link>
//         <Link href="/resume" className="resume-button">Resume</Link>
//       </div>
//     </div>
//   );
// };

// export default Header;

