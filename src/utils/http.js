import axios from "axios";

const server = axios.create({
  baseURL: "",
  timeout: 5000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

server.interceptors.request.use((config) => {
  /**
   * 请求拦截根据不同情况进行headers等参数配置
   */
  return config;
});

server.interceptors.response.use(
  (res) => {
    /**
     * 做接口返回结果处理
     */
    // bo的处理一下返回数据
    // if (res.config.url.includes("bo/call")) {
    //   // 成功
    //   if (res.data.ret == 0) {
    //     let data = JSON.parse(res.data.msg);
    //     if (data.result && data.result.newRet == "OK") {
    //       return data.result.context;
    //     }
    //   } else {
    //     return res.data;
    //   }
    // }

    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default server;
