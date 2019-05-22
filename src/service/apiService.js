import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com'
    })
  }

  getTutors = async () => {
    try {
      const { data } = await this.api.get('/users');
      return data
    } catch(err) {
      console.log(err)
    }
  }
}

const apiService = new ApiService()
export default apiService