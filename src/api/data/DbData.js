import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getTech = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/tech.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getProjectById = (projectId) => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/projects/${projectId}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createProject = (object) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/projects.json`, object)
    .then((response) => {
      axios
        .patch(`${dbURL}/projects/${response.data.name}.json`, {
          projectId: response.data.name,
        })
        .then(() => getProjects().then(resolve));
    })
    .catch(reject);
});

const updateProject = (projObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbURL}/projects/${projObj.projectId}.json`, projObj)
    .then(() => getProjects(projObj).then(resolve))
    .catch(reject);
});

const deleteProject = (projObj) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbURL}/projects/${projObj.projectId}.json`)
    .then(() => getProjects(projObj).then(resolve))
    .catch(reject);
});

export {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getTech,
  getProjectById,
};
