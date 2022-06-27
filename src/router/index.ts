import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/checkin",
    name: "checkin",
    component: () => import("../views/CheckIn.vue"),
  },
  {
    path: "/selecthotel",
    name: "selecthotel",
    component: () => import("../views/SelectHotel.vue"),
  },
  {
    path: "/selectroom",
    name: "selectroom",
    component: () => import("../views/SelectRoom.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
