import React, { useState, useEffect } from 'react';
import { getProjects } from '../api/data/DbData';
import ProjCards from '../Components/ProjCards';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="proj-container">
      {projects.map((project) => (
        <ProjCards
          key={project.ProjectId}
          card={project}
          setProjects={setProjects}
        />
      ))}
    </div>
  );
}
