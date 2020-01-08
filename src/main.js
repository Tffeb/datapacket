// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './mock';
window.echarts = require('echarts');
//import store from './store'
import router from './router'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h => h(App),
  //store
  router
})
