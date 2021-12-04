import React from 'react';
import PropTypes from 'prop-types';

export default function TechCard({ tech }) {
  return (
    <div className="techcard">
      <div className="d-flex flex-wrap card-body">
        <img src={tech.imageUrl} alt="display" />
      </div>
    </div>
  );
}

TechCard.propTypes = {
  tech: PropTypes.shape(PropTypes.obj).isRequired,
};
