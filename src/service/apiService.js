import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com'
    })
  }

  getUsers = async () => {
    try {
      const { data } = this.api.get('/users/1');
      return data
    } catch(err) {
      console.log(err)
    }
  }
}