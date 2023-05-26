import axios from 'axios';

export const config = {
  responseType: 'json',
  headers: {
    'Content-Type': 'application/problem+json',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': true,
  },
};

export const instance = axios.create(config);

export const getInstance = (instanceConfig) =>
  axios.create({ ...config, ...instanceConfig });
