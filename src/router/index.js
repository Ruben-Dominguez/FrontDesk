import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrarUsuario from '../components/RegistrarUsuario.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {path: '/',name: 'home',component: HomeView},
  {path: '/registrar', name: 'RegistrarUsuario',component: RegistrarUsuario},
  {path: '/login', name: 'Login',component: LoginView},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
