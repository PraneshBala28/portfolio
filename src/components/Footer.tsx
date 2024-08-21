import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GmailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/PraneshBala28" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/praneshbalaji/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:esawribalaji@gmail.com" target="_blank" rel="noreferrer"><GmailIcon/></a>
        <a href="https://www.instagram.com/pranesh_bala_/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
      </div>
      <p>A portfolio designed & built by Pranesh Balaji with 💜</p>
    </footer>
  );
}

export default Footer;