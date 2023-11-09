import { API_URL } from '@configs/constants';

export const fetcher = async <T>(path = ''): Promise<T> => {
  const url = `${API_URL}/${path}`;
  const res = await fetch(url);
  const json = (await res.json()) as T;

  return json;
};
