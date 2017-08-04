// Utils
import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'vue-nprogress'

// Components
import lost_page from '@/components/errors/404'
import Landing from '@/components/Landing'
import Test from '@/components/Test'

Vue.use(Router)

const routes = [
    { path: '*', component: 404 },
    { path: '/', name: 'Landing', component: Landing },
    { path: '/test', name: 'Test', component: Test }
  ]

export default new Router({
  mode: 'history',
  routes
});

