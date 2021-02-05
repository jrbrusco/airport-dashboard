import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';



Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')

Vue.use(VueSweetalert2);