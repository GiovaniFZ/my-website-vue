import { createMemoryHistory, createRouter } from 'vue-router'
import AboutMe from './views/AboutMe.vue'
import MySkills from './views/MySkills.vue'
import Music from './views/Music.vue'
import Contact from './views/Contact.vue'
import AboutWebsite from './views/AboutWebsite.vue'
import MyProjects from './views/MyProjects.vue'

const routes = [
    { path: '/', component: AboutMe },
    { path: '/skills', component: MySkills },
    { path: '/music', component: Music },
    { path: '/contact', component: Contact },
    { path: '/about', component: AboutWebsite },
    { path: '/my-projects', component: MyProjects },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})