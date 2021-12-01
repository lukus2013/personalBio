import React, { useEffect, useState } from 'react';
import { getTech } from '../api/data/DbData';
import TechCard from '../Components/TechCard';

export default function Tech() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getTech().then((techObj) => {
      if (isMounted) setTechs(techObj);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div className="contact-card">
        <h1>How to contact me!</h1>
        <ul className="list-group list-group-flush">
          <li className="email">lukus2013@yahoo.com</li>
        </ul>
      </div>
      <div className="techs-container">
        {techs.map((tech) => (
          <TechCard key={tech.techId} techs={tech} setTech={setTechs} />
        ))}
      </div>
    </>
  );
}
