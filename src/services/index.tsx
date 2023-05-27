import axios, {AxiosInstance} from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://fruityvice.com/api/",
});

export default apiClient;
