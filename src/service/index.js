import axios from "axios";
import qs from "qs";

import { useUser } from "@/store";
import { message } from "@/utils/message";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000 * 10,
  withCredentials: true
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // const systemStore = useSystem();
    // const userStore = useUser();

    // if (userStore.token) {
    //   config.headers.Authorization = `Bearer ${userStore.token}`;
    // }

    if (config.method.toLowerCase() === "get" && config.params) {
      config.url = config.url + "?" + qs.stringify(config.params, { indices: false });
      config.params = null;
    }

    config.headers.locale = systemStore.lang;
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    if (res.data instanceof Blob) {
      return res.data;
    }

    if (res.status >= 200 && res.status < 300) {
      return Promise.resolve(res.data);
    }

    const statusMessages = {
      401: "未授权，请重新登录",
      404: "网络请求丢失",
      415: "HTTP协议不匹配，请确认",
      428: "验证码不合法",
      500: "服务维护中",
      503: "网络不给力，验证失败",
      504: "网络不给力，网关超时"
    };

    const errMsg = statusMessages[res.status] || `操作失败(${res.status})`;
    message.error(errMsg);

    return Promise.reject({ status: res.status, message: errMsg, data: res.data });
  },
  (err) => {
    console.error(err);

    if (!err || !err.response) {
      message.error(err?.message || "服务错误，请检查网络");
      return Promise.reject(err);
    }

    const status = err.response.status;
    const userStore = useUser();

    if (status === 401) {
      userStore.logout();
      message.error("登录状态已过期，请重新登录");
      window.location.reload();
      return Promise.reject({ status, message: "未授权" });
    }

    const statusMessages = {
      404: "接口未找到",
      415: "HTTP协议不匹配，请确认",
      428: "验证码不合法",
      500: "服务未启动",
      503: "服务暂不可用"
    };

    const errMsg = statusMessages[status] || err.message || "服务错误";
    message.error(errMsg);

    return Promise.reject({ status, message: errMsg, data: err.response.data });
  }
);

export default service;
