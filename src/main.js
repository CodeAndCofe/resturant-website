import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'

import Menu from "./routes/menu.vue"
import Home from './Home.vue'
import reservation from './routes/reservation.vue'
import contact from './routes/contact.vue'
const routes = 
[
    {component : Menu, path: "/menu"},
    {component : Home, path: "/"},
    {component : reservation, path: "/reserv"},
    {component : contact, path: "/contact"},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
