import VueMask, { VueMaskDirective, VueMaskFilter } from 'v-mask'
import vuetify from './plugins/vuetify'
import router from './router'
import App from './App.vue'
import store from './store'
import './plugins/loader'
import './plugins/snackbar'
import Vue from 'vue'

Vue.config.productionTip = false

Vue.use(VueMask)
Vue.directive('mask', VueMaskDirective)
Vue.filter('VMask', VueMaskFilter)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
