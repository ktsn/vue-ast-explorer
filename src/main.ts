import Vue from 'vue'
import Codemirror from 'vue-codemirror'
import App from './App.vue'

Vue.use(Codemirror)

new Vue({
  el: '#app',
  render: h => h(App)
})
