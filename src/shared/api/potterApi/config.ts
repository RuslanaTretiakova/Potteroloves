export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;

export const TAG_TYPES = ['books', 'characters', 'houses', 'spells'].map(
  (resource) => resource.charAt(0).toUpperCase() + resource.slice(1)
);
