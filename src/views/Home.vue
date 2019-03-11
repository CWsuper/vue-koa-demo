<template>
  <div class="login-register">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="login" name="first">
        <el-input v-model='loginData.username' placeholder="username"></el-input>
        <el-input v-model='loginData.password' placeholder="passworld"></el-input>
        <el-button type="primary" @click='login'>login</el-button>
      </el-tab-pane>
      <el-tab-pane label="register" name="second">
        <el-input v-model='registerData.username' placeholder="username"></el-input>
        <el-input v-model='registerData.password' placeholder="passworld"></el-input>
        <el-input v-model='registerData.repassword' placeholder="repassword"></el-input>
        <el-button type="primary" @click='register'>register</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import {store} from '../store.js'
export default {
  name: 'login-register',
  data() {
    return {
      activeName: 'first',
      loginData: {
        username:'',
        password:'',
      },
      registerData: {
        username:'',
        password:'',
        repassword:'',
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    login() {
      store.dispatch('login',this.loginData)
      .then((res) => {
          alert(res.msg);
          this.$router.push('about');
      })
    },
    register() {
      store.dispatch('register',this.registerData)
      .then((res) => {
        alert(res.msg + 'please login!');
      })
    },
  }
}
</script>

<style>
.el-tabs{
  width:600px;
  border:solid 1px #e4e7ed;
  padding:20px;
}
.login-register{
  display:flex;
  align-items:center;
  justify-content:center;
}
input{
  margin:10px 20px;
}
</style>
