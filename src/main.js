//入口文件
import "./index.html";

import Vue from "vue"

import VueRouter from "vue-router";

Vue.use(VueRouter);

import router from "./router.js";

import app from "./App.vue";

// 导入mint-mi
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

//导入mui
import mui from"./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";
// Vue.use(mui)

// 引入 axios
import axios from 'axios';
// 将axios绑定给vue成为一个属性
Vue.prototype.$axios = axios;

import './css/index.scss'

var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router,
  axios,
  mui
})