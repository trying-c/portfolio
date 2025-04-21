import { createApp } from 'vue'
import naive from 'naive-ui'
import ViewUIPlus from 'view-ui-plus'
import './style.css'
import App from './App.vue'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import './assets/styles/light.less'

const app = createApp(App)
app.use(naive)
app.use(ViewUIPlus)
app.mount('#app')
