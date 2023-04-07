import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css';

import VueRouter from 'vue-router';
import routes from './router';
Vue.config.productionTip = false
import token from './common/token';
import moment from 'moment';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as te from 'tw-elements';
import Vuex from 'vuex'
import stores from '../store/store';
Vue.use(te);
Vue.use(VueRouter);
library.add(fab, fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuex)
Vue.mixin({
  methods: {  formatDate: function(value) {
          if (value) {
              return moment(String(value)).format('DD/MM/YYYY HH:mm:ss')
          }
      }
    }})
const store = new Vuex.Store({
  modules: { stores },
});
const router = new VueRouter({mode: 'history', routes});
window.axios = require('axios');

router.beforeEach((to, from, next) => {
  const isAuthenticated = stores.state.auth.isAuthenticated
  
  // next-line: check if route ("to" object) needs authenticated
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else if (isAuthenticated) {
    console.log(to)
    switch (to.name) {
      case 'login' :
        next({ path: '/device' });
        break;
      case 'device':
        next({ path: '/device' });
        break;
      default:
        next();
        break;
    }
  } else next();

})
window.axios.defaults.headers['Authorization'] = `Bearer ${token.getToken}` 
let jwtToken = token.getToken
setAuthJwtToken(jwtToken.content);

function setAuthJwtToken(token) {
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

window.axios.interceptors.response.use(function (response) {
    setAuthJwtToken(response.headers.authorization);
    return response;
}, function (error) {
    setAuthJwtToken(error.response.headers.authorization);
    return Promise.reject(error);
});

new Vue({

  render: h => h(App),
  store: store,
  router
 
}).$mount('#app')
