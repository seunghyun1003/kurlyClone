import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage'
import SearchPage from '@/pages/SearchPage'
import BestPage from '@/pages/BestPage'
import ProductPage from '@/pages/ProductPage'
import ShopBasketPage from '@/pages/ShopBasketPage'
import OrderPage from '@/pages/OrderPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/search/:keyword?',
      name: 'SearchPage',
      component: SearchPage,
      params: {
        keyword: this.keyword,
      },
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
    {
      path: '/order',
      name: 'OrderPage',
      component: OrderPage
    },
  ]
})
