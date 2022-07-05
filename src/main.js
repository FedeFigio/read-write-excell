import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/index.css'
import 'bitboss-ui/dist/default-theme.css'
import BitbossUi from 'bitboss-ui'


createApp(App).use(BitbossUi).mount('#app')
