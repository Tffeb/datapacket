import Vue from 'vue'
import Router from 'vue-router'
import Center from '@/pages/Center'
import HuBei from '@/pages/HuBei'
import ChengJiao from '@/pages/ChengJiao'
import GeLeiBie from '@/pages/GeLeiBie'
import HeTong from '@/pages/HeTong'
import JineZhanbi from '@/pages/JineZhanbi'
import LeiXinggc from '@/pages/LeiXinggc'
import LingYucj from '@/pages/LingYucj'
import ZhiShicq from '@/pages/ZhiShicq'
import ZhuanLilb from '@/pages/ZhuanLilb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Center'
    },
    {
      path: '/Center',
      component: Center
    },
    {
      path: '/HuBei',
      component: HuBei
    },
    {
      path: '/ChengJiao',
      component: ChengJiao
    },
    {
      path: '/GeLeiBie',
      component: GeLeiBie
    },
    {
      path: '/HeTong',
      component: HeTong
    },
    {
      path: '/JineZhanbi',
      component: JineZhanbi
    },
    {
      path: '/LeiXinggc',
      component: LeiXinggc
    },
    {
      path: '/LingYucj',
      component: LingYucj
    },
    {
      path: '/ZhiShicq',
      component: ZhiShicq
    },
    {
      path: '/ZhuanLilb',
      component: ZhuanLilb
    },
  ]
})
