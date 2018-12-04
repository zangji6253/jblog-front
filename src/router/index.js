import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from "@/components/index/index";
import edit from "@/components/article/edit";

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
    {
      path: '/edit/:id',
      name: 'edit',
      component: edit
    },
    {
      path: '/insert',
      name: 'insert',
      component: edit
    },
  ]
})
