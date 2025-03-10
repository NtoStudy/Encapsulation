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
      },
      {
        path: 'chooseTrend',
        component: () => import('@/views/chooseTrend/index.vue')
      },
      {
        path: 'notification',
        component: () => import('@/views/notification/index.vue')
      },
      {
        path: 'menu',
        component: () => import('@/views/menu/index.vue')
      },
      {
        path: 'progress',
        component: () => import('@/views/progress/index.vue')
      },
      {
        path: 'chooseTime',
        component: () => import('@/views/chooseTime/index.vue')
      },
      {
        path: 'chooseCity',
        component: () => import('@/views/chooseCity/index.vue')
      },{
        path: 'form',
        component: () => import('@/views/form/index.vue')
      },{
        path: 'modelForm',
        component: () => import('@/views/modelForm/index.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
