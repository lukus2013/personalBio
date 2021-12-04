import React from 'react';
import PropTypes from 'prop-types';

export default function ProjCards({ card }) {
  return (
    <div className="projCard">
      <div className="projCard-body">
        <h5 className="proj-card-name">{card.projectName}</h5>
        <p className="proj-card-description">{card.projectDescription}</p>
        <a
          href={card.projectURL}
          className="card-link"
          target="_blank"
          rel="noreferrer"
        >
          Project Url
        </a>
        <a
          href={card.githubURL}
          className="card-link"
          target="_blank"
          rel="noreferrer"
        >
          Github Repo Url
        </a>
        <a
          href={card.gitProjPage}
          className="card-link"
          target="_blank"
          rel="noreferrer"
        >
          Github Project URL
        </a>
      </div>
    </div>
  );
}

ProjCards.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
