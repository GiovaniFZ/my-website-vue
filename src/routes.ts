import { createMemoryHistory, createRouter } from 'vue-router'
import AboutMe from './views/AboutMe.vue'
import MySkills from './views/MySkills.vue'
const routes = [
    { path: '/', component: AboutMe },
    { path: '/skills', component: MySkills },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})