import axios from 'axios';



class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL + "/auth",
      withCredentials: true,
    });
  }

  signup(user) {
    const { username, password } = user;
    return this.auth
      .post('/signup', { username, password })
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth
      .post('/login', { username, password })
      .then(({ data }) => {
        
        
        return data
      });
  }

  logout() {
    return this.auth.post('/logout', {}).then(response => response.data);
  }

  profile() {
    return this.auth.get('/profile').then(response => response.data);
  }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
