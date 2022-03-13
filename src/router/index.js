import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/board',
    name: 'board',
    component: () => import('@/views/board/index.vue')
  },
  {
    path: '/board/create',
    name: 'board-create',
    component: () => import('@/views/board/create.vue')
  },
  {
    path: '/board/:id',
    name: 'board-view',
    component: () => import('@/views/board/detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
