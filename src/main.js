import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import './assets/main.css'
import {
    focusDirective,
    rainbowDirective,
    clickOutsideDirective,
  } from './directives'


const app = createApp(App)

app.directive('focus', focusDirective)
app.directive('rainbow', rainbowDirective)
app.directive('click-outside', clickOutsideDirective)

app.use(router)
app.use(store)

app.mount('#app')
