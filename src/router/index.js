import { createRouter, createWebHistory } from 'vue-router'
import RegistrarUsuario from '../components/RegistrarUsuario.vue'
import LoginView from '../views/LoginView.vue'
import SociosView from '../views/SociosView.vue'
import PromotionalCampaignView from '../views/PromotionalCampaignView.vue'
import AddCampaignView from '../views/AddCampaignView.vue'
import EditCampaignView from '../views/EditCampaignView.vue'
import GimnasiosView from '../views/GimnasiosView.vue'
import FrontDeskView from '../views/FrontDeskView.vue'
//import MembresiasView from '../views/MembresiasView.vue'
//import EquipamientosView from '../views/EquipamientosView.vue'


const routes = [
  {path: '/registrar', name: 'RegistrarUsuario',component: RegistrarUsuario},
  {path: '/', name: 'Login',component: LoginView},
  {path: '/socio', name: 'Socio',component: SociosView},
  {path: '/campaign', name: 'PromotionalCampaign',component: PromotionalCampaignView},
  {path: '/campaign-add', name: 'AddCampaign',component: AddCampaignView},
    {path: '/campaign-edit', name: 'EditCampaign',component: EditCampaignView},
  {path: '/gimnasios', name: 'Gimnasios',component: GimnasiosView},
  {path: '/frontdesk', name: 'FrontDesk',component: FrontDeskView},
  //{path: '/membresias', name: 'Membresias',component: MembresiasView},
  //{path: '/equipamientos', name: 'Equipamientos',component: EquipamientosView},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
