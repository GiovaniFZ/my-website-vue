const defaultApiUrl = `https://api.github.com/users/giovanifz`;

export const githubApi = {
  async get(endpoint: string) {
    const response = await fetch(`${defaultApiUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { data };
  }
}