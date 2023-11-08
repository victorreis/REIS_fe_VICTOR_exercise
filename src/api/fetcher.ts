export const getData = async (path = '') => {
  const url = `${import.meta.env['VITE_REACT_APP_API_BASE_URL']}/${path}`;
  const res = await fetch(url);
  const json = await res.json();

  return json;
};
