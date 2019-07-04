import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import UserList from '@/views/User/UserList.vue'
import UserData from '@/views/User/UserData.vue'
import GoodsList from '@/views/Goods/GoodsList.vue'
import GoodsRelease from '@/views/Goods/GoodsRelease.vue'
import GoodsCategory from '@/views/Goods/GoodsCategory.vue'

Vue.use(Router)

const routes = [
      {
          alias: '/',
          path: '/index',
          name: 'index',
          component: Index,
          children: [{
              path: '/user/list',
              name: 'UserList',
              component: UserList,
          },{
              path: '/user/data',
              name: 'UserData',
              component: UserData,
          },{
              path: '/goods/list',
              name: 'GoodsList',
              component: GoodsList,
          },{
              path: '/goods/release',
              name: 'GoodsRelease',
              component: GoodsRelease,
          },{
              path: '/goods/category',
              name: 'GoodsCategory',
              component: GoodsCategory,
          }]
      },
    // {
    //     path: '/home',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]

// 3. 创建 router 实例，然后传 `routes` 配置。
const router = new Router({
    routes // (缩写) 相当于 routes: routes
})
export default router

