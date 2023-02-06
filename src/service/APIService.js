import axios from 'axios';

const DOC_API_REST_URL = "http://localhost:8080/doc";

class APIService {

  getDoc(){
    return axios.get(DOC_API_REST_URL);
  }

}

export default new APIService();

