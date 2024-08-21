import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

import '@fortawesome/free-regular-svg-icons'
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';

function AboutMe() {
  return (
    <div id="aboutMe">
      {<div className="items-container">
        <h1>About me</h1>
        <h2>Pranesh Balaji</h2>
        <p>I am a dedicated and passionate Full Stack Developer with strong expertise in AI and ML, specializing in building scalable web applications and solving complex problems. I have extensive experience with projects involving computer vision, LLMs, Stable Diffusion, OpenAI, Azure, and Hugging Face. My skills span both frontend and backend development, enabling me to create comprehensive digital solutions from the ground up. Here’s a bit more about who I am and where you can find me online.</p>       
      </div>}
      </div>
  );
}

export default AboutMe;