import axios from 'axios';

class Resources {
  constructor() {
    this.resource = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL + "/resources",
      withCredentials: true,
    });
  }
  
  getAllResources = () => {

    return this.resource.get('/').then(response => {
        console.log('services', response.data);
        return response.data
    })
  }


}

const resourcesServices = new Resources();

export default resourcesServices;
