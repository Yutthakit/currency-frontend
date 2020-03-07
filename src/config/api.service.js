import axios from "axios";
import { USER_LOGOUT } from "../redux/actions/actions";
import store from "../redux/store/store";

axios.defaults.baseURL = "http://localhost:8080";

const TOKEN = "ACCESS_TOKEN";
const PROTECTED_PATHS = ["review-create"];

const isProtectedPath = url => PROTECTED_PATHS.find(path => path === url);

axios.interceptors.request.use(
  async config => {
    console.log(config);
    let strUrl = config.url.split("/")[1];
    if (isProtectedPath(strUrl)) {
      console.log("pass auth");
      let token = localStorage.getItem(TOKEN);
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    }
    return config;
  },
  async error => {
    throw error;
  }
);

// Redirect to login page in case of 401 response
axios.interceptors.response.use(
  async config => {
    return config;
  },
  async error => {
    if (error.request === undefined) throw error;

    let url = error.request.responseURL;
    if (error.request.status === 401) {
      throw error;
    }

    if (error.request.status === 401 && isProtectedPath(url)) {
      console.log("Session expire, redirect to login");

      localStorage.removeItem(TOKEN);
      store.dispatch({ type: USER_LOGOUT });
    }

    throw error;
  }
);

export default axios;
