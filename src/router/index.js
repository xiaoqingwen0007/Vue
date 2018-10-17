import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import SecPage from '@/components/SecPage'
import ThrPage from '@/components/ThrPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: FirstPage
    },
    {
      path: '/Sec',
      name: 'Sec',
      component: SecPage
    },
    {
      path: '/Thr',
      name: 'Thr',
      component: ThrPage
    }
  ]
})
