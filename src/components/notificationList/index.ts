import {App} from 'vue'
import notificationList from './src/index.vue'

export default {
  install(app: App) {
    app.component('notificationList', notificationList)
  }
}
