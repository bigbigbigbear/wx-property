import axios from "axios";
import qs from "qs";
import { Toast } from 'mint-ui';
import { baseUrl } from './env'
import router from "../router";

const Axios = axios.create({
  baseURL: baseUrl, // 因为我本地做了反向代理
  timeout: 7000,
  responseType: "json",
  withCredentials: false, // 是否允许带cookie这些,这个选项的作用是跨域时接收服务器response的set-cookies，当启用这个选项的时候，服务器不能设置 Access-Control-Allow-Origin 为 *，如果是nginx可以使用$http_origin，否则写成你真实请求的origin地址
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "delete"
    ) {
      // 序列化
      config.data = qs.stringify(config.data);
    }
    // 若是有做鉴权token , 就给头部带上token
    let token = localStorage.getItem('user_token')
    if (token) {
      config.headers["user-token"] = token
    }
    return config;
  },
  error => {
    Toast({
      message: error
    });
    return Promise.reject(error.data.error.message);
  }
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    if(res.status === 200){
      if(res.data.err_code === 0){
        return res.data
      }else{
        return res.data
        Toast({
          message: res.data.err_msg
        })
      }
    }
  },
  error => {
    Toast({
      message: error.response.data.err_msg
    })
    return Promise.reject(error);
  }
);

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function(Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};
