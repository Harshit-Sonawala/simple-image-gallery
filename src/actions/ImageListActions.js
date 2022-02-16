import axios from 'axios';

import { IMAGE_LIST_FROM_API_CHANGED } from './ActionTypes';

export const getImageListFromAPI = () => {

  const api_key = process.env.REACT_APP_UNSPLASH_API_KEY;
  axios({
    method: 'get',
    url: 'https://api.unsplash.com/photos/',
    headers: {
      'Authorization': `Client-ID ${api_key}`
    }
  }).then(response => {
    return {
      type: IMAGE_LIST_FROM_API_CHANGED,
      payload: response,
    };
  })
}