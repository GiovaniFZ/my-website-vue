const username = import.meta.env.VITE_LAST_USERNAME;
const defaultApiUrl = `https://lastfm-last-played.biancarosa.com.br/${username}`;

export const api = {
  async get(endpoint: string) {
    const response = await fetch(`${defaultApiUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { data };
  }
}