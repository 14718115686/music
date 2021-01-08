"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  //换接口 不可以就换一个
  //baseURL:"http://music.kele8.cn/"
  baseURL:"http://musicapi.leanapp.cn/" //设置请求域名 接口版本 v1 v2
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);  //根据配置创建axios实例

//axios 请求之后前置配置
_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // config.headers.ascessToken='hellotaken testtoke'; //请求头部添加标记

    // config.url +='?token=1234567890-=fdsa345';
    
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

//axios 请求之后后置配置
// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
/*
  vue插件规范
  install 方法就是插件安装方法
*/
//把axios 做成 vue插件
Plugin.install = function(Vue) {  //插件配置
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {  // 给vue的原型对象添加属性 axios $axios $http
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },

    //也可以不配置
    $http: {
      get() {
        return _axios;
      }
    },

  });
};
 
//安装插件
// 例:  Vue.use(router)
Vue.use(Plugin)

export default Plugin;
