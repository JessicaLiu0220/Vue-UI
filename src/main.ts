import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Jessica from "./components/Jessica.vue"
import Jessica2 from "./components/Jessica2.vue"

const history = createWebHashHistory()
const router = createRouter(
    {
        history: history,
        routes: [
            { path: '/', component: Jessica },
            { path: '/xxx', component: Jessica2 }
        ]
    }
)

const app = createApp(App)
app.mount('#app')
app.use(router)