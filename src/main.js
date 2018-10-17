// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
//引入全局变量,调用封装方法
import HttpRequest from './assets/js/HttpRequest'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(HttpRequest)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
