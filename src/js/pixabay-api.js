import axios from 'axios';

import 'izitoast/dist/css/iziToast.min.css';

export function getImagesByQuery(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '50348877-00e3539199181f67fed2a274d'
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
  });

  const url = `${BASE_URL}?${params.toString()}`;
  console.log(url);

  return axios.get(url).then(res => res.data)
}

