import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createProject, getProjects, updateProject } from '../api/data/DbData';

const initialState = {
  projectName: '',
  projectId: '',
  projectDescription: '',
  projectURL: '',
  githubURL: '',
  gitProjPage: '',
};

export default function ProjectForm({ obj, setCards, setEditItem }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (obj.projectId) {
      setFormInput({
        projectName: obj.projectName,
        projectDescription: obj.projectDescription,
        projectURL: obj.projectURL,
        githubURL: obj.githubURL,
        gitProjPage: obj.gitProjPage,
        projectId: obj.projectId,
      });
    }
  }, [obj]);

  const resetForm = () => {
    setFormInput({ ...initialState });
    setEditItem({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.projectId) {
      console.warn(formInput.projectId);
      updateProject(formInput).then(() => {
        getProjects().then(setCards);
        resetForm();
      });
    } else {
      createProject({ ...formInput }).then(() => {
        getProjects().then(setCards);
        resetForm();
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Welcome, sir.</h1>
      <div className="m-3">
        <label htmlFor="ProjectName" className="form-label">
          Project Name
        </label>
        <input
          type="text"
          className="form-control"
          id="projectName"
          name="projectName"
          value={formInput.projectName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="m-3">
        <label htmlFor="projectDescription" className="form-label">
          Project Description
        </label>
        <textarea
          className="form-control"
          id="projectDescription"
          rows="3"
          name="projectDescription"
          value={formInput.projectDescription}
          onChange={handleChange}
          required
        />
      </div>
      <div className="m-3">
        <label htmlFor="projectURL" className="form-label">
          Project URL
        </label>
        <input
          type="text"
          className="form-control"
          id="projectURL"
          name="projectURL"
          value={formInput.projectURL}
          onChange={handleChange}
          required
        />
      </div>
      <div className="m-3">
        <label htmlFor="githubURL" className="form-label">
          Github Url
        </label>
        <input
          type="text"
          className="form-control"
          id="githubURL"
          name="githubURL"
          value={formInput.githubURL}
          onChange={handleChange}
          required
        />
      </div>
      <div className="m-3">
        <label htmlFor="gitProjPage" className="form-label">
          gitProjPage
        </label>
        <input
          type="text"
          className="form-control"
          id="gitProjPage"
          name="gitProjPage"
          value={formInput.gitProjPage}
          onChange={handleChange}
          required
        />
      </div>
      <div className="m-3">
        <button type="submit" className="btn btn-success">
          {obj.projectId ? 'Update' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

ProjectForm.propTypes = {
  obj: PropTypes.shape({
    projectName: PropTypes.string,
    projectId: PropTypes.string,
    projectDescription: PropTypes.string,
    projectURL: PropTypes.string,
    githubURL: PropTypes.string,
    gitProjPage: PropTypes.string,
  }),
  setCards: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

ProjectForm.defaultProps = {
  obj: {},
};
