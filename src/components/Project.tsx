import React from "react";

import pr1 from '../assets/images/PR1.jpg';
import pr2 from '../assets/images/PR2.jpg';
import pr3 from '../assets/images/PR3.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/PraneshBala28/RAG_ChatBot_Langchain" target="_blank" rel="noreferrer"><img src={pr1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/PraneshBala28/RAG_ChatBot_Langchain" target="_blank" rel="noreferrer"><h2>Document Chatbot</h2></a>
                <p>A Langchain RAG ChatBot that reads uploaded documents and provides answers based only on the document using Hugging Face embeddings and Azure OpenAI.</p>
            </div>
            <div className="project">
                <a href="https://github.com/PraneshBala28/Face-Detection-PB" target="_blank" rel="noreferrer"><img src={pr2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/PraneshBala28/Face-Detection-PB" target="_blank" rel="noreferrer"><h2>Face Detection</h2></a>
                <p>Designed and Developed a real-time face detection system using OpenCV and Python, capturing video for efficient facial detection..</p>
            </div>
            <div className="project">
                <a href="https://github.com/PraneshBala28/Face-Recognition-PB" target="_blank" rel="noreferrer"><img src={pr3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/PraneshBala28/Face-Recognition-PB" target="_blank" rel="noreferrer"><h2>Face Recognition</h2></a>
                <p>A real-time face recognition system using OpenCV and face_recognition libraries with multi-threading for efficient video processing and recognition against a known face database.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;