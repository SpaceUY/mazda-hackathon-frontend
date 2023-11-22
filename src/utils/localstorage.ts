export const getLocalStorage = (key: 'token'): string | null => {
  return localStorage.getItem(key);
};

export const setLocalStorage = (key: 'token', value: any): void => {
  localStorage.setItem(key, value);
};

export const removeLocalStorage = (key: 'token'): void => {
  localStorage.removeItem(key);
};
