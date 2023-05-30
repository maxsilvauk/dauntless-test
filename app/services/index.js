import axios from 'axios'

export const config = {
  responseType: 'json',
}

export const instance = axios.create(config)

export const getInstance = (instanceConfig) => axios.create({ ...config, ...instanceConfig })
