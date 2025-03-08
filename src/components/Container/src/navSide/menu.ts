import {MenuItem} from "@/components/menu/src/type";

const menu: MenuItem[] = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/home'
  }, {
    icon: 'Document',
    name: '图标选择器',
    index: '/chooseIcon'
  }, {
    icon: 'Location',
    name: '省市区选择器',
    index: '/chooseArea'
  }, {
    icon: 'ArrowUp',
    name: '趋势标记',
    index: '/chooseTrend'
  }, {
    icon: 'Notification',
    name: '通知菜单',
    index: '/notification'
  }, {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  }, {
    icon: 'Setting',
    name: '进度组件',
    index: '/progress'
  }, {
    icon: 'Setting',
    name: '时间选择器',
    index: '/chooseTime'
  },
  {
    icon: 'Setting',
    name: '城市选择器',
    index: '/chooseCity'
  },

]

export default menu
