import Axios from 'axios'

const API = 'https://api.kanye.rest'

export const getQuote = () => {
    return Axios.get(API);
  };