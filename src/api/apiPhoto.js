import axios from 'axios';

export const fetchPhotos = async ({ query, page }) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${
      query.split('/')[1]
    }&&client_id=tMy4RwIcF6YfvLQNrDn1mYJ8oloKuZcB6ymLNN-NMQ8&page=${page}&per_page=5`
  );
  return response.data.results;
};