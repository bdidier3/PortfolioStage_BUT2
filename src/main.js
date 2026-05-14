import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import HomeView from './views/HomeView.vue'
import TechView from './views/TechView.vue'
import SuiviView from './views/SuiviView.vue'
import IntegrationView from './views/IntegrationView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/technique', component: TechView },
    { path: '/suivi', component: SuiviView },
    { path: '/integration', component: IntegrationView },
  ],
})

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
  },
})

createApp(App).use(vuetify).use(router).mount('#app')
