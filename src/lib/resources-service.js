import axios from 'axios';

class Resources {
  constructor() {
    this.resource = axios.create({
      baseURL: 'http://localhost:5000',
      withCredentials: true,
    });
  }
  resources() {
    return this.resources.get('/resources').then(response => response.data);
  }
}

const axiosRequestFunctions = new Resources();

export default axiosRequestFunctions;
