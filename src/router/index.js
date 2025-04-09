import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/page/home/Home.vue'
import Teams from '../components/page/Teams.vue'
import Robots from '../components/page/Robots.vue'
import Achievement from '../components/page/Achievement.vue'
import Gallery from '../components/page/Gallery.vue'
import Alumni from '../components/page/Alumni.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/teams', component: Teams, name: 'Teams' },
  { path: '/robots', component: Robots, name: 'Robots' },
  { path: '/achievement', component: Achievement, name: 'Achievement' },
  // { path: '/gallery', component: Gallery, name: 'Gallery' },
  { path: '/alumni', component: Alumni, name: 'Alumni' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
