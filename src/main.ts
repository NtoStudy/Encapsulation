import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@wangeditor/editor/dist/css/style.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import hooksUI from '@/components/index'
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)

app.use(hooksUI)
app.use(ElementPlus)
app.mount('#app')
