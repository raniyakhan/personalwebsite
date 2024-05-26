import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Capabilities from './components/Capabilities';
import MoreProj from './components/MoreProj';
import Connect from './components/Connect';
import Where from './components/Where';
import Photo from './components/Photo';

// const Home: React.FC = () => {
//   return (
//     <div id="what">
//       <Header />
//       <h1 id="Raniya" className="name-bubble">Raniya Khan</h1>
//       <div className="container">
//         <div className="column1">
//           <div id="about" className="section">
//             <About />
//           </div>
//           <center>
//             <div id="capabilities" className="section">
//               <Capabilities />
//             </div>
//           </center>
//         </div>
//         <div className="column2">
//           <div id="projects" className="section">
//             <Projects />
//           </div>
//         </div>
//       </div>

//       {/* <center><div className="full-width-section">
//       <Photo /> 
//       </div></center> */}

//       <div className="container">
//         <div className="column1">
//           <div id="work" className="section">
//             <MoreProj />
//           </div>
//         </div>
//         <div className="column2">
//           <center>
//             <div id="where" className="section">
//               <Where />
//             </div>
//           </center>
//           <div id="connect" className="section">
//             <Connect />
//           </div>
//         </div>
//       </div>
//       <footer className="footer">©2024 RANIYA KHAN</footer>
//     </div>
//   );
// };

// export default Home;

const Home: React.FC = () => {
  return (
    <div id="what">
      < Header />
      <h1 id="Raniya" className="name-bubble"> Raniya Khan</h1>
      <div className="container">
        <div className="column1">
          <div id="about" className="section">
            <About />
          </div>
         <center> <div id="capabilities" className="section">
            <Capabilities />
          </div></center>
          <div id="work" className="section">
            <MoreProj />
          </div>
        </div>
        <div className="column2">
          <div id="projects" className="section">
            <Projects />
          </div>
          <center><div id="where" className="section">
            <Where />
          </div></center>
          <div id="connect" className="section">
            <Connect />
          </div>
        </div>
      </div>
      <footer className="footer">©2024 RANIYA KHAN</footer>
    </div>
  );
};

export default Home;
