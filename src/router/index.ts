import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/components/Container/src/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'chooseIcon',
        component: () => import('@/views/chooseIcon/index.vue')
      },
      {
        path: 'chooseArea',
        component: () => import('@/views/chooseArea/index.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
