import {App} from 'vue'

import chooseArea from '@/components/chooseArea'
import chooseIcon from '@/components/chooseIcon'
import chooseTrend from "@/components/chooseTrend";
import notification from "@/components/notification";
import notificationList from "@/components/notificationList";
import menu from "@/components/menu";
const components = [
  chooseArea,
  chooseIcon,
  chooseTrend,
  notification,
  notificationList,
  menu
]

export default {
  install(app: App) {
    components.forEach(item => {
      app.use(item)
    })
  }
}
