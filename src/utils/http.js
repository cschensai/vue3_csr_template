import axios from "axios";
import Cookie from "vue-cookies";
import { useStoreIndex } from '@/store/index';
import { i18n } from "../common/languages/index";
import { formatToken } from "./utils";

const http = axios.create({
  timeout: 20000,
  baseURL:
    import.meta.env.MODE === "development"
      ? "/api"
      : import.meta.env.VITE_HOME_URL
});

http.interceptors.request.use(
  (config) => {
    const store = useStoreIndex();
    const cookie = Cookie.get("JSESSIONID");
    config.headers.cookies = cookie;
    const token  = formatToken();
    if (config.url === "/api/user/login" || config.url === "/api/user/token") {
      return config;
    }
    if (token) {
      config.headers.Authentication = `Bearer ${token}`;
      config.headers.token = token;
    } else if (store.userInfo) {
      store.dispatch("logUserOut");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => {
    if (response.headers["new-token"]) {
      const newToken = response.headers["new-token"];
      localStorage.setItem("token", newToken);
    }
    return response;
  },
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      store.dispatch("logUserOut");
      if (error.response && error.response.data) {
        error.response.data.errorMessage = i18n.global.t("tokenGGMsg");
      }
      error.message = i18n.global.t("tokenGGMsg");
      return Promise.reject(error);
    }
    if (
      error.response &&
      error.response.data &&
      error.response.data === "JWT_TOKEN_CHECK_FAILED"
    ) {
      store.dispatch("logUserOut");
    }
    return Promise.reject(error);
  }
);

export default http;
