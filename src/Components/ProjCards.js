import React from 'react';
import PropTypes from 'prop-types';

export default function ProjCards({ card }) {
  return (
    <div className="projCard" style={{ width: '18rem', margin: '3px' }}>
      <div className="projCard-body">
        <h5 className="proj-card-name">{card.ProjectName}</h5>
        <p className="proj-card-description">{card.ProjectDescription}</p>
        <a
          href={card.ProjectURL}
          className="card-link"
          target="_blank"
          rel="noreferrer"
        >
          Project Url
        </a>
        <a
          href={card.GithubURL}
          className="card-link"
          target="_blank"
          rel="noreferrer"
        >
          Github Repo Url
        </a>
        <a
          href={card.GitProjPage}
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
