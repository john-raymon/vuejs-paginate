import Vue from 'vue'
import {Paginate} from 'vuejs-paginate'
import App from './App.vue'

Vue.component('paginate', Paginate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
