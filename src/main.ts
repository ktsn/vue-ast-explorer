import Vue from 'vue'
import Codemirror from 'vue-codemirror'
import App from './App.vue'

Vue.use(Codemirror)

new Vue({
  render: h => h(App)
}).$mount('#app')
