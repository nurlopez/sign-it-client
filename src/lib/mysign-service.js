import axios from 'axios';

class MySigns {
    constructor() {
        this.mySign = axios.create({
          baseURL: process.env.REACT_APP_SERVER_URL + "/mysigns",
          withCredentials: true,
        });
      }

      imageUpload(file) {
        console.log(file);
        return this.mySign.post("/create-sign/image", file)
            .then(({ data }) => {
                console.log('service-image', data);
                return data
            })
            
            
      } 

    createSign(newMySign) {
        return this.mySign.post('/create-sign', newMySign )
            .then(({ data }) => data)
            
    } 

    allMySigns() {
      return this.mySign.get('/').then(response => response.data);
    }
}
     
    
    const mySignService = new MySigns();
    
    export default mySignService;   