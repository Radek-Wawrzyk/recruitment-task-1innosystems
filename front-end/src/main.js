import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';
import VueCarousel from 'vue-carousel';
import Alert from './components/Alert/Alert';

//Set imported libraries
Vue.use(VueCarousel);
Vue.use(VeeValidate);
Vue.use(BootstrapVue);

//Global components
Vue.component('Alert', Alert);

Vue.config.productionTip = false;

new Vue ({
  render: h => h(App),
}).$mount('#app');
