import request from "./index";

export const search = (params) => {
  return request({
    url: "/api/price/search",
    method: "get",
    params: params
  });
};

export const category = (params) => {
  return request({
    url: "/api/price/category",
    method: "get",
    params: params
  });
};

// period: month | day | hour | week | all
export const charts = (id, params) => {
  return request({
    url: `/api/charts/${id}`,
    method: "get",
    params: params
  });
};

// 时间条件列表
export const history = (id, params) => {
  return request({
    url: `/api/price/history/${id}`,
    method: "get",
    params: params
  });
};
