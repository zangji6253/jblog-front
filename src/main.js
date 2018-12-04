// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'

import './common/stylus/index.styl'

Vue.prototype.axios = axios;
Vue.prototype.qs = qs;
Vue.config.productionTip = false

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  if (config.method != 'get') {
    config.data = qs.stringify(config.data);
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  let token = window.sessionStorage.getItem("TOKEN");
  if (token) {
    config.headers.common['Authorization'] = "Bearer " + token;
  }
  return config;
}, function (error) {
  return Promise.reject(error)
})

axios.defaults.baseURL = process.env.API_ROOT

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // if(error.response&&error.response.data.errcode==500){
  //     ElementUI.Message({
  //         type:'warning',
  //         message:"身份过期，请重新登录",
  //         onClose:function(){
  //             sessionStorage.removeItem('TOKEN')
  //             router.push('/login')
  //         }
  //     });
  // }
  // 对响应错误做点什么
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
