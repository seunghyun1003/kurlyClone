import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage'
import SearchPage from '@/pages/SearchPage'
import BestPage from '@/pages/BestPage'
import ProductPage from '@/pages/ProductPage'
import ShopBasketPage from '@/pages/ShopBasketPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/searchpage',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/bestpage',
      name: 'BestPage',
      component: BestPage
    },
    {
      path: '/detail/:contentId?',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/shopbasketpage',
      name: 'ShopBasketPage',
      component: ShopBasketPage
    },
  ]
})
