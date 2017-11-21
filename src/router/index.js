import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test/test'
import Index from '@/components/index/index'
import Sort from '@/components/sort/sort'
import Tips from '@/components/tips/tips'
import Mplay from '@/components/mplay/mplay'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(Router)
// Vue.use(Mint);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'Test',
    //   component: Test
    // },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/sort',
      name: 'sort',
      component: Sort
    },
    {
      path: '/tips',
      name: 'tips',
      component: Tips
    },
    {
      path: '/mplay',
      name: 'mplay',
      component: Mplay
    },
    {
      path: '/hello',
      component: HelloWorld
    }
  ]
})
