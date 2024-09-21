import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://spotify-apis.eba-agwybnxn.us-east-1.elasticbeanstalk.com', 
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default axiosInstance;