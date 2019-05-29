import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform.js';
import VeeValidate from 'vee-validate';
import msg from './pt_BR';
import ElementUI from 'element-ui';
import "leaflet/dist/leaflet.css";
import "leaflet-easybutton/src/easy-button.css";
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/pt-br';

Vue.use(ElementUI, { locale });
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

Vue.use(VeeValidate,{
  locate:'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
