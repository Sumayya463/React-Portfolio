import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="glass-card project-card">
      <img src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;