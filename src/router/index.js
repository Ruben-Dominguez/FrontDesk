import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrarUsuario from '../components/RegistrarUsuario.vue'
import LoginView from '../views/LoginView.vue'
import GimnasiosView from '../views/GimnasiosView.vue'
//import MembresiasView from '../views/MembresiasView.vue'
//import EquipamientosView from '../views/EquipamientosView.vue'

const routes = [
  {path: '/',name: 'home',component: HomeView},
  {path: '/registrar', name: 'RegistrarUsuario',component: RegistrarUsuario},
  {path: '/login', name: 'Login',component: LoginView},
  {path: '/gimnasios', name: 'Gimnasios',component: GimnasiosView},
  //{path: '/membresias', name: 'Membresias',component: MembresiasView},
  //{path: '/equipamientos', name: 'Equipamientos',component: EquipamientosView},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
