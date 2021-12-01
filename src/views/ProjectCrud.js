import React, { useState, useEffect } from 'react';
import { getProjects } from '../api/data/DbData';
import ProjCrudCard from '../Components/ProjCrudCard';
import ProjectForm from '../Components/ProjectForm';

export default function ProjectCrud() {
  const [card, setCards] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    let isMounted = true;
    getProjects().then((cardsArray) => {
      if (isMounted) setCards(cardsArray);
    });
    return () => {
      isMounted = false;
    }; // cleanup function
  }, []);

  return (
    <>
      <h1 className="text-center">CRUD your projects</h1>
      <ProjectForm
        key={card.ProjectId}
        obj={editItem}
        setCards={setCards}
        setEditItem={setEditItem}
      />
      <div className=" d-flex flex-wrap proj-container">
        {card.map((cards) => (
          <ProjCrudCard
            key={cards.ProjectId}
            card={cards}
            setProjects={setCards}
          />
        ))}
      </div>
    </>
  );
}
