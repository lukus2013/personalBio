/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { deleteProject, getProjectById } from '../api/data/DbData';

export default function ProjCrudCard({ card, setCards, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProject(card).then(setCards);
    } else {
      console.warn(setEditItem);
      getProjectById(card.projectId).then(setEditItem);
    }
  };

  return (
    <div className="projCard">
      <div className="projCard-body">
        <h5 className="proj-card-name">{card.projectName}</h5>
        <p className="proj-card-description">{card.projectDescription}</p>
        <ul className="list-group list-group-flush">
          <li className="card-ProjectUrl">Project Url: {card.projectURL}</li>
          <li className="card-GithubUrl">Github Repo Url: {card.githubURL}</li>
          <li className="card-GithubProjUrl">
            Github Project URL: {card.gitProjPage}
          </li>
        </ul>
      </div>
      <div className="card-buttons">
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          DELETE
        </button>
        <button
          onClick={() => handleClick('edit')}
          className="btn btn-primary"
          type="button"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

ProjCrudCard.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
  setCards: PropTypes.func.isRequired,
  setEditItem: PropTypes.func,
};

ProjCrudCard.defaultProps = {
  setEditItem: null,
};
