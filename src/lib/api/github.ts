import axios from 'axios'

const defaultApiUrl = `https://api.github.com/users/giovanifz/`;

export const githubApi = axios.create({
  baseURL: defaultApiUrl,
})