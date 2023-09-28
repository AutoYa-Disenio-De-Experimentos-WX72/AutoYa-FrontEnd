import { createRouter, createWebHistory } from 'vue-router'
import Inicio from "@/AutoYa/pages/inicio-arrenda.vue"
import NotificacionesPropie from "@/AutoYa/pages/notificaciones-propie.vue";
import CarRegistrationOwner from "@/AutoYa/pages/car-registration-owner.vue";
import RentTenant from "@/AutoYa/pages/rent-tenant.vue";
import SearchVehicle from "@/AutoYa/pages/search-vehicle.vue";
import Maintenance from "@/AutoYa/pages/maintenance.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Inicio,
    },
    {
      path: "/notifications",
      name: "Notificaciones",
      component: NotificacionesPropie,
    },
    {
      path: "/car-registration-owner",
      name: "car-registration-owner",
      component: CarRegistrationOwner,
    },
    {
      path: "/rent-tenant",
      name: "rent-tenant",
      component: RentTenant,
    },
    {
      path: "/maintenance",
      name: "maintenance",
      component: Maintenance,
    },
    {
      path: "/Search-vehicle",
      name: "Search-vehicle",
      component: SearchVehicle,
    }
  ]
})
export default router