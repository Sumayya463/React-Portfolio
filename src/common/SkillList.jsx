import React from 'react';

function SkillList({ src, skill }) {
  return (
    <div className="skill-item">
      <img src={src} alt="Checkmark icon" />
      <span>{skill}</span>
    </div>
  );
}

export default SkillList;