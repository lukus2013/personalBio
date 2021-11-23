import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export { getProjects };
