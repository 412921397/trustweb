import request from "./cropo";

export const trending = (params) => {
  return request({
    url: "/search/trending",
    method: "get",
    params: params
  });
};
