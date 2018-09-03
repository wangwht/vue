import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/components/GoodsList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/GoodsList/:id',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

  ]
})
