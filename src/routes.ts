import { createMemoryHistory, createRouter } from 'vue-router'
import AboutMe from './views/AboutMe.vue'
import MySkills from './views/MySkills.vue'
import Music from './views/Music.vue'

const routes = [
    { path: '/', component: AboutMe },
    { path: '/skills', component: MySkills },
    { path: '/music', component: Music },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})