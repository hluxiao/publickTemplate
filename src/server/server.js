import axios from 'axios'
import _this from '../main';


// http request拦截器 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  //可以配置请求头
  return config;
}, function (error) {
  return Promise.reject(error);
});



// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // 正常请求
  let errStatus = error.response.status.toString();
  if (errStatus == 404) {
    _this.$toast('资源不存在')
  }
  if (errStatus.substr(0, 1) == 5) {
    _this.$toast('服务器异常')
  }
  if (errStatus.substr(0, 1) == 4 && errStatus != 404) {
    _this.$toast('访问异常')
  }
  return Promise.reject(error);
});

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
