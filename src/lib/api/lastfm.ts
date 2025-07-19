import axios from 'axios'

const username = import.meta.env.VITE_LAST_USERNAME;
const defaultApiUrl = `https://lastfm-last-played.biancarosa.com.br/${username}`;

export const api = axios.create({
    baseURL: defaultApiUrl,
})