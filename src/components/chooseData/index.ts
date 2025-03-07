import { App } from 'vue'

import chooseData from './src/index.vue'

export default {
  install(app: App) {
    app.component('chooseData', chooseData)
  }
}
