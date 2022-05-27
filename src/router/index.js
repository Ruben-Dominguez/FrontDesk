import { createRouter, createWebHistory } from 'vue-router'
import RegistrarUsuario from '../components/RegistrarUsuario.vue'
import LoginView from '../views/LoginView.vue'
import KpiView from '../views/KpiView.vue'
import SociosView from '../views/SociosView.vue'
import PromotionalCampaignView from '../views/PromotionalCampaignView.vue'
import AddCampaignView from '../views/AddCampaignView.vue'
import EditCampaignView from '../views/EditCampaignView.vue'
import GimnasiosView from '../views/GimnasiosView.vue'
import CuentasView from '../views/CuentasView.vue'
import AgregarCuenta from '../views/AgregarCuenta.vue'
import AgregarSocio from '../views/AgregarSocio.vue'
import AgregarInstructor from '../views/AgregarInstructor.vue'
import AgregarFrontdesk from '../views/AgregarFrontdesk.vue'
import FrontDeskView from '../views/FrontDeskView.vue'
import MembresiasView from '../views/MembresiasView.vue'
import EquipamientosView from '../views/EquipamientosView.vue'
import EditFrontDeskView from '../views/EditFrontDeskView.vue'
import InstructorView from '../views/InstructorView.vue'
import EditInstructorView from '../views/EditInstructorView.vue'

const routes = [
  {path: '/registrar', name: 'RegistrarUsuario',component: RegistrarUsuario},
  {path: '/', name: 'Login',component: LoginView},
  {path: '/kpis', name: 'KpiView',component: KpiView},
  {path: '/cuentas', name: 'Cuentas',component: CuentasView},
  {path: '/cuentas-add', name: 'AgregarCuenta',component: AgregarCuenta},
  {path: '/cuentas-add-socio', name: 'AgregarSocio',component: AgregarSocio},
  {path: '/cuentas-add-instructor', name: 'AgregarInstructor',component: AgregarInstructor},
  {path: '/cuentas-add-frontdesk', name: 'AgregarFrontdesk',component: AgregarFrontdesk},
  {path: '/socio', name: 'Socio',component: SociosView},
  {path: '/campaign', name: 'PromotionalCampaign',component: PromotionalCampaignView},
  {path: '/campaign-add', name: 'AddCampaign',component: AddCampaignView},
  {path: '/campaign-edit', name: 'EditCampaign',component: EditCampaignView},
  {path: '/gimnasios', name: 'Gimnasios',component: GimnasiosView},
  {path: '/frontdesk', name: 'FrontDeskInfo',component: FrontDeskView},
  {path: '/frontdesk-edit', name: 'FrontDeskEdit',component: EditFrontDeskView},
  {path: '/instructor', name: 'InstructorView',component: InstructorView},
  {path: '/membresias', name: 'Membresias',component: MembresiasView},
  {path: '/instructor-edit', name: 'InstructorEdit',component: EditInstructorView},
  {path: '/equipamientos', name: 'Equipamientos',component: EquipamientosView},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
