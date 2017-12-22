import Vue from 'vue'
import axios from 'axios'
import {Loading, Message} from 'element-ui';

var instance = axios.create({
    baseURL: 'https://www.songyanbin.com/api/',
    timeout: 3000
});
var loading;
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    loading = Loading.service({
        background: 'rgba(255,255,255,.2)',
        text: '加载中...'
    });
    return config;
}, function (error) {
    // 对请求错误做些什么
    Message({
      message: '接口异常',
      type: 'error'
    });
    loading.close();
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (res) {
    // 对响应数据做点什么
    if(res.data.code!=1000){
        Message({
          message: res.data.description,
          type: 'warning'
        });
    }
    loading.close();
    return res;
}, function (error) {
    // 对响应错误做点什么
    Message({
      message: '接口异常',
      type: 'error'
    });
    loading.close();
    return Promise.reject(error);
});
Vue.prototype.$http = instance
