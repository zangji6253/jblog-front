import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from "@/components/index/index";

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/:id',
      name: 'article',
      component: index
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
  ]
})
