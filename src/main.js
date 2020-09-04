import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUi from './components/element'
import Compenents from './components'
import Directives from './libs/directives'

Vue.use(ElementUi)
Vue.use(Directives, {
  placeholder: require('./assets/logo.png')
})
Vue.use(Compenents)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
