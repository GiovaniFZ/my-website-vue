const defaultApiUrl = `https://api.github.com/users/giovanifz`;

  export const githubApi = {
    async get(endpoint: string, params?: Record<string, string | number>) {
      const searchParams = params
        ? new URLSearchParams(
          Object.entries(params).map(([key, value]) => [key, String(value)])
        )
        : '';

      const response = await fetch(
        `${defaultApiUrl}${endpoint}${params ? `?${searchParams}` : ''}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return { data };
    }
  };