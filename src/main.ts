import Vue from 'vue'
import Codemirror from 'vue-codemirror'
import JsonTreeVue from 'vue-json-tree-view'
import App from './App.vue'

Vue.use(Codemirror)
Vue.use(JsonTreeVue)

new Vue({
  el: '#app',
  render: h => h(App)
})