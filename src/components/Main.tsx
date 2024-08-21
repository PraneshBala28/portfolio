import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GmailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://github.com/PraneshBala28/Face-Recognition-PB/blob/main/Images/dp.JPG?raw=true" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/PraneshBala28" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/praneshbalaji/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:esawribalaji@gmail.com" target="_blank" rel="noreferrer"><GmailIcon/></a>
          </div>
          <h1>Pranesh Balaji</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/PraneshBala28" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/praneshbalaji/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;