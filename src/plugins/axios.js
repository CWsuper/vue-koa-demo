
import Vue from 'vue';
import axios from "axios";
import { Notification } from 'element-ui';
import serviceURL from '@/config/service.json';

const baseURL = serviceURL[process.env.NODE_ENV] || 'development';

let config = {
  baseURL,
  timeout: 5000,

};

const service = axios.create(config);

const showError = (title,message) => {
  Notification({
    title,
    message,
    type:'error',
  });
};

//拦截器
service.interceptors.response.use((res) => {
  if (res.data.code) {
    showError('Ops!',res.data.msg);
  }
  return Promise.resolve(res);
}, (err) =>{
  if(err.response.status === 403) {
    showError('Ops!','Login expired or not logged in');
    setTimeout(() => {
      //跳转到登录页面
    },1000);
  }
  return Promise.reject(err);
});

//封装axios请求
const methods = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      service({
        methods: 'get',
        url,
        params,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if(err.response.status !== 403) {
          showError(`get: ${url} ERROR`, JSON.stringify(params));
        }
        reject(err);
      });
    });
  },
  post(url, data) {
    return new Promise((resolve, reject) => {
      service({
        method: 'post',
        url,
        data,
      })
        /* eslint-disable-next-line */
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          if (err.response.status !== 403) {
            showError(`post: ${url} ERROR!`, JSON.stringify(data));
          }
          reject(err);
        });
    });
  },
};

//不知道plugin做啥
// const plugin = {
//   install(vue) {
//     vue.prototype.$get = methods.get;
//     vue.prototype.$post = methods.post;
//     vue.prototype.$baseURL = baseURL;

//   },
// };

// Vue.use(plugin);

export default methods;
