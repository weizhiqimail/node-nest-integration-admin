import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:4000',
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log('request interceptors err', err);
  },
);

request.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log('response interceptors err', err);
    return Promise.resolve();
  },
);

export default request;
