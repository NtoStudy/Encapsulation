import {App} from 'vue'

import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import chooseTrend from "./chooseTrend";

const components = [
  chooseArea,
  chooseIcon,
  chooseTrend
]

export default {
  install(app: App) {
    components.forEach(item => {
      app.use(item)
    })
  }
}
