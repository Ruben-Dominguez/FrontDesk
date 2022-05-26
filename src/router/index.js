import { createRouter, createWebHistory } from 'vue-router'
import RegistrarUsuario from '../components/RegistrarUsuario.vue'
import LoginView from '../views/LoginView.vue'
import SociosView from '../views/SociosView.vue'
import PromotionalCampaignView from '../views/PromotionalCampaignView.vue'
import AddCampaignView from '../views/AddCampaignView.vue'

const routes = [
  {path: '/registrar', name: 'RegistrarUsuario',component: RegistrarUsuario},
  {path: '/', name: 'Login',component: LoginView},
  {path: '/socio', name: 'Socio',component: SociosView},
  {path: '/campaign', name: 'PromotionalCampaign',component: PromotionalCampaignView},
  {path: '/campaign-add', name: 'AddCampaign',component: AddCampaignView}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
