<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="block">
      <span class="demonstration">默认滑块</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <el-button type="primary" @click = 'getData'>主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <div class="data_from_koa">
      {{info}}
    </div>
  </div>
</template>

<script>
import {store} from '../store.js'
  export default {
    data() {
      return {
        value1: 0,
      }
    },
    computed: {
      info(){
        return store.state.info;
      },
    },
    methods: {
      getData() {
        store.dispatch('getData');
      }
    },
  }
</script>
