import axios from 'axios';

class Resources {
  constructor() {
    this.resource = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL + "/resources",
      withCredentials: true,
    });
  }
  
  getAllResources = (category) => {
       
        
    return this.resource.get(`/categories/${category}`).then(response => {
        console.log('services-2', response.data);
        return response.data
    })
  }


}

const resourcesServices = new Resources();

export default resourcesServices;
