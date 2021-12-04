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

  console.warn(techs);
  return (
    <>
      <div className="contact-card">
        <h1>How to contact me!</h1>
        <h2>
          The best way is LinkedIn, but I do check my emails at least once a
          day.
        </h2>
        <ul className="list-group list-group-flush">
          <li className="email">lukus2013@yahoo.com</li>
        </ul>
        <a
          href="https://www.linkedin.com/in/luke-allen-1610/"
          className="card-link"
        >
          LinkedIn
        </a>
        <a href="https://github.com/lukus2013" className="card-link">
          Git Hub
        </a>
      </div>
      <div className="techs-container">
        {techs.map((tech) => (
          <TechCard key={tech.techId} tech={tech} />
        ))}
      </div>
    </>
  );
}
