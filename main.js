import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)

Vue.use(VueAnalytics, {
  id: 'UA-133312523-2'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
