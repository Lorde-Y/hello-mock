// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store';
import App from './App';
import Router from 'vue-router';
import routes from './router';
import './style/reset.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(iView);

const router = new Router({
  mode: 'history',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
