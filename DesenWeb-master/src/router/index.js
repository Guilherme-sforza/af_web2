import Vue from 'vue'
import VueRouter from 'vue-router'
import Painel from '../views/Painel.vue'
import MyCard from '@/components/MyCard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Painel',
    component: Painel
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/images',
    name: 'Images',
    component: () => import('../views/Images.vue')
  },
  {
    path: '/card',
    name: 'Help',
    component: () => import('../views/Card.vue')
  },
  {
    path: '/card/:cardid',
    name: 'MyCard',
    component: MyCard
  }
]

const router = new VueRouter({
  routes
})


export default router
