import Vue from 'vue'
const Paginate = require('vuejs-paginate');
import App from './App.vue'

Vue.component('paginate', Paginate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
