import axios from 'axios';

class MySigns {
    constructor() {
        this.mysign = axios.create({
          baseURL: process.env.REACT_APP_SERVER_URL + "/resources",
          withCredentials: true,
        });
      }

      handleFormSubmit = event => {
        event.preventDefault();
        const { imageURL, meaning, pictoURL } = this.state;
        const { author } = this.props;
    
        axios
          .post(
            "process.env.REACT_APP_SERVER_URL/mysigns/create-sign",
            { imageURL, meaning, pictoURL, author },
            { withCredentials: true }
          )
          .then(() => {
            this.props.getMySigns();
            this.setState({ imageURL: "", meaning: "", pictoURL: "" });
          })
          .catch(err => console.log(err));
      };
    
      imageUpload(file) {
        console.log(file);
        return this.auth.post("/create-sign", file).then(({ data }) => {
          return data;
        });
      } 
    
    }
    
    const mysignsServices = new MySigns();
    
    export default mysignsServices;   