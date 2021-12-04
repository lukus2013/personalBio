import React, { useState, useEffect } from 'react';
import { getProjects } from '../api/data/DbData';
import ProjCards from '../Components/ProjCards';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getProjects().then((projObj) => {
      if (isMounted) setProjects(projObj);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="projects-page">
      <div className="proj-container">
        {projects.map((project) => (
          <ProjCards
            key={project.projectId}
            card={project}
            setProjects={setProjects}
          />
        ))}
      </div>
    </div>
  );
}
