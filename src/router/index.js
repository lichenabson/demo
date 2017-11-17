import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/test'
import Dashboard from '@/components/dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/test',
      name: 'Test',
      component: Test
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
