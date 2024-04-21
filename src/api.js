import axios from "axios";

const ACCESS_KEY = 'vFkAQkwu1yH9MR6hHefc6No_vNrdx7jC9A-wRwnbbYk';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${ACCESS_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 20,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);

  return data;
};