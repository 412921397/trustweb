import axios from "axios";
import qs from "qs";

import { useSystem } from "@/store";
import { message } from "@/utils/message";

// 官方文档做了处理，直接请求会出现403，自己写个服务做个转发就可以了，纯前端不行
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000 * 10,
  withCredentials: true
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    const systemStore = useSystem();
    // do something before request is sent
    // if (userStore.getters.token) {
    //   config.headers.Authorization = `${userStore.getters.token}`;
    // }
    if (config.method.toLowerCase() === "get" && config.params) {
      config.url = config.url + "?" + qs.stringify(config.params, { indices: false });
      config.params = null;
    }
    config.headers.locale = systemStore.lang;
    // config.headers["User-Agent"] = "Mozilla/5.0";
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
    switch (res.status / 1) {
      case 404:
        res.message = message.error("网络请求丢失");
        break;
      case 500:
        res.message = message.error("服务维护中");
        break;
      case 503:
        res.message = message.error("网络不给力，验证失败");
        break;
      case 504:
        res.message = message.error("网络不给力，网关超时");
        break;
      case 200:
        // res.message = message.success("操作成功!");
        // console.log('操作成功!', res)
        return Promise.resolve(res.data);
      default:
        res.message = typeof res.status === "number" ? res.message : "操作失败" + `(${res.status})!`;
        message.error(res.message);
        return Promise.reject(res.message);
    }
    return Promise.resolve(res.data);
  },
  (err) => {
    console.log(err);

    // 网络状态监控
    if (err?.response?.status) {
      const status = err.response.status;
      switch (status) {
        case 401:
          break;
        case 404:
          message.error("接口未找到");
          break;
        case 415:
          message.error("HTTP协议不匹配，请确认");
          break;
        case 428:
          message.error("验证码不合法");
          break;
        case 500:
          message.error({ message: "服务未启动", type: "fail", duration: 2000 });
          break;
        default:
          message.error(err.message || "服务错误");
      }
    } else {
      message.error(err.message || "服务错误");
    }

    return Promise.reject(err.response.data);
  }
);

export default service;
