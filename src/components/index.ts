import {App} from 'vue'

import chooseArea from '@/components/chooseArea'
import chooseIcon from '@/components/chooseIcon'
import chooseTrend from "@/components/chooseTrend";
import notification from "@/components/notification";
import notificationList from "@/components/notificationList";
import menu from "@/components/menu";
import progress from "@/components/progress";
import chooseTime from "@/components/chooseTime";
import chooseData from "@/components/chooseData";
import chooseCity from "@/components/chooseCity";
import form from "@/components/form";

const components = [
  chooseArea,
  chooseIcon,
  chooseTrend,
  notification,
  notificationList,
  menu,
  progress,
  chooseTime,
  chooseData,
  chooseCity,
  form
]

export default {
  install(app: App) {
    components.forEach(item => {
      app.use(item)
    })
  }
}
