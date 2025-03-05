import {App} from "vue";
import chooseTrend from './src/index.vue'

export default {
  install(app: App) {
    app.component('chooseTrend', chooseTrend)
  }
}
