import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'vue-nprogress'
import Hello from '@/components/Hello'
import Test from '@/components/Test'

Vue.use(Router)

const routes = [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/test', name: 'Test', component: Test }
  ]

export default new Router({
  mode: 'history',
  routes
});

