import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Docdemo from './components/Docdemo.vue'
import Introduce from './view/Introduce.vue'
import GetStart from './view/GetStart.vue'
import Install from './view/Install.vue'

const history = createWebHashHistory()
export const router = createRouter(
    {
        history: history,
        routes: [
            { path: '/', component: Home },
            {
                path: '/doc', component: Doc, children: [
                    { path: '', component: Docdemo },
                    { path: 'intro', component: Introduce },
                    { path: 'start', component: GetStart },
                    { path: 'install', component: Install },
                    { path: 'switch', component: SwitchDemo },
                    { path: 'button', component: ButtonDemo },
                    { path: 'dialog', component: DialogDemo },
                    { path: 'tabs', component: TabsDemo },
                ]
            }
        ]
    }
)