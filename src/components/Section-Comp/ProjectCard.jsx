import React from 'react';

const ProjectCard = ({ image, title, technologies, sourceCodeLink, liveProjectLink }) => {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={image} alt={title} />
      </div>
      <div className="project-info">
        <h2>{title}</h2>
        <br />
        {technologies.map((tech, index) => (
          <p key={index}>{tech}</p>
        ))}
        <button className="project-link">
          <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </button>
        {liveProjectLink && (
          <button className="project-link">
            <a href={liveProjectLink} target="_blank" rel="noopener noreferrer">
              Live Project
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
