// @ts-ignore
import App from './App.vue'
import { createApp } from 'vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import router from './router'
import bootstrap from 'bootstrap'
import popper from 'popper.js'
import jquery from 'jquery'

const root = createApp(App)
registerGlobalComponents(root)

root
  .use(router, bootstrap, popper, jquery)
  .mount('#app')
