import * as VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Characters from '../views/Characters.vue'
import CharacterDetail from '../views/CharacterDetail.vue'
import Episodes from '../views/Episodes.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/characters', name: 'Characters', component: Characters },
    { path: '/character/:id', name: 'CharacterDetail', component: CharacterDetail },
    { path: '/episodes', name: 'Episodes', component: Episodes },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router;