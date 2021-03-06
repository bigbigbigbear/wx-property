import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>
  import ('@/pages/home/Home')
const Park = () =>
  import ('@/pages/park/Park')
const About = () =>
  import ('@/pages/about/About')
const ParkDetail = () =>
  import ('@/pages/parkDetail/ParkDetail')
const ParkScore = () =>
  import ('@/pages/parkScore/ParkScore')
const EmployeeList = () =>
  import ('@/pages/employeeList/EmployeeList')
const EmployeeScore = () =>
  import ('@/pages/employeeScore/EmployeeScore')
const FaultRepair = () =>
  import ('@/pages/faultRepair/FaultRepair')
const DeviceBook = () =>
  import ('@/pages/deviceBook/DeviceBook')
const RentList = () =>
  import ('@/pages/rentList/RentList')
const RentDetail = () =>
  import ('@/pages/rentDetail/RentDetail')
const NewsList = () =>
  import ('@/pages/newsList/NewsList')
const NewsDetail = () =>
  import ('@/pages/newsDetail/NewsDetail')
const Mine = () =>
  import ('@/pages/mine/Mine')
const MineBill = () =>
  import ('@/pages/mineBill/MineBill')
const BillDetail = () =>
  import ('@/pages/billDetail/BillDetail')
const MineScore = () =>
  import ('@/pages/mineScore/MineScore')
const MineAdvice = () =>
  import ('@/pages/mineAdvice/MineAdvice')
const MineRepair = () =>
  import ('@/pages/mineRepair/MineRepair')
const MineBook = () =>
  import ('@/pages/mineBook/MineBook')
const RepairDetail = () =>
  import ('@/pages/repairDetail/RepairDetail')
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      redirect: to => {
        return '/home'
      }
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于我们'
      },
      component: About
    },
    {
      path: '/park',
      name: 'park',
      meta: {
        title: '园区'
      },
      component: Park
    },
    {
      path: '/parkDetail/:pid',
      name: 'parkDetail',
      meta: {
        title: '园区详情'
      },
      component: ParkDetail
    },
    {
      path: '/parkScore/:pid',
      name: 'parkScore',
      meta: {
        title: '园区评分',
        requireLogin: true
      },
      component: ParkScore
    },
    {
      path: '/employeeList/:pid',
      name: 'employeeList',
      meta: {
        title: '工作人员列表'
      },
      component: EmployeeList
    },
    {
      path: '/employeeScore/:pid/:eid',
      name: 'employeeScore',
      meta: {
        title: '工作人员评分',
        requireLogin: true
      },
      component: EmployeeScore
    },
    {
      path: '/faultRepair/:pid',
      name: 'faultRepair',
      meta: {
        title: '故障报修',
        requireLogin: true
      },
      component: FaultRepair
    },
    {
      path: '/deviceBook/:pid/:did',
      name: 'deviceBook',
      meta: {
        title: '设施预约',
        requireLogin: true
      },
      component: DeviceBook
    },
    {
      path: '/rentList',
      name: 'rentList',
      meta: {
        title: '招租列表'
      },
      component: RentList
    },
    {
      path: '/rentDetail/:rid',
      name: 'rentDetail',
      meta: {
        title: '招租详情'
      },
      component: RentDetail
    },
    {
      path: '/newsList',
      name: 'newsList',
      meta: {
        title: '新闻列表'
      },
      component: NewsList
    },
    {
      path: '/newsDetail/:nid',
      name: 'newsDetail',
      meta: {
        title: '新闻详情'
      },
      component: NewsDetail
    },
    {
      path: '/mine',
      name: 'mine',
      meta: {
        title: '我的',
        requireLogin: true
      },
      component: Mine
    },
    {
      path: '/mineBill',
      name: 'mineBill',
      meta: {
        title: '我的账单',
        requireLogin: true
      },
      component: MineBill
    },
    {
      path: '/billDetail/:bid',
      name: 'billDetail',
      meta: {
        title: '账单详情',
        requireLogin: true
      },
      component: BillDetail
    },
    {
      path: '/mineScore',
      name: 'mineScore',
      meta: {
        title: '我的评分',
        requireLogin: true
      },
      component: MineScore
    },
    {
      path: '/mineAdvice',
      name: 'mineAdvice',
      meta: {
        title: '投诉建议',
        requireLogin: true
      },
      component: MineAdvice
    },
    {
      path: '/mineRepair',
      name: 'mineRepair',
      meta: {
        title: '我的报修',
        requireLogin: true
      },
      component: MineRepair
    },
    {
      path: '/mineBook',
      name: 'mineBook',
      meta: {
        title: '我的预约',
        requireLogin: true
      },
      component: MineBook
    },
    {
      path: '/repairDetail/:rid',
      name: 'repairDetail',
      meta: {
        title: '报修详情',
        requireLogin: true
      },
      component: RepairDetail
    },
  ]
})
