import axios from "axios";

const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  get(resource) {
    return axios.get(resource);
  },

  post(resource, data) {
    return axios.post(resource, data);
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },

  customRequest(data) {
    return axios(data);
  }
};

export default ApiService;
