import React from 'react';
import resume from './resume.png';
import linked from './business.png';
import git from './github.png';
import spotify from './spotify.png';
import mail from './email.png';

const Connect = () => {
  return (
    <div className="connect">
      <h2>Connect</h2>
      <div className="connect-links">
        <a href="link-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="connect-link">
          <img src={resume.src} alt="Resume" className="connect-icon" />
          Resume
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noopener noreferrer" className="connect-link">
          <img src={linked.src} alt="LinkedIn" className="connect-icon" />
          LinkedIn
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="connect-link">
          <img src={git.src} alt="GitHub" className="connect-icon" />
          GitHub
        </a>
        <a href="mailto:your-email@example.com" className="connect-link">
          <img src={mail.src} alt="Email" className="connect-icon" />
          Email
        </a>
        <a href="https://open.spotify.com/user/your-spotify" target="_blank" rel="noopener noreferrer" className="connect-link">
          <img src={spotify.src} alt="Spotify" className="connect-icon" />
          Spotify
        </a>
      </div>
    </div>
  );
};

export default Connect;
