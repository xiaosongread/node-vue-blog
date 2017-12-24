import Vue from 'vue'
import Router from 'vue-router'
import Com from '@/components/block/Com'
import Index from '@/components/index'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
      meta: {
        title: '欢迎页面'
      },
      component:Com,
      children:[
        {
          path: 'index',
          component: Index
        },
        {
          path: 'html',
          component: Index
        },
        {
          path: 'css',
          component: Index
        },
        {
          path: 'js',
          component: Index
        }
      ]
    },


    {
      path: '/article',
      redirect: '/article/info',
      meta: {
        title: '文章详情'
      },
      component: Com,
      children: [{
        path: 'info',
        meta: {
          title: '文章详情'
        },
        component: () =>
          import ('@/components/info')
      }]
    }


  ]
})
