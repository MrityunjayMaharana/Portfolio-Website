import React from 'react';

const ProgressBar = ({ levelClass, logos }) => {
  return (
    <div className="progress-bar">
      <div className={levelClass}></div>
      <div className="tech-logo">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
