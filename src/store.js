import Vue from 'vue'
import Vuex from 'vuex'
import {GetData,Login,Register} from '@/api/api.js'
Vue.use(Vuex)

export const store =  new Vuex.Store({
  state: {
    info:'123',
  },
  mutations: {
    setData(state,db) {
      state.info = db;
    }
  },
  actions: {
    //拦截axios请求统一处理，请求后端借口拿到数据触发mutation方法
    getData(context) {
      GetData().then( (res) => {
        context.commit('setData',res.data);
      })
    },
    async login(context,loginData) {
      const result = await Login(loginData);
      const {code,msg,data} = result.data;
      if(code) {
        return Promise.reject({code,msg,data});
      } else {
        return Promise.resolve({code,msg,data});        
      }
    },
    async register(context,registerData) {
      if(registerData.password != registerData.repassword) {
        alert('两次密码请保持一致！');
      }else {
        const result = await Register(registerData);
        const {code,msg,data} = result.data;
        if(code) {
          return Promise.reject({code,msg,data});
        } else {
          return Promise.resolve({code,msg,data});        
        }
      }
    },
  }
})
