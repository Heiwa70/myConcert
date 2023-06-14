import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import LoginPage from '../views/LoginPage.vue'
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import HomePage from '../views/HomePage.vue'
import NewConcert from '../views/NewConcert.vue'
import UpdateConcert from '../views/UpdateConcert.vue'
import ModifierConcertPage from '../views/ModifierConcert.vue'
import UserPage from '../views/UserPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/Login',
    component: LoginPage
  },
  
  {
    path: '/user',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/newConcert',
    name: 'NewConcert',
    component: NewConcert
  },
  {
    path: '/updateConcert',
    name: 'UpdateConcert',
    component: UpdateConcert
  },
  {
    path: '/ModifierConcert/:id',
    name: 'ModifierConcertPage',
    component: ModifierConcertPage
  },
  {
    path: '/userPage',
    name: 'UserPage',
    component: UserPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
